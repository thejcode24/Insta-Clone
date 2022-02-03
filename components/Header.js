import React from 'react';
import Image from "next/image";
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";


function Header() {
  return (    

    <header className="shadow-sm border-b bg-white sticky top-0 z-50">
    {/* Header Bar */}

      <div className="flex justify-between p-2 max-w-6xl mx-5 xl:mx-auto ">   

        {/* Left - Instagram logo */}
        <div className= "relative hidden h-24 w-24 lg:inline-grid">
            <Image 
                src="https://cdn.iconscout.com/icon/free/png-256/instagram-60-189768.png"
                layout="fill"
                objectFit="contain"
            />
        </div>

        <div className= "relative lg:hidden  w-10 flex-shrink-0 cursor-pointer">
            <Image 
                src="https://cdn.iconscout.com/icon/free/png-256/instagram-1464521-1239436.png"
                layout="fill"
                objectFit="contain"
            />
        </div>


        {/* Middle - Search input field */}

        <div className="max-w-xs">
          <div className="mt-3 mr-2 p-3 relative rounded-md ">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <input
              type="text"
              className="bg-gray-50 block w-full pl-10 p-2 sm:text-sm focus:ring-black focus:border-black border-gray-500 rounded-md"
              placeholder="Search"
            />
          </div>
        </div>



        {/* Right - Menu Buttons */}
        <div className='flex items-center justify-end space-x-4'>
          
          <HomeIcon className='navBtn'/>

          {/* Alert token on Airplane Icon */}
          <div className=' relative navBtn'>
            <PaperAirplaneIcon className='navBtn rotate-45'/>
            <div className='absolute top-1 right-0 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white'>3</div>
          </div>


          <MenuIcon className='h-6 md:hidden cursor-pointer'/>
          <PlusCircleIcon className='navBtn'/>
          <UserGroupIcon className='navBtn'/>
          <HeartIcon className='navBtn'/>
        </div>
        

      </div>
      
    </header>
  )

}

export default Header;
