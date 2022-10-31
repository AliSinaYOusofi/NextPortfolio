import { NextPage } from "next";
import React from "react";
import AboutMeText from "./AboutMeText";
import Skills from "./Skills";

const About : NextPage = () => {
    return (
        <>
            <div className=" top-[25%] absolute right-[5%] w-[55%] bg-black
            p-10 rounded-md mt-9">
               <AboutMeText />
               <Skills />
            </div>
        </>
    );
}

export default About;