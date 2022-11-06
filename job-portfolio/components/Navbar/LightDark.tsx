import { NextPage } from 'next';
import React from 'react'
import {CiLight, CiDark} from 'react-icons/ci';
import { useThemeProvider } from '../../context/ThemeProvider';


const LightDark: NextPage = () => {

    const [{theme}, dispatch] = useThemeProvider();

    const [currentTheme, setCurrentTheme] = React.useState(false);
    const [html, setHTML] = React.useState();
    // using useRef() to give that fade transition
    
    // handle the theme click. change it 
    const handleThemeClick = (e : any)  => { 
        e.preventDefault();
        setCurrentTheme(previouseTheme => !previouseTheme);
        
        let target = (e.target as Element);
        target.classList.toggle("fade2");
        
        dispatch({type: "set_theme", currentTheme});
        
    }
    
    
    return (
        <div id={"dark"} className="w-fit scroll-smooth md:p-4 p-2 relative backdrop backdrop-blur-lg rounded-full
            cursor-pointer mr-10 md:mr-20 after:-z-10 after:bg-gray-400 after:absolute after:w-20 after:h-0
            after:top-0 hover:scale-105 after:rounded-full after:-left-4 outline-none  
             hover:after:w-20 hover:after:h-28 after:transition-all after:duration-300 
             overflow-hidden transition-all duration-300 border-none 
             md:mt-10 mt-3" 
            onClick={handleThemeClick}
                
            style={{backgroundColor: !theme ? "#f4f3fb" : "white", boxShadow: theme ? "2px 2px 8px black" : "1px 2px 8px darkgray"}}>
            {
                currentTheme ? <CiDark   className="fade2 text-black md:text-xl text-md transition-all duration-300 z-10" /> : <CiLight  className="text-black md:text-xl text-md transition-all duration-300 fade2"  />
            }
        </div>
    )
}

export default LightDark;