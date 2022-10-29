import { NextPage } from 'next'
import React from 'react'
import MyImage from './Profile/MyImage';
import Profile from './Profile/Profile'

const Main: NextPage = () => {

    return (
        <div>
            <MyImage />
            <Profile />
        </div>
    );
}

export default Main