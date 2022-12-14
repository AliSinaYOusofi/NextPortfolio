import { NextPage } from "next";
import React from "react";
import { AiFillAccountBook } from "react-icons/ai";
import { useThemeProvider } from "../../context/ThemeProvider";

// define our types

interface Props {
    header: string | null;
    icon : any | object | SVGAElement;
    text: string | null;
    link: string;
}

const SkillsCard: NextPage<Props> = (props) => {
    
    const [{theme}] = useThemeProvider();
     
    
    

    return (
        
        <div style={{backgroundColor: theme ? "" : "white", 
            color: !theme ? "gray" : "seashell",
            boxShadow: theme ? "2px 2px 4px black" : "1px 2px 8px darkgray"
            }} 
            id={"obs"}
            className="card p-4 bg-black/30 rounded-lg mt-3 w-[49%]
            relative transition-all duration-300 
            hover:scale-[1.02]
            "
            >
            <div className="flex justify-between items-center">
                {/* <props.icon /> */}
                <h2 className=" textxl font-semibold" >{props.header}</h2>   
                <p className="text-4xl text-gray-500 object-cover rounded-full border-2 border-indigo-500">{props.icon}</p>
            </div>
            <div>
                <p className="mt-2">{props.text}</p>
            </div>
            <div className="flex justify-end mt-4">
                <a href={props.link} className="text-xl font-medium text-indigo-500">{props.header}</a>
            </div>
        </div>
    );
}

export default SkillsCard;