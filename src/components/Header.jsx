import React from "react";
import HeadImage from '../assests/HeadImage.jpg' 
import waves from '../assests/waves.png'
const Header = () => {
    return(
        <div className="w-full h-full bg-zinc-100 ">
            <div className="md:grid grid-cols-12 m-auto ml-0 my-0 bg-zinc-100">
                <div className="md:flex flex-col bg-white w-full h-full col-start-5 col-end-13 row-start-1">
                    <img className="h-full w-full py-1 px-1" src={HeadImage} alt="" />
                </div>

                <div className=" px-4 py-6 bg-black bg-opacity-70 mx-4 -mt-16  justify-items-center  md:hidden ">
                    <p className=" text-center text-4xl text-white font-sans font-bold leading-tight ">We will Help for Your Better Health</p>
                    <p className=" text-center text-xl text-white text-opacity-50 leading-normal">Homeopathy, or homeopathic medicine, is an alternative 
                     medical practice founded in the late 1700s in Germany. 
                     It's based on the idea that the body has the</p>
                     <button className=" hover:shadow-xl py-2 px-2 my-4">Our services</button>
                </div>

                <div className="hidden md:flex flex-col my-20  row-start-1 col-start-1 col-end-8 bg-black bg-opacity-50 py-20 px-28 pr-64">
                    <p className="text-6xl text-white font-sans font-bold leading-tight">We will Help for Your Better Health</p>
                    <p className="text-xl text-white text-opacity-50 leading-normal">Homeopathy, or homeopathic medicine, is an alternative 
                     medical practice founded in the late 1700s in Germany. 
                     It's based on the idea that the body has the</p>
                     <button className="hover:shadow-xl py-2 px-2 my-4">Our services</button>
                </div>
                
                <div className="hidden md:flex flex-col justify-center w-full h-full col-start-6 col-end-10 row-start-1">
                    <img className="h-full w-full py-24" src={waves} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Header