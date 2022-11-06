import { NextPage } from "next";
import React from "react";
import { useThemeProvider } from "../../context/ThemeProvider";

const Languages: NextPage = () => {
    const counter: number = 90;
    const [{theme}] = useThemeProvider();
    return (
        <div  className="w-full flex justify-center items-center gap-x-10  py-2 mt-3">
            
            <div  className=" w-fit flex flex-col items-center justify-center
            ">
                <div style={{backgroundColor: theme ? "#0A101D" : "white", boxShadow: theme ? "2px 2px 8px black" : "1px 2px 8px darkgray"}} className="bg-black/30 rounded-full py-3 px-[4px] text-center  w-fit border-2 border-[gray]">100%</div>
                <i className="text-sm">Persian</i>
            </div>
            <div className=" w-fit flex flex-col items-center justify-center">
                <div style={{backgroundColor: theme ? "#0A101D" : "white", boxShadow: theme ? "2px 2px 8px black" : "1px 2px 8px darkgray"}} className="bg-black/30 rounded-full text-center w-fit py-3 px-[10px] border-2 border-[gray]">90%</div>
                <i className="text-sm">English</i>
            </div>
            <div className=" w-fit flex flex-col items-center justify-center">
                <div style={{backgroundColor: theme ? "#0A101D" : "white", boxShadow: theme ? "2px 2px 8px black" : "1px 2px 8px darkgray"}} className="bg-black/30 rounded-full  text-center w-fit py-3 px-[10px] border-2 border-[gray]">70%</div>
                <i className="text-sm">Urdu</i>
            </div>
        </div>
    );
}

export default Languages;