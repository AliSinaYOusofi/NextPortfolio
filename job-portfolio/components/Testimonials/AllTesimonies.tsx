import { NextPage } from "next";
import React, { useRef } from "react";
import { useThemeProvider } from "../../context/ThemeProvider";
import Testimony from "./Tesmony";

const AllTesimonies: NextPage = () => {
    const right = useRef<HTMLDivElement>(null);
    const [{theme}] = useThemeProvider();

    const sliderLeft = () => {
        if (right.current)
            if (window.innerWidth >= 768 && window.innerWidth <= 1080) 
                right.current.scrollLeft = right.current.scrollLeft - 500;
            else    
                right.current.scrollLeft = right.current.scrollLeft - 705;
             
    }

    const sliderRight = () => { 
        if (right.current)
             if (window.innerWidth >= 768 && window.innerWidth <= 1080) 
                right.current.scrollLeft = right.current.scrollLeft + 500;
            else    
                right.current.scrollLeft = right.current.scrollLeft + 705;
    }
    return (
        <div className="relative flex items-center w-[90%] ml-auto mr-auto">
            <div ref={right}  className="flex items-center justify-start overflow-auto scrollbar-hide scroll-smooth
            gap-x-10">
                
                <Testimony />
                <Testimony />
                <Testimony />
                <Testimony />
            </div>
            <div style={{color: theme ? "" : "black", backgroundColor: theme ? "rgb(0 0 0 / 0.9)" : "#FBFCFA", boxShadow: theme ? "2px 2px 1px black" : "2px 2px 2px darkgray"}} 
                onClick={sliderRight} 
                className="hidden md:flex items-center w-fit absolute bg-slate-700 rounded-full px-4 py-4 md:top-[50%] md:-left-[2%]
                transition-all duration-300 hover:-translate-x-1 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </div>
            <div style={{color: theme ? "" : "black", backgroundColor: theme ? "rgb(0 0 0 / 0.9)" : "#FBFCFA", boxShadow: theme ? "2px 2px 8px black" : "2px 2px 2px darkgray"}} 
                onClick={sliderLeft} 
                className="hidden md:flex items-center w-fit absolute bg-slate-700 rounded-full px-4 py-4 md:top-[50%] md:-right-[2%]
                transition-all duration-300 hover:translate-x-1 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </div>

        </div>
    );
}

export default AllTesimonies;