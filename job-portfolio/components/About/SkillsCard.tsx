import { NextPage } from "next";
import React from "react";
import { AiFillAccountBook } from "react-icons/ai";

const SkillsCard: NextPage = () => {
    
    return (
        
        <div className=" p-4 bg-white shadow-lg rounded-lg mt-3">
            <div className="flex justify-center md:justify-end -mt-16">
                <AiFillAccountBook className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"/>
            </div>
            <div>
                <h2 className="text-gray-800 textxl font-semibold">Design Tools</h2>
                <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
            </div>
            <div className="flex justify-end mt-4">
                <a href="#" className="text-xl font-medium text-indigo-500">John Doe</a>
            </div>
        </div>
    );
}

export default SkillsCard;