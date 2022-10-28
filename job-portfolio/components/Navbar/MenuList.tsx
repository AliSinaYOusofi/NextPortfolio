import { NextPage } from 'next'
import React, { MutableRefObject } from 'react'

const MenuList: NextPage = () => {
    // making it close when clicked using userRef()
    // for refs for doing it
    let rightLine  = React.useRef<HTMLDivElement>(null);
    let leftLine = React.useRef(null);
    let middleLine = React.useRef(null);

    const showCross = () : void => {
        rightLine.current.style.transform = "rotate(45deg)";
        middleLine.current.style.display = "none";
        leftLine.current.style.transform = "rotate(-45deg)";
        
        // let div: HTMLDivElement | null =  document.getElementById("one");
        // div.style.display = "none";
    }
    return (
        <div className="md:hidden cursor-pointer">
            <div className="space-y-2" onClick={showCross}>
                <div id="one" ref={rightLine} className="w-8 h-0.5 bg-gray-600"></div>
                <div ref={middleLine} className="w-8 h-0.5 bg-gray-600"></div>
                <div ref={leftLine} className="w-8 h-0.5 bg-gray-600"></div>
            </div>
        </div>
    );
}

export default MenuList;
