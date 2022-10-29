import { NextPage } from 'next';
import React from 'react';
import {AiOutlinePhone, AiOutlineMail, } from 'react-icons/ai';
import {GoLocation} from 'react-icons/go';
import {BsFillCalendarDateFill} from 'react-icons/bs';

const MyInfo : NextPage = () => {
    return (
        <div className="w-[80%] bg-black/10 p-3 flex gap-y-3 flex-col mt-4
        rounded-md parent
        ">
            <div className="one flex justify-start items-center gap-x-3 group transition-all duration-300"> 
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
            <div className="two flex justify-start items-center gap-x-3 group transition-all duration-300"> 
                <div className="p-1 rounded-lg
                    transition-all duration-300 bg-gradient-to-b from-black/30 opacity-40 group-hover:opacity-100 hover:from-black/60">
                    <AiOutlineMail size={30}/>
                </div>
                <div className="flex flex-col items-start justify-start">
                    <p className="text-sm text-gray-400 font-bold">Email</p>
                    <h4 className="-mt-1 text-white font-semibold">tinayousofi@gmail.com</h4>
                </div>
            </div>
            <div> <hr /></div>
            <div className="three flex justify-start items-center gap-x-3 group transition-all duration-300"> 
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
            
            <div className="four flex justify-start items-center gap-x-3 group transition-all duration-300"> 
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