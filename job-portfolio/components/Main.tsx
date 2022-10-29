import { NextPage } from 'next'
import React from 'react'
import MyImage from './Profile/MyImage';
import Profile from './Profile/Profile'

const Main: NextPage = () => {

    return (
        <div className="w-full">
            <MyImage />
            <div className="ml-20">
                <Profile />
            </div>
        </div>
    );
}

export default Main