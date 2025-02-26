import { useEffect, useState } from "react";
import { LuMenu } from "react-icons/lu";

const Header = () => {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
      );
      useEffect(() => {
        if (darkMode) {
          document.documentElement.classList.add("dark");
          localStorage.setItem("theme", "dark");
        } else {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("theme", "light");
        }
      }, [darkMode]);
  return (
    <div className='sm:w-20 bg-red-000 dark:bg-red-111 shadow-md shadow-gray-500 flex sm:flex-col items-center py-4 px-4 fixed w-full sm:h-full'>
        <div>
        <div className='size-[35px] border-white border-3 rounded-full flex items-center justify-center cursor-pointer' onClick={() => setDarkMode(!darkMode)}>
            <div className='size-[24px] bg-white rounded-full'></div>
        </div>
        </div>
        <div className='h-[90%] w-full flex items-center justify-end sm:justify-center'>
            <LuMenu color='white' size={40} className='cursor-pointer' />
        </div>
    </div>
  )
}

export default Header