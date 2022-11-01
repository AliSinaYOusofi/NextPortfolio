import { NextPage } from "next";
import React from "react";

const Languages: NextPage = () => {
    const counter: number = 90;
    return (
        <div className="w-full flex justify-center items-center gap-x-10">
            
            
            
            <div className=" w-fit flex flex-col items-center justify-center">
                <p className="bg-black/30 rounded-full p-2 text-center border-2 w-fit">{counter}%</p>
                <i className="text-sm">English</i>
            </div>
            <div className=" w-fit flex flex-col items-center justify-center">
                <p className="bg-black/30 rounded-full p-2 text-center border-2 w-fit">{counter}%</p>
                <i className="text-sm">English</i>
            </div>
            <div className=" w-fit flex flex-col items-center justify-center">
                <p className="bg-black/30 rounded-full p-2 text-center border-2 w-fit">{counter}%</p>
                <i className="text-sm">English</i>
            </div>
        </div>
    );
}

export default Languages;