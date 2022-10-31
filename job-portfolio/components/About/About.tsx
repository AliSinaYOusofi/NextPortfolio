import { NextPage } from "next";
import React from "react";
import AboutMeText from "./AboutMeText";
import Skills from "./Skills";

const About : NextPage = () => {
    return (
        <>
            <div className=" p-10 rounded-md md:-ml-10 ">
               <AboutMeText />
               <Skills />
            </div>
        </>
    );
}

export default About;