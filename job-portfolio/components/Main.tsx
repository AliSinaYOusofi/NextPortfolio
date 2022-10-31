import { NextPage } from 'next'
import React from 'react'
import About from './About/About';
import MenuItem from './Menu.tsx/MenuItem';
import MyImage from './Profile/MyImage';
import Profile from './Profile/Profile'

const Main: NextPage = () => {

    return (
        <div className="main mt-20 w-full
        flex md:flex-row flex-col   justify-between items-center gap-x-2">
            
            
                <Profile />
            
               
                <About />
        </div>
    );
}

export default Main