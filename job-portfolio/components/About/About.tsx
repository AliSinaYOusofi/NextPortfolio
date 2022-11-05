import { NextPage } from "next";
import React from "react";
import AboutMeText from "./AboutMeText";
import Skills from "./Skills";

const About : NextPage = () => {
    return (
        <>
            <div id={"about"} className=" mt-10 md:mr-4 md:mt-0 md:p-10 p-6 w-[90%] md:w-[100%] rounded-md  bg-black/30">
               <AboutMeText />
               <Skills />
            </div>
        </>
    );
}

export default About;