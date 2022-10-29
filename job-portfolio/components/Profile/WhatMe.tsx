import { time } from 'console';
import { NextPage } from 'next'
import { resolve } from 'path';
import React from 'react'
import {BsDownload, BsFacebook, BsTwitter, BsDribbble, BsWhatsapp} from 'react-icons/bs';

const WhatMe: NextPage = () => {
    
    let typing: string[] = ["isTyping", "isDeleting"];
    // styling the text
    const [text, setText] = React.useState("");
    // for tpyewriter effect
    const [isTyping, setTyping] = React.useState(typing[0])
    // using refs to fucking select previous siblings 
    // i tried to do it the css way but failed to do.

    let one = React.useRef<HTMLDivElement>(null);
    let two = React.useRef<HTMLDivElement>(null);
    let three = React.useRef<HTMLDivElement>(null);
    let four = React.useRef<HTMLDivElement>(null);

    // blur the first one
    const blueOne = () : void => {
        if( two.current && three.current && four.current) {
            two.current.style.filter="blur(1px)";
            four.current.style.filter="blur(1px)";
            three.current.style.filter="blur(1px)";
        }
    }
    // another function for making it the back way
    const undoBlurOne = () : void => {
        if (two.current && three.current && four.current) {
            two.current.style.filter="blur(0)";
            three.current.style.filter="blur(0)";
            four.current.style.filter="blur(0)";
        }
    }
    // for the third elemnt

    const blurTwo = () : void => {
        if (one.current && three.current && four.current) {
            three.current.style.filter="blur(1px)";
            one.current.style.filter="blur(1px)";
            four.current.style.filter="blur(1px)";
        }
    }

    const undoBlurTwo = () : void => {
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

    // just another thing to remove and redisplay text animation
    // for the full-stack dev part using useEffect()

    // sleep for asecond like python's sleep
    const sleepingFor = (ms: number ) : Promise<number> => {
        return new Promise( (resolve) => setTimeout(resolve, ms));
    }
    // the text to animate
    let myJob = "<FullStackDeveloper />"
    React.useEffect( () => {
        let timeout = setTimeout( () => {
            setText(myJob); // tommorow i make it run
            console.log(text);
        }, 100)

        return clearTimeout(timeout);
    }, [text, myJob, isTyping]);
    console.log(text);
    return (
        <div className="mt-28">
            <h1 className="font-bold tracking-widest text-xl"> Ali Sina Yousofi </h1>
            <h3 className="px-1 py-1 bg-[#1a1919] w-fit rounded-sm  text-gray-200 mt-2"> {text} </h3>
            <div className="flex gap-x-2 text-2xl mt-3">
                <div ref={one} onMouseEnter={blueOne} onMouseLeave={undoBlurOne} className="icon1 transition-all duration-300  bg-[#1D1D1D] p-2 cursor-pointer after:bg-gray-400  rounded-md"> <BsFacebook /> </div>
                <div  ref={two} onMouseEnter={blurTwo} onMouseLeave={undoBlurTwo} className="icon2 face transition-all duration-300 bg-[#1D1D1D] p-2 cursor-pointer after:bg-gray-400  rounded-md"> <BsTwitter /></div>
                <div ref={three} onMouseEnter={blurThree} onMouseLeave={undoBlurThree}  className="icon3 transition-all duration-300 bg-[#1D1D1D] p-2 cursor-pointer after:bg-gray-400 rounded-md"> <BsDribbble /> </div>
                <div ref ={four} onMouseEnter={blurFour} onMouseLeave={undoBlurFour}  className="icon4 transition-all duration-300 bg-[#1D1D1D] p-2 cursor-pointer after:bg-gray-400  rounded-md"> <BsWhatsapp /> </div>
            </div>
        </div>
    )
}

export default WhatMe;
