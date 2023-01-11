import React from "react";
const Footer = () => {
    return(
        <div className="w-full bg-slate-900 text-grey-300 py-y px-2 text-white">
            <div className="w-full mx-auto grid grid-cols-2 md:grid-cols-4 border-b-2 border-grey-600 py-8 justify-start">
                <div>
                    <h6 className="font-bold uppercase pt-2">Serives</h6>
                    <ul>
                        <li className="py-1 ">Service 1</li>
                        <li className="py-1 ">Service 1</li>
                        <li className="py-1 ">Service 1</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-bold uppercase pt-2">Company</h6>
                    <ul>
                        <li className="py-1 ">Home</li>
                        <li className="py-1 ">Services</li>
                        <li className="py-1 ">About Us</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-bold uppercase pt-2">Serives</h6>
                    <ul>
                        <li className="py-1 ">Service 1</li>
                        <li className="py-1 ">Service 1</li>
                        <li className="py-1 ">Service 1</li>
                    </ul>
                </div>
                
            </div>
            <div>
                <p>2022 Workflow, LLC, All rights reserved</p>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Footer