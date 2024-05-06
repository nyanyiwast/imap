import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { LampDemo } from '../../components/ui/lamp';

function StudentsHome() {
  const navigateTo = useNavigate()
  return (
    <div className="py-10">
               <LampDemo />   
      <div className="flex-row">
        <div className="w-full">
      
        </div>

        <div className="flex justify-center items-center space-x-4 pt-10 px-5">
          <Button onClick={()=>navigateTo("/form-one")}>Apply Form 1</Button>
          <Button>Apply Form 5</Button>
        </div> 
        <div className="flex justify-center items-center space-x-4 pt-10">
          <Button variant="outline">University <span className="text-xs"> (Undergrad)</span></Button>
          <Button variant="outline">Internship <span className="text-xs"> (TBA)</span></Button>
        </div>
      </div>
    </div>
  )
}

export default StudentsHome
