import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";


interface Props {
    image: any;
    name: string;
    details: string;
}

const ProjectCards : NextPage<Props> = (props) => {

    return (

        <div className="mt-10 md:w-[16rem] w-[10rem] h-fit relative rounded-lg group overflow-hidden">
            
                <Image loading="eager"   className="rounded-lg  md:h-96 h-[15rem] group-hover:blur-sm" src={props.image} alt="" />
               
            
            <div className="p-5 absolute md:top-[25%] md:mt-2 -mt-10 top-[20%] opacity-0 transition-all duration-300
                group-hover:-mt-7 group-hover:opacity-[100]">
                <a href="#">
                    <h5 className="mb-2 text-xs md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.name}</h5>
                </a>
                <p className="mb-3 md:text-xl text-xs font-normal text-[seashell]">{props.details}</p>
                <a href="#" className="inline-flex items-center md:py-2 md:px-3 p-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    github
                    <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
            
        </div>

    );
}

export default ProjectCards;