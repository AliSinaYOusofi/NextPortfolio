import { NextPage } from 'next';
import React from 'react'
import {CiLight, CiDark} from 'react-icons/ci';


const LightDark: NextPage = () => {

    const [theme, setTheme] = React.useState(false);
    // using useRef() to give that fade transition
    let light = React.useRef<HTMLDivElement>();
    let dark = React.useRef<HTMLDivElement>();
    
    // handle the theme click. change it 
    const handleThemeClick = () : void => { 

        setTheme(previouseTheme => !previouseTheme);
    }
    return (
        <div className="w-fit md:p-4 p-2 relative bg-gray-400 backdrop backdrop-blur-lg rounded-full
            cursor-pointer mr-10 md:mr-20 after:-z-10 after:bg-gray-500 after:absolute after:w-20 after:h-0
            after:top-0 after:rounded-full after:-left-4 outline-none after:outline-none after:border-none after:backdrop-blur-lg  hover:after:w-20 hover:after:h-28 after:transition-all after:duration-300 overflow-hidden transition-all duration-300 hover:animate-none" onClick={handleThemeClick}>
            {
                theme ? <CiDark  className="text-black md:text-xl text-md transition-all duration-300 z-10" /> : <CiLight  className="text-black md:text-xl text-md transition-all duration-300"  />
            }
        </div>
    )
}

export default LightDark;