import { NextPage } from 'next';
import React from 'react';
import ProjectCards from './ProjectCard';
import netflix from '../../public/WallpaperDog-20474288.jpg';
import spotify from '../../public/classic-spotify-screen-s1wsdjh4bskkozy8.jpg';
import nft from '../../public/7087231.png';
import fullstack from '../../public/6075693.jpg';
import dict from '../../public/wp3642695-dictionary-wallpapers.jpg';
import mongodb from '../../public/wp8724850-mongodb-wallpapers.jpg';
import port from '../../public/ales-nesetril-Im7lZjxeLhg-unsplash.jpg';
import dev from '../../public/wp8358479-software-developer-wallpapers.jpg'

const Projects: NextPage = () => {
    return (
        <>  
            <h1 className="text-center mt-10 text-3xl capitalize"> Some of my projects Projects </h1>
            <div className="w-[90%] ml-auto mr-auto h-full flex flex-row flex-wrap justify-center gap-x-5 items-cent">
                <ProjectCards name={"Spotfiy Clone"} image={spotify} details={"Build with Reactjs, styled-components, javascript with Spotfiy Provided API."}/>
                <ProjectCards name={"OpenSea Clone"} image={nft} details={"Built with Nextjs, TailwindCss, CSS3, and javascript. It uses nftport.xyz provided API."}/>
                <ProjectCards name={"Netflix Clone"} image={netflix} details={"Only front-end Clone of Netflix Made with Reactjs, tailwindcss, CSS3, HTML, Javascript. "}/>
                <ProjectCards name={"Dictionary"} image={dict} details={"Dictionary Made with Reactjs, tailwindcss, CSS3, HTML, Javascript. By API provided by dictionary.com."}/>
                <ProjectCards name={"Prev Portfolio"} image={port} details={"My Previous Portfolio made with Reactjs, styled-components, CSS3, and javascript."}/>
                <ProjectCards name={"Netflix"} image={fullstack} details={"For front-end I used Reactjs, tailwind and for backend MYSQL, Nodejs, Expressjs."}/>
                <ProjectCards name={"Small Projects"} image={dev} details={"12-10 Simple Projects like weather app, tick-tack toe, one page gym and more ... ."}/>
                <ProjectCards name={"User Management"} image={mongodb} details={"Full-stack user management system. Built with Nextjs, tailwind and for backend MongoDB, Nodejs, Expressjs."}/>
            </div>
        </>
    );
}

export default Projects;