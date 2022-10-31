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

const Skills: NextPage = () => {

    return (
        <div className="mt-20 text-white">
            <h1 className="font-extrabold text-3xl mt-8"> <span className="text-purple-400">const</span> <span className="text-blue-400">FrontEndTechs = Skills () : =&gt;</span> &#123;&#125;</h1>
            
            <div className="flex justify-between items-center flex-wrap gap-x-1 gap-y-3">
                <SkillsCard text={"Hypertext Markup Language, a standardized system for tagging ... ."} icon={<AiFillHtml5 />} header="HTML"/>
                <SkillsCard text={"CSS stands for Cascading Style Sheets · CSS describes how HTML elements are to be ... ."} icon={<TbBrandCss3 />} header="CSS"/>
                <SkillsCard text={"A utility-first CSS framework packed with classes like flex , pt-4 , text-center and more."} icon={<SiTailwindcss />} header="Tailwind"/>
                <SkillsCard text={"JavaScript is a scripting language that enables you to create dynamic web pages."} icon={<IoLogoJavascript />} header="Javascript"/>
                <SkillsCard text={"Sass is a preprocessor scripting language that is interpreted or compiled to css"} icon={<FaSass />} header="SASS"/>
                <SkillsCard text={"React makes it painless to create interactive UIs. · Component-Based."} icon={<GrReactjs />} header="React"/>
                <SkillsCard text={"Next.js is a React framework that gives you building blocks to create web applications."} icon={<TbBrandNextjs />} header="NextJS"/>
            
            </div>

            <h1 className="font-extrabold text-3xl mt-8"> <span className="text-purple-400">const</span> <span className="text-blue-400">BackEndTechs = Skills () : =&gt;</span> &#123;&#125;</h1>
            <div className="flex justify-between items-center flex-wrap gap-x-1 gap-y-3">
                <SkillsCard text={"Node.js is a platform built on Chrome's JavaScript runtime for easily building web apps"} icon={<FaNodeJs />} header="NodeJS"/>
                <SkillsCard text={"Express is a minimal and flexible Node.js web application framework"} icon={<SiExpress />} header="Expressjs"/>
                <SkillsCard text={"MySQL is a relational database management system (RDBMS) developed by Oracle."} icon={<GrMysql />} header="MySQL"/>
                <SkillsCard text={"MongoDB is a document database with the scalability and flexibility that you want... ."} icon={<DiMongodb />} header="MongoDB"/>
            </div>
        </div>
    );
}

export default Skills;