import { NextPage } from 'next'
import React from 'react'
import {BsDownload, BsFacebook, BsTwitter, BsDribbble, BsWhatsapp} from 'react-icons/bs';

const WhatMe: NextPage = () => {
    return (
        <div className="mt-28">
            <h1 className="font-bold tracking-widest text-xl"> Ali Sina Yousofi </h1>
            <h3 className="px-1 py-1 bg-[#1a1919] w-fit rounded-sm  text-gray-200 mt-2"> &lt;Full-Stack-Developer /&gt; </h3>
            <div className="icons flex gap-x-2 text-2xl mt-3">
                <div className="icons transition-all duration-300  bg-[#1D1D1D] p-2 cursor-pointer after:bg-gray-400  rounded-md"> <BsFacebook /> </div>
                <div className="icons transition-all duration-300 bg-[#1D1D1D] p-2 cursor-pointer after:bg-gray-400  rounded-md"> <BsTwitter /></div>
                <div className="icons transition-all duration-300 bg-[#1D1D1D] p-2 cursor-pointer after:bg-gray-400  ro[#1D1D1D]"> <BsDribbble /> </div>
                <div className="icons transition-all duration-300 bg-[#1D1D1D] p-2 cursor-pointer after:bg-gray-400  rounded-md"> <BsWhatsapp /> </div>
            </div>
        </div>
    )
}

export default WhatMe;
