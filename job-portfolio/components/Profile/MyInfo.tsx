import { NextPage } from 'next';
import React from 'react';
import {AiOutlinePhone, AiOutlineMail, } from 'react-icons/ai';
import {GoLocation} from 'react-icons/go';
import {BsFillCalendarDateFill} from 'react-icons/bs';

const MyInfo : NextPage = () => {
    return (
        <div className="w-[80%] bg-black/10 p-3 flex gap-y-3 flex-col mt-4
        rounded-md
        ">
            <div className="flex justify-start items-center gap-x-3 "> 
                <div>
                    <div className="bg-black/50 p-1 rounded-sm">
                        <AiOutlinePhone  size={30}/>
                    </div>
                        
                </div>
                <div className="flex flex-col items-start justify-start">
                    <p className="text-sm text-gray-400 font-bold">Phone</p>
                    <h4 className="-mt-1 text-white font-semibold">+93731055068</h4>
                </div>
                
            </div>
            <hr />
            <div className="flex justify-start items-center gap-x-3"> 
                <div>
                    <AiOutlineMail size={30}/>
                </div>
                <div className="flex flex-col items-start justify-start">
                    <p className="text-sm text-gray-400 font-bold">Email</p>
                    <h4 className="-mt-1 text-white font-semibold">tinayousofi@gmail.com</h4>
                </div>
            </div>
                <hr />
            <div className="flex justify-start items-center gap-x-3"> 
                <div>
                    <BsFillCalendarDateFill size={30}/>
                </div>
                <div className="flex flex-col items-start justify-start">
                    <p className="text-sm text-gray-400 font-bold">BirthDay</p>
                    <h4 className="-mt-1 text-white font-semibold">2 Oct, 1999</h4>
                </div>
            </div>
                <hr />
            <div className="flex justify-start items-center gap-x-3"> 
                <div>
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