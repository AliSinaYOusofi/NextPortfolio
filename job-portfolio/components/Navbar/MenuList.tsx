import { NextPage } from 'next'
import React, { MutableRefObject } from 'react'

const MenuList: NextPage = () => {
    // for if its clicked or not
    const [clicked, setClicked] = React.useState(false);
    // making it close when clicked using userRef()
    // for refs for doing it
    let rightLine  = React.useRef<HTMLDivElement | null>();
    let leftLine = React.useRef<HTMLDivElement>();
    let middleLine  = React.useRef<HTMLDivElement>();

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
        <div className="md:hidden cursor-pointer">
            <div className="mr-10 md:mr-20 space-y-2 transition-all duration-300" onClick={showCross}>
                <div id="one" ref={rightLine} className="w-8 h-0.5 bg-gray-600 transition-all duration-300"></div>
                <div ref={middleLine} className="w-8 h-0.5 bg-gray-600 transition-all duration-300"></div>
                <div ref={leftLine} className="w-8 h-0.5 bg-gray-600 transition-all duration-300"></div>
            </div>
        </div>
    );
}

export default MenuList;
