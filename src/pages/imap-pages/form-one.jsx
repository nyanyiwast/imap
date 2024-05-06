"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import QuickMenu from '../../components/custom/QuickMenu';
import { postDataQuery } from "../../api/post"
const baseUrl = import.meta.env.VITE_BASE_URI

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form"

import { Loader2, UserSquare } from "lucide-react"

const formSchema = z.object({
    studentFullName: z.string().min(5, {
    message: "Student name field is mandatory and must be valid",
  }),
    candidateNumber: z.string().min(4, {
    message: "Candidate number field is mandatory and must be valid",
  }),
    centerNumber: z.string().min(5, {
    message: "Center number field is mandatory and must be valid",
  }),
  grade7Units: z
  .string()
  .refine(value => {
    const intValue = parseInt(value);
    return Number.isInteger(intValue) && intValue >= 4 && intValue <= 36;
  }, 
  {
    message: "Units field must be a positive integer between 4 and 36",
  }),
  })

function FormOneLanding() {
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    document.title = "Application - Form 1 Details | iMAP"
  }, [])

  // 1. Define your form.
 const form = useForm({
     resolver: zodResolver(formSchema),
     defaultValues: {
      studentFullName: "",
      candidateNumber: "",
      centerNumber: "",
      schoolId: 1,
      grade7Units: "",
      examBoard: "ZIMSEC",
      studentType: "LOCAL",
      gender: "MALE",
      appliedDate: new Date(),
      yearAppliedFor: new Date().getFullYear(),
      schoolResponseStatus: "TRIAL"
     },
   })

  // 2. Define a submit handler.
  async function onSubmit(values) {
    setLoading(true)
    const { schoolId, examBoard, studentType, gender, appliedDate, yearAppliedFor, schoolResponseStatus } = form.getValues(); // Access the provinceId value
    const updatedValues = { ...values, schoolId, examBoard, studentType, gender, appliedDate, yearAppliedFor, schoolResponseStatus }; // Include provinceId in the values object

    try {
      const url = `${baseUrl}/form_one_applications`; // Specify your API URL
      const response = await postDataQuery(url, updatedValues);
      console.log('Response:', response);
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.error('Error:', error);
      // Handle the error appropriately
    }
  }   

  return (
    <div className="mt-10 items-center justify-center">
      <div className="flex gap-8">
      <div className="py-12 mr-10 hidden md:inline">
          <div className="flex flex-col gap-y-4">
            <QuickMenu />
          </div>
        </div>
        <div className='w-[600px] overflow-y-auto'>
          <div className="py-10 ml-10">
            <h1 className="text-[25px] text-left">Apply for a form 1 place</h1>
          </div>
          <div className='mx-10'>
            <h4 className='text-[25px]'>Grade 7 details</h4>

            <div className="py-10">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 md:w-full w-full p-5 md:p-0">
                  <FormField
                    control={form.control}
                    name="studentFullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Student Full Name</FormLabel>
                        <FormControl>
                          <Input className="uppercase" placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormDescription className="flex gap-1">Please enter your full name as it is on your National ID <UserSquare /></FormDescription>
                        <FormMessage />
                      </FormItem>
                      
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="candidateNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Candidate Number</FormLabel>
                        <FormControl>
                          <Input placeholder="1234" {...field} />
                        </FormControl>
                        <FormDescription>Get this number from your statement of entry form</FormDescription>
                        <FormMessage />
                      </FormItem>
                      
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="centerNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Center Number</FormLabel>
                        <FormControl>
                          <Input placeholder="1267722" {...field} />
                        </FormControl>
                        <FormDescription>Get this number from your statement of entry form</FormDescription>
                        <FormMessage />
                      </FormItem>
                      
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="grade7Units"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Grade 7 Units</FormLabel>
                        <FormControl>
                          <Input placeholder="12" {...field} />
                        </FormControl>
                        <FormDescription>Enter the correct units achieved</FormDescription>
                        <FormMessage />
                      </FormItem>
                      
                    )}
                  />

                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Choose your examination board" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ZIMSEC">ZIMSEC</SelectItem>
                      <SelectItem value="CAMBRIDGE">CAMBRIDGE</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Choose appropriate answer" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="LOCAL">I AM A LOCAL STUDENT</SelectItem>
                      <SelectItem value="INTERNATIONAL">I AM AN INTERNATIONAL STUDENT</SelectItem>
                    </SelectContent>
                  </Select>

                  { !isLoading ?
                  <Button type="submit">Proceed</Button>
                  :
                  <Button disabled>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing... 😁
                  </Button>
                  }
                </form>
              </Form>
            </div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default FormOneLanding
