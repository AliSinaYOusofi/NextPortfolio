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
        <div style={{display: props.show ? "flex" : "hidden"}} className="menus hidden md:flex flex-row-reverse bg-black/30 fixed z-90 md:top-[80%] lg:right-[30rem]
        right-[2rem] top-[80%] z-10
        
        justify-center items-center p-4 lg:p-6 rounded-md gap-x-10  transition-all duration-300">
            
            <div className="menu justify-center items-center flex-col transition-all duration-300
            bg-[#535353]  lg:p-2 p-1 rounded-lg cursor-pointer">
               <div className="flex items-center justify-center text-2xl"><CgProfile /></div>
                <p>About</p>
            </div>
            
            <div className="menu justify-center items-center flex-col transition-all duration-300
            bg-[#535353] lg:p-2 p-1 rounded-lg cursor-pointer">
               <div className="flex items-center justify-center text-2xl text-gray-400"><RiContactsLine /></div>
                <p>Contact</p>
            </div>
            
            <div className="menu justify-center items-center flex-col transition-all duration-300
            bg-[#535353] lg:p-2 p-1 rounded-lg cursor-pointer">
               <div className="flex items-center justify-center text-2xl"><AiFillProject /></div>
                <p>Projects</p>
            </div>
            
            <div className="menu justify-center items-center flex-col transition-all duration-300
            bg-[#535353] lg:p-2 p-1 rounded-lg cursor-pointer">
               <div className="flex items-center justify-center text-2xl"><AiOutlineHome /></div>
                <p>Home</p>
            </div>
            
        </div>
    );
}

export default MenuItem;