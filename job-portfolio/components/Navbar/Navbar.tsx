import React from 'react'
import { NextPage } from 'next'
import Name from './Name';
import LightDark from './LightDark';
import MenuList from './MenuList';
const Navbar : NextPage = () => {

    return (
        <div className="flex flex-row bg-transparent md:justify-between justify-between items-center
        ">
            
            <Name />
            <LightDark />
            <MenuList />
        </div>
    )
}

export default Navbar;
