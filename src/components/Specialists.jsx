import React from "react";
import HeadImage from '../assests/HeadImage.jpg' 
import {PhoneIcon, MailIcon} from '@heroicons/react/outline'

const Specialists = () => {
    return(
        <div className="w-full h-full bg-zinc-100 overflow-x-hidden">
            <h1 className="text-center text-black text-6xl font-sans font-bold">Our Specialists</h1>
            <div className="md:grid grid-cols-12 bg-zinc-100 m-auto ml-0 py-10 px-10">
                <div className="flex flex-col justify-center h-full col-start-1 col-end-5 row-start-1 px-4 md:py-4">
                    <img className="h-full w-full" src={HeadImage} alt="" />
                </div>
                <div className=" -mt-4 md:flex flex-col justify-center items-start row-start-1 col-start-4 col-end-13 bg-white py-20 px-28 pr-64 mx-0 rounded-xl shadow-xl md:col-start-5 md:20">
                    <p className="text-2xl text-black font-sans font-bold leading-tight">We will Help for Your Better Health</p>
                    <p className="text-xl text-black text-opacity-50 leading-normal">Homeopathy, or homeopathic medicine, is an alternative 
                     medical practice founded in the late 1700s in Germany. 
                     It's based on the idea that the body has the</p>
                     <div className="flex flex-row">
                        <div className="flex rounded-full bg-teal-500 w-10 h-10 px-1 mx-4 my-4">
                            <PhoneIcon className="w-7"/>
                        </div>
                        <p>ahjdadhasdh</p>
                     </div>
                    <div className="flex flex-row">
                        <div className="flex rounded-full bg-teal-500 w-10 h-10 px-1  mx-4 my-4">
                            <MailIcon className="w-7"/>
                        </div>
                        <p>ahjdadhasdh</p>
                     </div>
                </div>
            </div>
            <div className="md:grid grid-cols-12 bg-zinc-100 m-auto ml-0 px-10 py-10 ">
                <div className="flex flex-col justify-center  h-full col-start-1 col-end-5 row-start-1 px-4 md:py-4">
                    <img className="h-full w-full" src={HeadImage} alt="" />
                </div>
                <div className=" -mt-4 md:flex flex-col justify-center items-start row-start-1 col-start-4 col-end-13 bg-white py-20 px-28 pr-64 mx-0 rounded-xl shadow-xl md:col-start-5 md:20">
                    <p className="text-2xl text-black font-sans font-bold leading-tight">We will Help for Your Better Health</p>
                    <p className="text-xl text-black text-opacity-50 leading-normal">Homeopathy, or homeopathic medicine, is an alternative 
                     medical practice founded in the late 1700s in Germany. 
                     It's based on the idea that the body has the</p>
                     <div className="flex flex-row">
                        <div className="flex rounded-full bg-teal-500 w-10 h-10 px-1 mx-4 my-4">
                            <PhoneIcon className="w-7"/>
                        </div>
                        <p className="flex">ahjdadhasdh</p>
                     </div>
                    <div className=" flex flex-row">
                        <div className="flex rounded-full bg-teal-500 w-10 h-10 px-1 mx-4 my-4">
                            <MailIcon className="w-7"/>
                        </div>
                        <p>ahjdadhasdh</p>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default Specialists