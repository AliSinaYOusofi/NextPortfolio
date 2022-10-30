import { NextPage } from "next";
import React from "react";
import {CgProfile} from 'react-icons/cg';

const MenuItem: NextPage = () => {
    return(
        <div className="hidden md:flex bg-black/30 absolute top-[17rem] right-[30rem]
        justify-center items-center py-2 px-4">
            <div className="justify-center items-center flex-col">
               <div className="flex items-center justify-center"><CgProfile /></div>
                <p>About</p>
            </div>
        </div>
    );
}

export default MenuItem;