
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ModeToggle } from '../mode-toggle';

function NavigationBar() {
    const navigateTo = useNavigate()

  return (
    <nav className="bg-white dark:bg-transparent fixed w-full z-20 top-0 start-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <p 
            onClick={()=>navigateTo("/")}
             className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">iMAP</span>
            </p>
            <div className="flex md:order-2 space-x-3 md:space-x-5 rtl:space-x-reverse">
            <Button onClick={()=>navigateTo("/form-one")}>
                Get started
            </Button>
            <ModeToggle />
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
            </div>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-light border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-transparent md:dark:bg-transparent dark:border-gray-700">
                <li>
                <p 
                onClick={()=>navigateTo("/")}
                 className="cursor-pointer block text-xl py-2 px-3 bg-gray-900 rounded md:bg-transparent md:hover:text-gray-500 md:dark:hover:text-gray-400 md:text-white md:p-0 md:dark:text-white" aria-current="page">
                    Home
                </p>
                </li>
                <li>
                <p 
                onClick={()=>navigateTo("/form-one")}
                 className="cursor-pointer block text-xl py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-500 md:p-0 md:dark:hovegrayx4-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    Applications
                </p>
                </li>
                <li>
                <p 
                onClick={()=>navigateTo("/")}
                 className="cursor-pointer block text-xl py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-500 md:p-0 md:dark:hovegrayx4-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    Contact
                </p>
                </li>
            </ul>
            </div>
        </div>
        </nav>
  )
}

export default NavigationBar
