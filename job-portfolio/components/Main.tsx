import { NextPage } from 'next'
import React from 'react'
import About from './About/About';
import MenuItem from './Menu.tsx/MenuItem';
import MyImage from './Profile/MyImage';
import Profile from './Profile/Profile'

const Main: NextPage = () => {

    return (
        <div className="relative">
            <MyImage />
            <div className="md:ml-20 ml-10 relative">
                <Profile />
            </div>
            <MenuItem show={false}/>
            <About />
        </div>
    );
}

export default Main