import { NextPage } from 'next';
import React from 'react';
import ProjectCards from './ProjectCard';

const Projects: NextPage = () => {
    return (
        <div className="w-full h-full">
            <ProjectCards />
        </div>
    );
}

export default Projects;