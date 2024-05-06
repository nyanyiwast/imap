import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

function StudentsHome() {
  const navigateTo = useNavigate()
  return (
    <div className="flex items-center justify-center py-10">
      <div className="flex-row">
        {/* <img src="./img/childrenBanner.gif" className="mx-auto"/> */}
        <div>
          <h4 className="text-[30px] text-center pt-20">
            Goodbye Physical Applications, 
            <span className="font-bold">
            {" 👋🏽 "} Hello iMAP 
            </span>
          </h4> 
          <h1 className="sm:text-[80px] md:text-[80px] lg:text-[80px] text-[40px] font-bold pt-7 text-center">
            improved Ministry Application Platform.
          </h1>          
        </div>

        <div className="flex justify-center items-center space-x-4 pt-10 px-5">
          <Button onClick={()=>navigateTo("/form-one")}>Apply Form 1</Button>
          <Button>Apply Form 5</Button>
        </div> 
        <div className="flex justify-center items-center space-x-4 pt-10">
          <Button variant="outline">University <span className="text-xs"> (Undergrad)</span></Button>
          <Button variant="outline">Internship <span className="text-xs"> (TBA)</span></Button>
        </div>
        <img src="./img/childrenBanner.gif" className="mx-auto"/>
      </div>
    </div>
  )
}

export default StudentsHome
