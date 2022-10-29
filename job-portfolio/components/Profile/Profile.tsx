import { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import MyImage from './MyImage';
import MyInfo from './MyInfo';

import WhatMe from './WhatMe';

const Profile: NextPage = () => {

    return (
        <>
            {/* the image should show it here */}
            <div className="w-[30%] bg-black/30 flex flex-col justify-items-center
            items-center relative rounded-md">
                {/* // for image */}
                
                <WhatMe />
                <MyInfo />
            </div>
        </>
    );
}

export default Profile;