import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

function StudentsHome() {
  const navigateTo = useNavigate()
  return (
    <div className="flex items-center justify-center pt-10">
      <div className="flex-row">
        <img src="./img/childrenBanner.gif" className="mx-auto"/>
        <h1 className="sm:text-[80px] md:text-[80px] lg:text-[80px] text-[40px] font-bold pt-7">Welcome to iMAP</h1>
        <h4 className="text-[20px] text-center pt-20">What are you looking for?</h4> 

        <div className="flex justify-center items-center space-x-4 pt-10">
          <Button onClick={()=>navigateTo("/form-one")}>Form 1 Place</Button>
          <Button>Form 5 Place</Button>
        </div> 
        <div className="flex justify-center items-center space-x-4 pt-10">
          <Button variant="outline">University <span className="text-xs"> (Undergrad)</span></Button>
          <Button variant="outline">Internship <span className="text-xs"> (coming soon)</span></Button>
        </div>
      </div>
    </div>
  )
}

export default StudentsHome
