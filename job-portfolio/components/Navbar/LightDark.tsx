import { NextPage } from 'next';
import React from 'react'
import {CiLight, CiDark} from 'react-icons/ci';

const LightDark: NextPage = () => {

    const [theme, setTheme] = React.useState(false);
    
    // handle the theme click. change it 
    const handleThemeClick = () : void => { setTheme(previouseTheme => !previouseTheme) }
    return (
        <div className="w-fit p-4  bg-gray-400 backdrop backdrop-blur-lg rounded-full
            cursor-pointer mr-10 md:mr-20" onClick={handleThemeClick}>
            {
                theme ? <CiDark className="text-black" size={20}/> : <CiLight className="text-black" size={20} />
            }
        </div>
    )
}

export default LightDark;