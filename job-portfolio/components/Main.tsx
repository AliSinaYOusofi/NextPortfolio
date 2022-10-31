import { NextPage } from 'next'
import React from 'react'
import About from './About/About';
import MenuItem from './Menu.tsx/MenuItem';
import MyImage from './Profile/MyImage';
import Profile from './Profile/Profile'

const Main: NextPage = () => {

    return (
        <div className=" mt-20 w-full md:grid md:grid-rows-2 md:grid-cols-2
        flex flex-col flex-wrap items-center">
            
            
                <Profile />
            
               
                <About />
        </div>
    );
}

export default Main