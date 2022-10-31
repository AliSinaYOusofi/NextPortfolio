import { NextPage } from "next";
import React from "react";
import { AiFillAccountBook } from "react-icons/ai";

// define our types

interface Props {
    header: string | null;
    icon : any | object | SVGAElement;
    text: string | null;
}

const SkillsCard: NextPage<Props> = (props) => {
    
    return (
        
        <div className=" p-4 bg-white rounded-lg mt-3 w-[49%]
        relative transition-all duration-300 skills">
            <div className="flex justify-between items-center">
                {/* <props.icon /> */}
                <h2 className="text-gray-800 textxl font-semibold">{props.header}</h2>
                <p className="text-4xl text-gray-500 object-cover rounded-full border-2 border-indigo-500">{props.icon}</p>
            </div>
            <div>
                <p className="mt-2 text-gray-600">{props.text}</p>
            </div>
            <div className="flex justify-end mt-4">
                <a href="#" className="text-xl font-medium text-indigo-500">{props.header}</a>
            </div>
        </div>
    );
}

export default SkillsCard;