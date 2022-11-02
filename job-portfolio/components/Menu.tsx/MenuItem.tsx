import { NextPage } from "next";
import React from "react";
import {CgProfile} from 'react-icons/cg';
import {AiFillProject, AiOutlineHome} from 'react-icons/ai';
import {GrContactInfo} from 'react-icons/gr';
import {RiContactsLine} from 'react-icons/ri';

interface Props {
    show: boolean
}
const MenuItem: NextPage<Props> = (props) => {
    return(
        <div style={{display: props.show ? "flex" : "hidden"}} className="menus hidden md:flex flex-row-reverse bg-black/50 fixed z-90 md:top-[80%] lg:right-[25%]
        right-[1%] top-[80%] z-10 
        
        justify-center items-center p-4  text-sm md:text-2xl lg:p-6 rounded-md gap-x-10  transition-all duration-300">
            
            <div className="menu justify-center items-center gap-x-1 flex-row transition-all duration-300
            bg-[#1a2027] z-10  lg:p-3 p-1 rounded-lg cursor-pointer">
               <div className="flex items-center justify-center"><CgProfile /></div>
                <p className="text-sm md:text-xl">About</p>
            </div>
            
            <div className="menu justify-center items-center flex-row gap-x-1 transition-all duration-300
            bg-[#1a2027] lg:p-3 p-1 rounded-lg cursor-pointer">
               <div className="flex items-center justify-center  text-gray-400"><RiContactsLine /></div>
                <p className="text-sm md:text-xl">Contact</p>
            </div>
            
            <div className="menu justify-center items-center gap-x-1 flex-row transition-all duration-300
            bg-[#1a2027] lg:p-3 p-1 rounded-lg cursor-pointer">
               <div className="flex items-center justify-center"><AiFillProject /></div>
                <p className="text-sm md:text-xl">Projects</p>
            </div>
            
            <div className="menu justify-center items-center flex-row gap-x-1 transition-all duration-300
            bg-[#1a2027] lg:p-3 p-1 rounded-lg cursor-pointer">
               <div className="flex items-center justify-center"><AiOutlineHome /></div>
                <p className="text-sm md:text-xl">Home</p>
            </div>
            
        </div>
    );
}

export default MenuItem;