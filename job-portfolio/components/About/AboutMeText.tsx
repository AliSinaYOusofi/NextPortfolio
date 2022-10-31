import { NextPage } from "next";
import React from "react";

const AboutMeText: NextPage = () => {
    return(
        <div className="flex flex-col gap-y-3 text-white">
            <h1 className="font-bold tracking-wide text-4xl"> About ME </h1>
            <p> I am Creative Director and UI/UX Designer from Sydney, 
                Australia, working in web development and print media. I 
                enjoy turning complex problems into simple, beautiful and i
                ntuitive designs. 
            </p>
            <p>
                My aim is to bring across your message and identity in the most creative way. 
                I created web design for many famous brand companies. 
            </p>
        </div>
    );
}

export default AboutMeText;