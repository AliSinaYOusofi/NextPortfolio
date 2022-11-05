import { NextPage } from "next";
import React from "react";

const AboutMeText: NextPage = () => {
    return(
        <div className="flex flex-col gap-y-3 text-white">
            <h1 className="font-bold tracking-wide md:text-4xl text-xl text-purple-400">function AboutMe() : <span className="text-yellow-500">string</span> <span className="text-[#107c80]">&#123;</span></h1>
            <p className="font-bold tracking-wide text-xl md:text-4xl text-purple-400 ml-10">return <span className="text-lime-500 md:text-xl text-base">&ldquo;</span></p>
            <p className="text-pink-400 ml-14 md:text-2xl text-xs"> I am Creative Designer and Back-end developer from Kabul, 
                Afghanistan, good at both at back-end and fron-end. I 
                love turning complex problems into simple, beautiful designs. 
            </p>
            <span className="font-bold tracking-wide text-base md:text-4xl text-lime-500 ml-10 ">&ldquo;</span>
            <span className="font-bold tracking-wide text-xl md:text-4xl text-[#107c80]">&#125;</span> 
        </div>
    );
}

export default AboutMeText;