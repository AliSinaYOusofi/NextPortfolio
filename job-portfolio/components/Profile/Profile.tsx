import { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import CVButton from './CVButton';
import MyImage from './MyImage';
import MyInfo from './MyInfo';

import WhatMe from './WhatMe';

const Profile: NextPage = () => {

    return (
        <>
            {/* the image should show it here */}
            <div className="md:w-[30%] w-[90%] bg-black/30 flex flex-col justify-items-center
            items-center relative rounded-md">
                {/* // for image */}
                
                <WhatMe />
                <MyInfo />
                <CVButton />
            </div>
        </>
    );
}

export default Profile;