import { NextPage } from 'next';
import React from 'react';
import {AiOutlinePhone, AiOutlineMail, } from 'react-icons/ai';
import {GoLocation} from 'react-icons/go';
import {BsFillCalendarDateFill} from 'react-icons/bs';

const MyInfo : NextPage = () => {

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

    return (
        <div className="w-[80%] bg-black/40 p-3 flex gap-y-3 flex-col mt-4
        rounded-md parent py-8 px-4
        ">
            <div className="one flex justify-start items-center gap-x-3 group transition-all duration-300" ref={one} onMouseEnter={blueOne} onMouseLeave={undoBlurOne}> 
                <div>
                    <div className=" p-1 rounded-lg
                    transition-all duration-300 bg-gradient-to-b from-black/30 opacity-40 group-hover:opacity-100 hover:from-black/60">
                        <AiOutlinePhone  size={30}/>
                    </div>
                        
                </div>
                <div className="flex flex-col items-start justify-start">
                    <p className="text-sm text-gray-400 font-bold">Phone</p>
                    <h4 className="-mt-1 text-white font-semibold">+93731055068</h4>
                </div>
                
            </div>
            <div><hr /></div>
            <div className="two flex justify-start items-center gap-x-3 group transition-all duration-300" ref={two} onMouseEnter={blurTwo} onMouseLeave={undoBlurTwo}> 
                <div className="p-1 rounded-lg
                    transition-all duration-300 bg-gradient-to-b from-black/30 opacity-40 group-hover:opacity-100 hover:from-black/60">
                    <AiOutlineMail size={30}/>
                </div>
                <div className="flex flex-col items-start justify-start">
                    <p className="text-sm text-gray-400 font-bold">Email</p>
                    <h4 className="-mt-1 text-white font-semibold lg:text-base md:text-xs">tinayousofi@gmail.com</h4>
                </div>
            </div>
            <div> <hr /></div>
            <div className="three flex justify-start items-center gap-x-3 group transition-all duration-300" ref={three} onMouseEnter={blurThree} onMouseLeave={undoBlurThree}> 
                <div className="p-1 rounded-lg
                    transition-all duration-300 bg-gradient-to-b from-black/30 opacity-40 group-hover:opacity-100 hover:from-black/60">
                    <BsFillCalendarDateFill size={30}/>
                </div>
                <div className="flex flex-col items-start justify-start">
                    <p className="text-sm text-gray-400 font-bold">BirthDay</p>
                    <h4 className="-mt-1 text-white font-semibold">2 Oct, 1999</h4>
                </div>
            </div>
                <hr />
            
            <div className="four flex justify-start items-center gap-x-3 group transition-all duration-300" ref={four} onMouseEnter={blurFour} onMouseLeave={undoBlurFour}> 
                <div className="p-1 rounded-lg
                    transition-all duration-300 bg-gradient-to-b from-black/30 opacity-40 group-hover:opacity-100 hover:from-black/60">
                    <GoLocation size={30}/>
                </div>
                <div className="flex flex-col items-start justify-start">
                    <p className="text-sm text-gray-400 font-bold">Location</p>
                    <h4 className="-mt-1 text-white font-semibold">Kabul, Afghanistan</h4>
                </div>
            </div>
                <hr />
            
        </div>
    );
};

export default MyInfo;