import React from "react";
import HeadImage from '../assests/HeadImage.jpg' 
import waves from '../assests/waves.png'
const SHeader = () => {
    return(
        <div className="w-full h-full bg-zinc-100 ">
            <div className=" md:grid grid-cols-12 m-auto ml-0 my-0 bg-zinc-100">
                
                <div className="w-full col-span-12 md:flex flex-col row-start-1 col-start-1 col-end-7 text-6xl">
                    <p className=" bg-white text-black font-sans font-bold leading-tight px-4 py-8 bg-opacity-80">Our Services</p>
                </div>

                <div className="col-span-12 mt-4 md:flex flex-col md:mt-0 bg-white w-full h-full col-start-2 col-end-12 row-start-1">
                    <img className="h-full w-full py-1 px-1" src={HeadImage} alt="" />
                </div>

            </div>
        </div>
    )
}

export default SHeader