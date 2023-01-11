import React from "react";
import HeadImage from '../assests/HeadImage.jpg' 
import {PhoneIcon, MailIcon} from '@heroicons/react/outline'

const  Allservices = () => {
    return(
        <div className="w-full h-full bg-zinc-100">
            <h1 className="text-center text-black text-6xl font-sans font-bold pt-10 md:pt-0">Our Services</h1>
            <div className="md:grid grid-cols-2 bg-zinc-100 py-6 px-10 gap-4">
                <div className="pt-10">
                    <div className="justify-center  w-full px-4 md:py-4">
                        <img className="h-full w-full" src={HeadImage} alt="" />
                    </div>
                    <div className=" -mt-4 md:flex flex-col justify-center items-start  bg-white py-10 px-10 rounded-xl shadow-xl md:col-start-5 md:20">
                        <p className="text-4xl text-black font-sans font-bold leading-tight">Asthma</p>
                        <p className="text-xl text-black text-opacity-50 leading-normal">Homeopathy, or homeopathic medicine, is an alternative 
                         medical practice founded in the late 1700s in Germany. It's based on the idea that the body has the</p> 
                    </div>
                </div>

                <div className="pt-10">
                    <div className=" justify-center w-full px-4 md:py-4">
                        <img className="h-full w-full" src={HeadImage} alt="" />
                    </div>
                    <div className="-mt-4 md:flex flex-col justify-center items-start  bg-white py-10 px-10 mx-0 rounded-xl shadow-xl  md:20">
                        <p className="text-4xl text-black font-sans font-bold leading-tight">Asthma</p>
                        <p className="text-xl text-black text-opacity-50 leading-normal">Homeopathy, or homeopathic medicine, is an alternative 
                         medical practice founded in the late 1700s in Germany. It's based on the idea that the body has the</p> 
                    </div>
                </div>

                <div className="pt-10">
                    <div className="justify-center  w-full px-4 md:py-4">
                        <img className="h-full w-full" src={HeadImage} alt="" />
                    </div>
                    <div className=" -mt-4 md:flex flex-col justify-center items-start  bg-white py-10 px-10 rounded-xl shadow-xl md:col-start-5 md:20">
                        <p className="text-4xl text-black font-sans font-bold leading-tight">Asthma</p>
                        <p className="text-xl text-black text-opacity-50 leading-normal">Homeopathy, or homeopathic medicine, is an alternative 
                         medical practice founded in the late 1700s in Germany. It's based on the idea that the body has the</p> 
                    </div>
                </div>

                <div className="pt-10">
                    <div className=" justify-center w-full px-4 md:py-4">
                        <img className="h-full w-full" src={HeadImage} alt="" />
                    </div>
                    <div className="-mt-4 md:flex flex-col justify-center items-start  bg-white py-10 px-10 mx-0 rounded-xl shadow-xl  md:20">
                        <p className="text-4xl text-black font-sans font-bold leading-tight">Asthma</p>
                        <p className="text-xl text-black text-opacity-50 leading-normal">Homeopathy, or homeopathic medicine, is an alternative 
                         medical practice founded in the late 1700s in Germany. It's based on the idea that the body has the</p> 
                    </div>
                </div>

            </div>
           
        </div>
    )
}

export default Allservices