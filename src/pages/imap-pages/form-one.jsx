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


import { Loader2, SmileIcon, UserSquare, UsersRoundIcon } from "lucide-react"

const formSchema = z.object({
    studentFullName: z.string().min(5, {
    message: "Student name field is mandatory and must be valid",
  }),
    candidateNumber: z.string().min(4, {
      message: "Candidate number field must be 4 characters long",
    }).max(4, {
      message: "Candidate number field must be 4 characters long",
    }),
    centerNumber: z.string().min(6, {
      message: "Candidate number field must be 6 characters long",
    }).max(6, {
      message: "Candidate number field must be 6 characters long",
    }),
  units: z
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
  const [isEligible, setEligible] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [isEnrolled, setEnrolled] = useState(false)
  const [data, setData] = useState("")
  const [requestData, setRequestData] = useState("")
  const [gender, setGender] = useState('FEMALE')
  const [pageTitle, setPageTitle] = useState("Apply for a form 1 place")
  
  useEffect(() => {
    document.title = "Application - Form 1 Details | iMAP"
  }, [data, requestData, gender, pageTitle])
  

  // 1. Define your form.
 const form = useForm({
     resolver: zodResolver(formSchema),
     defaultValues: {
      studentFullName: "",
      candidateNumber: "",
      centerNumber: "",
      schoolId: 1,
      units: "",
      gender,
     },
   })

  // 2. Define a submit handler.
  async function onSubmit(values) {
    setLoading(true)
    const { schoolId, gender } = form.getValues(); // Access the provinceId value
    const updatedValues = { ...values, schoolId, gender }; // Include provinceId in the values object

    try {
      const url = `${baseUrl}/form-one-applications`; // Specify your API URL
      const response = await postDataQuery(url, updatedValues);
      setRequestData(updatedValues)
      setLoading(false)
      // load new component after 3 seconds to allow customer to read toast message
      if(response === 406){
        setEligible(false)
    }
    else{
      setTimeout(() => {
        setEligible(true)
        setPageTitle("You passed the eligibility test!!!")
        setData(updatedValues) 
      }, 3000);
    }
      return

    } catch (error) {
      if (error === 406) {
      setLoading(false)
      setEligible(false)
      console.error('Error:', error);
      return
      }
      setLoading(false)
      setEligible(false)
    }
  }   

    // 3. Define a final submit handler for enrollment
    async function onSubmitEnrollment() {
      setLoading(true)

      try {
        const url = `${baseUrl}/form-one-applications/enrol`; // Specify your API URL
        const response = await postDataQuery(url, requestData);
        setLoading(false)
        setPageTitle('CONGRATULATIONS!')
        setEnrolled(true)
        // load new component after 3 seconds to allow customer to read toast message
  
        console.log(response)
      } catch (error) {
        setLoading(false)
        setEnrolled(false)
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
        <div className='md:w-1/2 overflow-y-auto'>
          <div className="pt-10 ml-10">
            <h1 className="text-[25px] text-left">{pageTitle}</h1>
          </div>
          {!isEligible ?          
          <div className='mx-10'>
            {/* <h4 className='text-[25px]'>Grade 7 details</h4> */}
            <div className="py-5">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 md:w-full w-full p-5 md:p-0">
                  <FormField
                    control={form.control}
                    name="studentFullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Full Name</FormLabel>
                        <FormControl>
                          <Input className="uppercase" placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormDescription className="flex gap-1">Please enter your full name as it is shown on your ZIMSEC Statement Of Entry <UserSquare /></FormDescription>
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
                          <Input placeholder="126772" {...field} />
                        </FormControl>
                        <FormDescription>Get this number from your statement of entry form</FormDescription>
                        <FormMessage />
                      </FormItem>
                      
                    )}
                  />


                  <FormField
                    control={form.control}
                    name="units"
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

                  <div className="py-10">
                    <div className="flex gap-10 pb-5">
                      <UsersRoundIcon size={60}/>
                      <h1 className="text-lg">Select Appropriate Choice</h1>                    
                    </div>
                  <div className="md:w-1/2 w-full">
                    <Select
                    onValueChange={(value)=> setGender(value)}
                    >
                      <SelectTrigger className="w-full text-black">
                        <SelectValue placeholder="Choose an appropriate choice" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="MALE">MALE</SelectItem>
                        <SelectItem value="FEMALE">FEMALE</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  </div>

                  { !isLoading ?
                  <Button className="md:w-1/2 w-full" type="submit">Check Eligibility</Button>
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
          :
          <div className="mx-10">
            { !isEnrolled ? <>
            <h1 className="flex gap-1">We hope you are excited to join this school? <SmileIcon /></h1>
            <h1 className="">If so, please click Accept Offer or Reject Offer to complete your application</h1>
          <div className="py-10 flex gap-4">
          { !isLoading ?
                  <div className="flex gap-5">
                    <Button onClick={()=> onSubmitEnrollment()}>I ACCEPT</Button>
                    <Button onClick={()=> setEligible(false)}>I DECLINE</Button>
                  </div>
                  :
                  <Button disabled>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Applying... 😁
                  </Button>
            }
          </div>
          <h1 className="">Only accepted students will be contacted.</h1>
          </>  
          : 
          <div className="mx-10">
            <h1 className="text-xl pb-5">Yipeeeee!</h1>
            <p className="text-md pb-5">You have now officially been accepted and enrolled to School Name.</p>
            <p className="text-md pb-5">You can proceed to contact the school administration on +263 (242) 789 100 or visit 
            the school on the address 12 Mukoba Gweru if you are near by to pay an acceptance fee.
            </p>
            <p className="text-md">Here are the banking details of the school: TBA</p>
            <img src="/img/celebrate.gif" />
          </div>
          }
        </div>
          
        }
      </div>
    </div>
    </div>
  )
}

export default FormOneLanding
