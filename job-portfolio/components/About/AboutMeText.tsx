import { NextPage } from "next";
import React from "react";
import { useThemeProvider } from "../../context/ThemeProvider";

const AboutMeText: NextPage = () => {

    const [{theme}] = useThemeProvider(); // getting the current theme
    
    return(
        <div style={{backgroundColor: theme ? "" : "white", boxShadow: theme ? "0 0 1px 1px black" : "1px 1px 12px darkgray"}} 
            className="flex flex-col gap-y-3 text-white bg-black/40 md:py-12 md:px-2 p-2 rounded-lg">
            <h1 className="font-bold tracking-wide md:text-3xl text-xl text-purple-400 ml-5"> AboutMe </h1>
           
            <p style={{color: theme ? "" : "black"}} className="text-white ml-5 md:text-xl text-sm"> A Passionate full-stack developer with a year of experience. I have developed full-stack applications across various platforms using latest industry-adopted technologies and frameworks. 
            </p>

        </div>
    );
}

export default AboutMeText;