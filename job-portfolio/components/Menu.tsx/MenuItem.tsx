import { NextPage } from "next";
import React from "react";
import {CgProfile} from 'react-icons/cg';
import {AiFillProject, AiOutlineHome} from 'react-icons/ai';
import {GrContactInfo} from 'react-icons/gr';
import {RiContactsLine} from 'react-icons/ri';

const MenuItem: NextPage = () => {
    return(
        <div className="menus flex bg-black/30 fixed top-[80%] right-[30rem]
        justify-center items-center p-6 rounded-md gap-x-10 z-10 transition-all duration-300">
            
            <div className="menu justify-center items-center flex-col transition-all duration-300
            bg-[#535353]  p-2 rounded-lg cursor-pointer">
               <div className="flex items-center justify-center text-2xl"><CgProfile /></div>
                <p>About</p>
            </div>
            
            <div className="menu justify-center items-center flex-col transition-all duration-300
            bg-[#535353] p-2 rounded-lg cursor-pointer">
               <div className="flex items-center justify-center text-2xl text-gray-400"><RiContactsLine /></div>
                <p>Contact</p>
            </div>
            
            <div className="menu justify-center items-center flex-col transition-all duration-300
            bg-[#535353] p-2 rounded-lg cursor-pointer">
               <div className="flex items-center justify-center text-2xl"><AiFillProject /></div>
                <p>Projects</p>
            </div>
            
            <div className="menu justify-center items-center flex-col transition-all duration-300
            bg-[#535353] p-2 rounded-lg cursor-pointer">
               <div className="flex items-center justify-center text-2xl"><AiOutlineHome /></div>
                <p>Home</p>
            </div>
            
        </div>
    );
}

export default MenuItem;