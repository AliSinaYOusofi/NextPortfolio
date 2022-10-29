import { NextPage } from 'next'
import React from 'react'
import MyImage from './Profile/MyImage';
import Profile from './Profile/Profile'

const Main: NextPage = () => {

    return (
        <div className="w-full">
            <MyImage />
            <div className="md:ml-20 ml-10">
                <Profile />
            </div>
        </div>
    );
}

export default Main