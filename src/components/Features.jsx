import React from "react";
import HeadImage from '../assests/HeadImage.jpg'

const Features = () => {
    return(
        <div className="w-full h-full bg-zinc-100 flex items-center overflow-x-hidden">
            <div className="w-screen md:grid grid-cols-12 bg-zinc-100 m-auto ml-0 py-20">
                <div className="flex flex-col bg-white justify-center w-full h-full col-start-1 col-end-7 row-start-1">
                    <div className="">
                        <img className="h-full w-full" src={HeadImage} alt="" />
                    </div>
                </div>
                <div className="flex col-start-7 col col-end-13 px-8 py-4">
                    <p className="text-4xl text-black font-sans font-bold leading-tight">Top Features for your convinience</p>
                    <div className="grid grid-row-12">
                        <div className="grid grid-col-12 row-span-3">
                            <div className="cols-span-6">

                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features