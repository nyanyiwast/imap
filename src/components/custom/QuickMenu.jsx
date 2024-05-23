import { BriefcaseBusiness, GraduationCap, LucideNavigation, User2Icon, Users } from 'lucide-react';

function QuickMenu() {
  return (
    <>
        <label className='text-[15px] text-slate-600 font-light flex gap-2 underline'>Quick access menu<LucideNavigation size={15}/></label>
        <label className="cursor-pointer text-[18px] hover:bg-gray-200 rounded-md flex gap-x-2 p-2"><User2Icon /> Form One</label>
        <label className="cursor-pointer text-[18px] hover:bg-gray-200 rounded-md flex gap-x-2 p-2"><Users /> Form Five</label>
        <label className="cursor-pointer text-[18px] hover:bg-gray-200 rounded-md flex gap-x-2 p-2"><GraduationCap /> University</label>
        <label className="cursor-pointer text-[18px] hover:bg-gray-200 rounded-md flex gap-x-2 p-2"><BriefcaseBusiness /> Internship</label>
    </>
  )
}

export default QuickMenu
