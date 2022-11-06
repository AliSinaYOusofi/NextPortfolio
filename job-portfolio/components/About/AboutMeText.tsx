import { NextPage } from "next";
import React from "react";
import { useThemeProvider } from "../../context/ThemeProvider";

const AboutMeText: NextPage = () => {

    const [{theme}] = useThemeProvider(); // getting the current theme
    
    return(
        <div style={{backgroundColor: theme ? "" : "white"}} className="flex flex-col gap-y-3 text-white bg-black/40 py-12 px-2 rounded-lg">
            <h1 className="font-bold tracking-wide md:text-3xl text-sm text-purple-400 ml-5"> AboutMe </h1>
           
            <p className="text-[#60A5FA] ml-14 md:text-xl text-xs"> I am Creative Designer and Back-end developer from Kabul, 
                Afghanistan, good at both at back-end and fron-end. I 
                love turning complex problems into simple, beautiful designs. 
            </p>
           
        </div>
    );
}

export default AboutMeText;