import { Outlet } from "react-router-dom"
import NavigationBar from "../components/custom/NavigationBar"

export default function Root() {
  const year = new Date().getFullYear()
    return (
      <>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <NavigationBar />
          <div className="pt-10 md:px-20 px-2">
             <Outlet />
          </div>
        </div>
        <div id="footer" className="flex-shrink-0 py-4 text-center text-[14px]">
          <p className="text-[12px]">
            Developed with ❤️ by 
            <span className="text-blue-600 cursor-pointer" title="Visit my official X handle?">
            {" "}  Sedrick_Tha_Dev
            </span> © {year} for MOPSE
          </p>
        </div>
      </div>
      </>
    )
  }