import { NextPage } from "next";
import React from "react";
import Testimony from "./Tesmony";

const AllTesimonies: NextPage = () => {
    return (
        <div className="relative">
            <Testimony />
            <div className="hidden md:flex items-center w-fit absolute bg-slate-700 rounded-full px-4 py-4 md:top-[50%] md:left-[10%]
            transition-all duration-300 hover:-translate-x-1 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </div>
            <div className="hidden md:flex items-center w-fit absolute bg-slate-700 rounded-full px-4 py-4 md:top-[50%] md:right-[10%]
            transition-all duration-300 hover:translate-x-1 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </div>

        </div>
    );
}

export default AllTesimonies;