import { NextPage } from 'next'
import React from 'react'
import MenuItem from './Menu.tsx/MenuItem';
import MyImage from './Profile/MyImage';
import Profile from './Profile/Profile'

const Main: NextPage = () => {

    return (
        <div className="">
            <MyImage />
            <div className="md:ml-20 ml-10">
                <Profile />
            </div>
            <MenuItem show={false}/>
        </div>
    );
}

export default Main