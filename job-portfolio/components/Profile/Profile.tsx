import { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import CVButton from './CVButton';
import LanguageHeader from './LanguageHeader';
import Languages from './Languages';
import MyImage from './MyImage';
import MyInfo from './MyInfo';

import WhatMe from './WhatMe';

const Profile: NextPage = () => {

    return (
        <>
            {/* the image should show it here */}
            <div className=" bg-black/30  flex flex-col justify-center top-0
            items-center  rounded-md md:w-[40%] md:ml-3 w-[80%] h-fit relative md:sticky">
                {/* // for image */}
                <MyImage />
                <WhatMe />
                <MyInfo />
                <CVButton />
                <LanguageHeader />
                <Languages />
                <hr className="w-[90%] text-gray-600 h-3"/>
            </div>
        </>
    );
}

export default Profile;