import React from "react";
import { useState } from "react";
import Logo from '../assests/Logo.png'
import {MenuIcon, XIcon} from '@heroicons/react/outline'
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return(
        <div className="h-[120px] w-full bg-zinc-100 md:h-[210px] ">
            <div className='h-[120px] md:h-[210px] z-10 bg-zinc-100 fixed w-full flex items-center justify-center'>
                <div className="justify-between py-6 md:px-z flex w-full h-full md:py-16">
                    <div className="mx-4 w-16 h-16 md:w-28 md:h-28 md:mx-20 ">
                        <img src={Logo} alt="" />
                    </div>
                    <ul className="hidden md:flex md:text-2xl font-sans " >
                        <li className=" p-4 md:p-10 ">Home</li>
                        <li className=" p-4 md:p-10 ">Services</li>
                        <li className=" p-4 md:p-10 ">About us</li>
                    </ul>
                    <div className="hidden mx-20 md:flex pr-4">
                        <button className="text-2xl py-auto px-4 mr-6 hover:shadow-2xl duration-500">Make an Appointment</button>
                    </div>
                    <div className="md:hidden" onClick={handleClick}>
                        {!nav ? <MenuIcon className="w-12 mr-4 fill-white"/> : <XIcon className='w-12 mr-4'/>}  
                    </div>
                </div>
                <ul className={!nav? 'hidden' : 'absolute bg-white w-full text-xl'}>
                    <li className=" w-full py-4 bg-teal-500  px-4 rounded-t-lg">Home</li>
                    <li className="w-full py-4 px-4">Services</li>
                    <li className=" w-full px-4 py-4 rounded-b-lg">About us</li>
                </ul> 
            </div>

            <div className="h-[210px] md:h-[210px] ">

            </div>
        </div>
    )
}

export default Navbar