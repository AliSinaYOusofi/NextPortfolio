import { NextPage } from 'next';
import React from 'react';
import ProjectCards from './ProjectCard';

const Projects: NextPage = () => {
    return (
        <div className="w-[90%] ml-auto mr-auto h-full flex flex-row flex-wrap justify-center gap-x-5 items-cent">
            <ProjectCards />
            <ProjectCards />
            <ProjectCards />
            <ProjectCards />
            
        </div>
    );
}

export default Projects;