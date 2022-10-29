import { NextPage } from 'next';
import React from 'react';
import {AiOutlinePhone, AiOutlineMail, } from 'react-icons/ai';
import {GoLocation} from 'react-icons/go';
import {BsFillCalendarDateFill} from 'react-icons/bs';

const MyInfo : NextPage = () => {
    return (
        <div>
            <div> 
                <BsFillCalendarDateFill />
                <div>
                    <p>Phone</p>
                    <h4>+93731055068</h4>
                </div>
                <hr />
            </div>
            
        </div>
    );
};

export default MyInfo;