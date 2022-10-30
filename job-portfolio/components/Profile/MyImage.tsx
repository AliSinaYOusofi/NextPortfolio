import { NextPage } from 'next'
import Image from 'next/image';
import React from 'react'
import me from  "../../public/pexels-ivan-siarbolin-3695799.jpg";
const MyImage: NextPage = () => {

    // making the image full screen
    let ref = React.useRef<HTMLDivElement>(null);
    let makeFullScreen = () : void => {
        if(ref.current) {
            if (!document.fullscreenElement) {
                ref.current.requestFullscreen({ navigationUI: "auto" })
                    .catch(error => alert("something is wrong with you browser"));
            }
            else {
                document.exitFullscreen();
            }
        }
    }

    return (
        <>
            <div className="" ref={ref} onClick={makeFullScreen}>
                    <Image
                        src={me}
                        alt="mena"
                        width={400}
                        height={400}
                        object-fit="contain"
                        loading='eager'
                        className="object-cover w-[15rem] h-[15rem] rounded-md relative top-24 md:ml-[9rem] ml-24"
                    />
                </div>
        </>
    )
}

export default MyImage