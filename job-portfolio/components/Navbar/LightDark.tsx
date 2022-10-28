import { NextPage } from 'next';
import React from 'react'
import {CiLight, CiDark} from 'react-icons/ci';

const LightDark: NextPage = () => {

    const [theme, setTheme] = React.useState(false);
    
    // handle the theme click. change it 
    const handleThemeClick = () : void => {
        setTheme(previouseTheme => !previouseTheme)
    }
    return (
        <div className="w-fit p-4  bg-black backdrop backdrop-blur-lg rounded-full
            cursor-pointer">
            {
                theme ? <CiDark size={40}/> : <CiLight size={30} />
            }
        </div>
    )
}

export default LightDark;