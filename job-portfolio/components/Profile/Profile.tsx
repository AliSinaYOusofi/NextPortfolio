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
            <div className=" bg-black/30 flex flex-col justify-center relative
            items-center  rounded-md md:w-[40%] md:ml-3 w-[80%] h-fit">
                {/* // for image */}
                <MyImage />
                <WhatMe />
                <MyInfo />
                <CVButton />
            </div>
        </>
    );
}

export default Profile;