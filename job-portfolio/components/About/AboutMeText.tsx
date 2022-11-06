import { NextPage } from "next";
import React from "react";
import { useThemeProvider } from "../../context/ThemeProvider";

const AboutMeText: NextPage = () => {

    const [{theme}] = useThemeProvider(); // getting the current theme
    
    return(
        <div style={{backgroundColor: theme ? "" : "white"}} className="flex flex-col gap-y-3 text-white bg-black/40 py-2 px-2 rounded-lg">
            <h1 className="font-bold tracking-wide md:text-3xl text-sm text-purple-400">function AboutMe() : <span className="text-yellow-500">string</span> </h1>
            <span className="font-bold tracking-wide text-xl md:text-3xl text-[#107c80]">&#123;</span>
            <p className="font-bold tracking-wide text-sm md:text-3xl text-purple-400 ml-10">return <span className="text-lime-500 md:text-2xl text-base">&ldquo;</span></p>
            <p className="text-pink-400 ml-14 md:text-xl text-xs"> I am Creative Designer and Back-end developer from Kabul, 
                Afghanistan, good at both at back-end and fron-end. I 
                love turning complex problems into simple, beautiful designs. 
            </p>
            <span className="font-bold tracking-wide text-base md:text-2xl text-lime-500 ml-10 ">&ldquo;</span>
            <span className="font-bold tracking-wide text-xl md:text-3xl text-[#107c80]">&#125;</span> 
        </div>
    );
}

export default AboutMeText;