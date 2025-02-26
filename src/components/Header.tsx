import React from 'react'
import { LuMenu } from "react-icons/lu";

const Header = () => {
  return (
    <div className='sm:w-20 bg-red-000 shadow-md shadow-gray-500 flex sm:flex-col items-center py-4 px-4'>
        <div>
        <div className='size-[35px] border-white border-3 rounded-full flex items-center justify-center cursor-pointer'>
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