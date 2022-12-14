import { NextPage } from 'next'
import React, { MutableRefObject } from 'react'
import MenuItem from '../Menu.tsx/MenuItem';

const MenuList: NextPage = () => {
    // for if its clicked or not
    const [clicked, setClicked] = React.useState(false);
    // making it close when clicked using userRef()
    // for refs for doing it
    let rightLine  = React.useRef<HTMLDivElement | null>(null);
    let leftLine = React.useRef<HTMLDivElement>(null);
    let middleLine  = React.useRef<HTMLDivElement>(null);

    const showCross = () : void => {
        
        if (!clicked && rightLine.current != null && middleLine.current && leftLine.current) {
            rightLine.current.style.transform = "rotate(45deg)";
            middleLine.current.style.display = "none";
            leftLine.current.style.transform = "rotate(-45deg)";
        } 
        else {
            
            if (rightLine.current != null && middleLine.current && leftLine.current) {

                rightLine.current.style.transform = "rotate(0deg)";
                middleLine.current.style.display = "flex";
                leftLine.current.style.transform = "rotate(0deg)";
            }
        }
        
        setClicked(previous => !previous);
        // let div: HTMLDivElement | null =  document.getElementById("one");
        // div.style.display = "none";
    }

    // next showing animation on using our sections
    // this to be done tommorow and other sections as well

    return (
        <div className="md:hidden cursor-pointer md:mt-10 mt-3">
            <div className="mr-10 md:mr-20 space-y-2 transition-all duration-300" onClick={showCross}>
                <div id="one" ref={rightLine} className="w-8 h-0.5 bg-gray-600 transition-all duration-300"></div>
                <div ref={middleLine} className="w-8 h-0.5 bg-gray-600 transition-all duration-300"></div>
                <div ref={leftLine} className="w-8 h-0.5 bg-gray-600 transition-all duration-300"></div>
            </div>

            {
                clicked ? <MenuItem show={true}/> : null
            }
        </div>
    );
}

export default MenuList;
