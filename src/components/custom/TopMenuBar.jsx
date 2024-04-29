import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
    MenubarShortcut,
  } from "@/components/ui/menubar"
  import { useNavigate } from "react-router-dom"
  
function TopMenuBar() {
    const navigateTo = useNavigate()

  return (
    <div className="">
    <label onClick={()=>navigateTo("/home")} className="cursor-pointer text-left text-[40px] absolute p-5">iMAP</label>  
    <div className="p-5 flex justify-center items-center">
      <Menubar>
        <MenubarMenu>
        </MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger onClick={()=> navigateTo("/home")}>Home</MenubarTrigger>
            <MenubarTrigger>Apply</MenubarTrigger>
            <MenubarContent>
            <MenubarItem onClick={()=> navigateTo("/form-one")}>Form One</MenubarItem>
            <MenubarItem>Form Five</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>University</MenubarItem>
            <MenubarItem>Internship <MenubarShortcut className="text-[10px]">(coming soon)</MenubarShortcut></MenubarItem>
            </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger>Track</MenubarTrigger>
        </MenubarMenu>    
        <MenubarMenu>
            <MenubarTrigger>FAQ</MenubarTrigger>
        </MenubarMenu> 
        <MenubarMenu>
            <MenubarTrigger>Contact</MenubarTrigger>
        </MenubarMenu> 
        </Menubar>
        </div>
    </div>
  )
}

export default TopMenuBar
