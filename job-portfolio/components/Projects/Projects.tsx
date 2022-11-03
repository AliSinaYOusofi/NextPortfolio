import { NextPage } from 'next';
import React from 'react';
import ProjectCards from './ProjectCard';
import netflix from '../../public/WallpaperDog-20474288.jpg';
import spotify from '../../public/classic-spotify-screen-s1wsdjh4bskkozy8.jpg';
import nft from '../../public/7087231.png';
import fullstack from '../../public/6075693.jpg';


const Projects: NextPage = () => {
    return (
        <div className="w-[90%] ml-auto mr-auto h-full flex flex-row flex-wrap justify-center gap-x-5 items-cent">
            <ProjectCards name={"Netflix Backend"} image={nft} details={"Full-stack netflix. For front-end i used Reactjs, tailwind and for backend MYSQL, Nodejs, Expressjs."}/>
            <ProjectCards name={"Spotfiy Clone"} image={spotify} details={"Build with Reactjs, styled-components, javascript with Spotfiy Provided API."}/>
            <ProjectCards name={"OpenSea Clone"} image={nft} details={"Built with Nextjs, TailwindCss, CSS3, and javascript. It uses nftport.xyz provided API."}/>
            <ProjectCards name={"Netflix Clone"} image={netflix} details={"Only front-end Clone of Netflix Made with Reactjs, tailwindcss, CSS3, HTML, Javascript. "}/>
        </div>
    );
}

export default Projects;