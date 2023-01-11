import React from "react";
import HeadImage from '../assests/HeadImage.jpg' 
import { MdSouth } from "react-icons/md";
const SHeader = () => {
    return(
        
        <div className="w-full h-full bg-zinc-100">
            <div className=" h-full md:grid grid-cols-12 m-auto pt-10 ml-0 my-0 bg-zinc-100">
                <div className="col-span-12 ml-0  mb-0 md:flex flex-col row-start-1 col-start-1 col-end-13 bg-slate-800 md:ml-40 md:mb-40">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="text-4xl md:text-6xl">
                            <p className=" text-white text-center md:text-left font-sans font-bold leading-tight px-16 py-16">Why choose us ?</p>
                       
                            <div className="col-span-12 ml-0 md:flex flex-col bg-white w-full md:-ml-40">
                                <img className="h-full w-full py-1 px-1" src={HeadImage} alt="" />
                            </div>
                        </div>
                        
                        <div className="px-10  md:pr-20 ">
                            <p className=" text-white font-sans leading-tight px-16 py-10 opacity-70">Why choose us ?</p>
                            <div className="px-auto w-auto">
                                <div className="rounded-3xl bg-white shadow-xl">
                                    <p className=" text-black  text-4xl font-sans font-bold leading-tight px-2 py-2">5000+</p>
                                    <p className=" text-slate-600 text-opacity-70  text-xl font-sans leading-tight px-2 py-2">Successful treatment</p>
                                </div>
                            </div>
                            <div className="px-auto my-10 w-auto">
                                <div className="rounded-3xl bg-white shadow-xl">
                                    <MdSouth />
                                    <p className=" text-black  text-4xl font-sans font-bold leading-tight px-2 py-2">20+</p>
                                    <p className=" text-slate-600 text-opacity-70  text-xl font-sans leading-tight px-2 py-2">Years experience</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>


            </div>
        </div>
    )
}

export default SHeader