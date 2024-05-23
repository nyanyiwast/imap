import { SmileIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";

export default function ComingSoonPage() {
  const navigateTo = useNavigate()
  return (
    <div className="flex items-center justify-center h-screen">
    <div id="error-page" className="mx-auto justify-center text-center">
      <h1 className="text-3xl font-bold text-red-400 pb-10">Hey there! This Page Is Coming Soon</h1>
      <p className="text-lg pb-10">Sorry about that!</p>
      <Button onClick={()=>navigateTo("/")}>Click Me Instead<span className="ml-2"><SmileIcon /></span></Button>
    </div>
    </div>
  );
}