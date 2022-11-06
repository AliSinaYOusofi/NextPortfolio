import { NextPage } from "next";
import React from "react";
import {CgProfile} from 'react-icons/cg';
import {AiFillProject, AiOutlineHome} from 'react-icons/ai';
import {GrContactInfo} from 'react-icons/gr';
import {RiContactsLine} from 'react-icons/ri';
import { useThemeProvider } from "../../context/ThemeProvider";

interface Props {
    show: boolean
}
const MenuItem: NextPage<Props> = (props) => {

    const [{theme}] = useThemeProvider();

    // show the width should be zero but when clicked show all the items
    // or add a button to show and hide the menu

    // going with the button options
    const [menu, setMenu] = React.useState(true);

    const handleMenuClick = () : void => { setMenu(previous => !previous); }

    const goToMainPage = () : void =>  document.getElementById("dark")?.scrollIntoView() 

    const goToAbout = () : void => document.getElementById("about")?.scrollIntoView()
    
    const goToProjects = () : void => document.getElementById("projects")?.scrollIntoView()
    
    const goToContact= () : void => document.getElementById("contact")?.scrollIntoView()
    

    let one = React.useRef<HTMLDivElement>(null);
    let two = React.useRef<HTMLDivElement>(null);
    let three = React.useRef<HTMLDivElement>(null);
    let four = React.useRef<HTMLDivElement>(null);

    // for bluring the icons
    const blueOne = ()  => {
        if( two.current && three.current && four.current) {
            two.current.style.filter="blur(1px)";
            four.current.style.filter="blur(1px)";
            three.current.style.filter="blur(1px)";
        }
    }
    // another function for making it the back way
    const undoBlurOne = () => {
        if (two.current && three.current && four.current) {
            two.current.style.filter="blur(0)";
            three.current.style.filter="blur(0)";
            four.current.style.filter="blur(0)";
        }
    }
    // for the third elemnt

    const blurTwo = ()  => {
        if (one.current && three.current && four.current) {
            three.current.style.filter="blur(1px)";
            one.current.style.filter="blur(1px)";
            four.current.style.filter="blur(1px)";
        }
    }

    const undoBlurTwo = ()  => {
        if (one.current && two.current && three.current && four.current) {
            three.current.style.filter="blur(0px)";
            one.current.style.filter="blur(0px)";
            four.current.style.filter="blur(0px)";
        }
    }

    // for the third element
    const blurThree = () : void => {
        if (one.current && two.current && four.current) {
            one.current.style.filter="blur(1px)";
            two.current.style.filter="blur(1px)";
            four.current.style.filter="blur(1px)";
        }
    }

    const undoBlurThree = () : void => {
        if (one.current && two.current && four.current) {
            one.current.style.filter="blur(0)";
            two.current.style.filter="blur(0)";
            four.current.style.filter="blur(0)";
        }
    }

    // and for the fourth icon

    const blurFour = () : void => {
        if (one.current && two.current && three.current) {
            one.current.style.filter="blur(1px)";
            two.current.style.filter="blur(1px)";
            three.current.style.filter="blur(1px)";
        }
    }

    const undoBlurFour = () : void => {
        if (one.current && two.current && three.current) {
            one.current.style.filter="blur(0)";
            two.current.style.filter="blur(0)";
            three.current.style.filter="blur(0)";
        }
    }
    return(
        <div style={{display: props.show ? "flex" : "hidden", borderRadius: menu ? "" : "50%", right: menu ? "" : "50%", 
        backgroundColor: theme ? "#0A101D" : "#f4f3fb",
        color: theme ? "gray" : "white"
    }} className="menus hidden md:flex flex-row-reverse 
        bg-black/50 fixed z-90 md:top-[85%]  lg:top[90%] 
        right-[0%] top-[88%]  w-fit md:right-[10%] lg:right-[25%]
        justify-center items-center p-3  text-sm md:text-2xl lg:p-3 rounded-md md:gap-x-10 
        gap-x-4  transition-all duration-300 z-[999] blur-[0.7px]
        hover:blur-none">
            
        {
            menu ?
            <>
                <div ref={four} onMouseEnter={blurFour} onMouseLeave={undoBlurFour} onClick={goToContact} className=" justify-center items-center flex-row gap-x-1 transition-all duration-300
                 lg:p-2 p-1 rounded-lg cursor-pointer"
                style={{color: theme ? "gray" : "black", backgroundColor: theme ? "#04060A" : "white",}}>
                    
                    <p className="text-sm md:text-xl flex items-center justify-center gap-x-1"><RiContactsLine />Contact</p>
                </div>
        
                <div ref={three} onMouseEnter={blurThree} onMouseLeave={undoBlurThree} onClick={goToProjects} className=" justify-center items-center gap-x-1 flex-row transition-all duration-300
                 lg:p-2 p-1 rounded-lg cursor-pointer"
                style={{color: theme ? "gray" : "black" , backgroundColor: theme ? "#04060A" : "white"}}>
                    
                    <p className="text-sm md:text-xl flex items-center justify-center gap-x-1"><AiFillProject />Projects</p>
                </div>

                <div ref={two} onMouseEnter={blurTwo} onMouseLeave={undoBlurTwo} onClick={goToAbout} className=" justify-center items-center gap-x-1 flex-row transition-all duration-300
                 z-10  lg:p-2 p-1 rounded-lg cursor-pointer"
                style={{color: theme ? "gray" : "black" , backgroundColor: theme ? "#04060A" : "white"}}>
                    
                    <p className="text-sm md:text-xl flex items-center justify-center gap-x-1"><CgProfile />About</p>
                </div>
            
                <div ref={one} onMouseEnter={blueOne} onMouseLeave={undoBlurOne} onClick={goToMainPage} className=" justify-center items-center flex-row gap-x-1 transition-all duration-300
                    lg:p-2 p-1 rounded-lg cursor-pointer"
                style={{color: theme ? "gray" : "black", backgroundColor: theme ? "#04060A" : "white"}}>
                    <p className="text-sm md:text-xl flex items-center justify-center gap-x-1"><AiOutlineHome />Home</p>
                </div>
            </>
        : ""
        }

            <div style={{color: theme ? "gray" : "black", backgroundColor: theme ? "#04060A" : "white",}} onClick={handleMenuClick} className="cursor-pointer transition-all duration-300 
            bg-black/30 rounded-full p-2 ">
                {
                    !menu 
                    ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                        </svg>
                }
            </div>
        </div>
    );
}

export default MenuItem;