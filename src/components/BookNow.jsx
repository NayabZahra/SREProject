import React from "react";
import HeadImage from '../assests/HeadImage.jpg' 
import waves from '../assests/waves.png'

const BookNow = () => {
    return(
        <div className="w-full h-full bg-zinc-100 ">
            <div className="md:grid grid-cols-12 bg-zinc-100 m-auto ml-0 py-20 gap-8 w-full">
                <div className="flex flex-col bg-white justify-center w-full h-full col-start-9 col-end-13 row-start-1">
                    <div className="mx-1 my-1">
                        <img className="h-full w-full" src={HeadImage} alt="" />
                    </div>
                </div>
                <div className="flex flex-col col-start-1 col-end-9 row-start-1 bg-black bg-opacity-70 py-16 px-16 justify-items-center">
                    <p className="text-6xl text-white font-sans font-bold leading-tight text-center">We will Help for Your Better Health</p>
                    <p className="text-xl text-white text-opacity-50 leading-normal text-center my-8">Homeopathy, or homeopathic medicine, is an alternative 
                     medical practice founded in the late 1700s in Germany. 
                     It's based on the idea that the body has the</p>
                     <button className="hover:shadow-xl py-2 px-2 my-8">Our services</button>
                </div>
                <div className="hidden md:flex flex-col justify-center w-full h-full col-start-7 col-end-11 row-start-1">
                    <img className="h-full w-full py-24" src={waves} alt="" />
                </div>
            </div>
        </div>
    )
}

export default BookNow