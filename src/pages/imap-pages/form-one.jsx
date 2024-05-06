import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import QuickMenu from '../../components/custom/QuickMenu';

function FormOneLanding() {
  useEffect(() => {
    document.title = "Application - Form 1 Details | iMAP"
  }, []);
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
            <div className='pt-5 py-2'>
              <p>Center Number</p>              
            </div>
            <div>
              <Input 
              />
              <label className='text-slate-500 text-[13px] font-light'>
                The 6 digit code that is used to uniquely identify your primary school that you went to. It usually 
                looks something like this: 672190.
              </label>
            </div>

            <div className='pt-10 py-2'>
              <p>Candidate Number</p>              
            </div>
            <div>
              <Input 
              />
              <label className='text-slate-500 text-[13px] font-light'>
                The unique 4 digit number that you used when you sat for your grade 7 exams. An example of a candidate number is 3019.
              </label>
            </div>

            <div className='pt-10 py-2'>
              <p>Examination board</p>
            </div>
            <div>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose your examination board" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">ZIMSEC</SelectItem>
                <SelectItem value="dark">CAMBRIDGE</SelectItem>
                <SelectItem value="system">OTHER (international)</SelectItem>
              </SelectContent>
            </Select>
            <label className='text-slate-500 text-[13px] font-light'>
                When you sat for your exams, the organizing board that had its name printed on every examination sheet is here by referred to as the 
                Examination board.
              </label>
            </div>
            
            <div className='pt-10 py-2'>
              <Button>
                Next
              </Button>
              <label className='px-5 text-slate-500 font-light text-[13px]'>(1/2)</label>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default FormOneLanding
