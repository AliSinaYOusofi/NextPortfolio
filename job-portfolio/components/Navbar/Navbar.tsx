import React from 'react'
import { NextPage } from 'next'
import Name from './Name';
import LightDark from './LightDark';
const Navbar : NextPage = () => {

    return (
        <div className="flex flex-col md:flex-row bg-transparent justify-around items-center
        ">
            
            <Name />
            <LightDark />
        </div>
    )
}

export default Navbar;
