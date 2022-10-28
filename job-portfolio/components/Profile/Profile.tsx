import { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import me from  "../../public/pexels-ivan-siarbolin-3695799.jpg";

const Profile: NextPage = () => {

    return (
        <>
            {/* the image should show it here */}
            <div>
                {/* // for image */}
                <div className="relative w-fit">
                    <Image
                        src={me}
                        alt="mena"
                        width={400}
                        height={400}
                        object-fit="contain"
                        loading='eager'
                        className="object-cover w-[20rem] h-[17rem] rounded-md"
                    />
                </div>
            </div>
        </>
    );
}

export default Profile;