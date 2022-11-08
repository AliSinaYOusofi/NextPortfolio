import { NextPage } from "next";
import React from "react";
import SkillsCard from "./SkillsCard";
import {TbBrandCss3, TbBrandNextjs} from 'react-icons/tb';
import {AiFillHtml5} from 'react-icons/ai';
import {GrReactjs, GrMysql} from 'react-icons/gr';
import { SiExpress, SiTailwindcss } from 'react-icons/si';
import {FaNodeJs, FaSass} from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io';
import {DiMongodb} from 'react-icons/di';
import { useThemeProvider } from "../../context/ThemeProvider";

const Skills: NextPage = () => {

    const [{theme}] = useThemeProvider(); // getting the current theme

    return (
        <div style={{backgroundColor: theme ? "" : ""}} className=" text-white py-2 px-2 rounded-lg">
            <h1 className="font-extrabold text-2xl md:text-3xl mt-8"> <span className="text-purple-400">const</span> <span className="text-blue-400">Front-End = () : Skills =&gt;</span> &#123;&#125;</h1>
            
            <div className="mt-2 flex justify-between items-center flex-wrap  gap-y-3 md:gap-x-0 gap-x-1">
                <SkillsCard link={"http://www.html.com"} text={"Hypertext Markup Language, a standardized system for tagging text files to achieve font, colour, graphic."} icon={<AiFillHtml5 />} header="HTML"/>
                <SkillsCard link={"https://www.w3.org/"} text={"CSS stands for Cascading Style Sheets · CSS describes how HTML elements are to be displayed on screen, paper."} icon={<TbBrandCss3 />} header="CSS"/>
                <SkillsCard link={"https://tailwindcss.com"} text={"A utility-first CSS framework packed with classes like flex , pt-4 , text-center and more."} icon={<SiTailwindcss />} header="Tailwind"/>
                <SkillsCard link={"https://sass-lang.com"} text={"JavaScript is a scripting language that enables you to create dynamic web pages. Javascript used to make pages look alive"} icon={<IoLogoJavascript />} header="Javascript"/>
                <SkillsCard link={"https://sass-lang.com"} text={"JavaScript is a scripting language that enables you to create dynamic web pages. Javascript used to make pages look alive"} icon={<IoLogoJavascript />} header="Javascript"/>
                <SkillsCard link={"https://www.javascript.com"} text={"Sass is a preprocessor scripting language that is interpreted or compiled to css. Sass is a scripting language."} icon={<FaSass />} header="SASS"/>
                <SkillsCard link={"https://reactjs.org"} text={"React makes it painless to create interactive UIs. React is Component Based. Cool thing is the hooks."} icon={<GrReactjs />} header="React"/>
                <SkillsCard link={"https://nextjs.org"} text={"Next.js is a React framework that gives you building blocks to create web applications."} icon={<TbBrandNextjs />} header="NextJS"/>
            </div>

            <h1 className="font-extrabold text-2xl md:text-3xl mt-8"> <span className="text-purple-400">const</span> <span className="text-blue-400">Back-End = () : Skills =&gt;</span> &#123;&#125;</h1>
            <div className="flex justify-between items-center flex-wrap gap-x-1 gap-y-3">
                <SkillsCard link={"https://nodejs.org"} text={"Node.js is a platform built on Chrome's JavaScript runtime for easily building web apps."} icon={<FaNodeJs />} header="NodeJS"/>
                <SkillsCard link={"https://expressjs.com"} text={"Express is a minimal and flexible Node.js web application framework. Provides great features for web apps."} icon={<SiExpress />} header="Expressjs"/>
                <SkillsCard link={"https://www.mysql.com"} text={"MySQL is a relational database management system (RDBMS) developed by Oracle."} icon={<GrMysql />} header="MySQL"/>
                <SkillsCard link={"https://www.mongodb.com"} text={"MongoDB is a document database with the scalability and flexibility that you want with the querying and indexing."} icon={<DiMongodb />} header="MongoDB"/>
            </div>
        </div>
    );
}

export default Skills;