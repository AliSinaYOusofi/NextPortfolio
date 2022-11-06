import { NextPage } from "next";
import React from "react";
import AboutMeText from "./AboutMeText";
import Skills from "./Skills";
import { useThemeProvider } from "../../context/ThemeProvider";

const About : NextPage = () => {

    const [{theme}] = useThemeProvider(); // getting the current theme

    return (
        <>
            <div style={{backgroundColor: theme ? "#060A11" : "#FBFAF2"}} id={"about"} className=" mt-10 md:mr-4 
            md:mt-0 md:p-10 p-6 w-[90%] md:w-[100%] rounded-md  bg-black/30">
               <AboutMeText />
               <Skills />
            </div>
        </>
    );
}

export default About;