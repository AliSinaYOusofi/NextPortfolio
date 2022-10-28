import React from 'react'
import { NextPage } from 'next'
import Name from './Name';
import LightDark from './LightDark';
import MenuList from './MenuList';
const Navbar : NextPage = () => {

    return (
        <div className="flex flex-row bg-transparent md:justify-between justify-around items-center
        md:mt-10">
            
            <Name />
            <LightDark />
            <MenuList />
        </div>
    )
}

export default Navbar;
