import { NextPage } from 'next'
import Image from 'next/image';
import React from 'react'
import me from  "../../public/cropped-1366-768-642540.png";
import eye from '../../public/white.PNG';

const MyImage: NextPage = () => {

    // making the image full screen
    let ref = React.useRef<HTMLDivElement>(null);
    let makeFullScreen = () : void => {
        if(ref.current) {
            if (!document.fullscreenElement) {
                ref.current.requestFullscreen({ navigationUI: "auto" })
                    .catch(() => alert("something is wrong with you browser"));
            }
            else {
                document.exitFullscreen();
            }
        }
    }


    // for moving the eye of the png
    React.useEffect( () => {
        const mouseMover = (): void => {
          
          document.addEventListener("mousemove", e => {
            const mouseX : number = e.clientX;
            const mouseY : number = e.clientY;
        
            const rabbit : Element | null | HTMLImageElement = document.getElementById("rabbit") as Element | HTMLImageElement | null;
            const rekt : DOMRect | any = rabbit?.getBoundingClientRect();
        
            const anchorX : number = rekt.left + rekt.width / 2;
            const anchorY : number = rekt.right + rekt.height / 2;
        
            const angleDeg = getAngle(mouseX, mouseY, anchorX, anchorY);
            
            const eyes : NodeList | HTMLDivElement | Array<NodeList> = document.querySelectorAll(".eye")
    
            eyes.forEach(eye => {
              (eye.style as CSSStyleDeclaration).transform = `rotate(${angleDeg + 90}deg)`; // did not work becuase of a semicolon
              rabbit.style.filter = `hue-rotate(${angleDeg -30}deg)`;
            })
          });
        }
        mouseMover();
      });

      function getAngle(cx : number, cy : number, ex: number, ey : number) : number {
        const dy = ey - cy;
        const dx = ex - cx;
    
        const rad = Math.atan2(dy, dx);
        return rad * 180 / Math.PI;
      }
    return (
        
            <div className="w-fit cursor-pointer relative" ref={ref} onClick={makeFullScreen}>
                <Image
                    id="rabbit"
                    src={me}
                    alt="mena"
                    width={400}
                    height={400}
                    object-fit="contain"
                    loading='eager'
                    className="no object-cover  w-[15rem] h-[15rem] rounded-md relative top-24 md:ml-[9rem] ml-24
                    transiti transition-all duration-300 z-[99]"
                />
                
                <div className="absolute w-4 rounded-full h-4 bg-white lg:top-[9rem] z-[998] lg:left-[17.7rem] top-[9rem] left-[17.7rem]"></div>
                <div className="absolute w-4 rounded-full h-4 bg-white lg:top-[9rem] z-[998] lg:left-[20.7rem] top-[9rem] left-[14.7rem] "></div>
                <div className="absolute w-4 rounded-full h-4 bg-white lg:top-[16rem] z-[998] lg:left-[10.7rem] top-[16rem] left-[10.9rem] "></div>
                <div className="absolute w-4 rounded-full h-4 bg-white lg:top-[15.8rem] z-[100] lg:left-[14rem] top-[16rem] left-[7.6rem] "></div>

                    {/* <div className="eye absolute w-2 rounded-full h-2 bg-black "></div>
                    <div className="eye absolute w-2 rounded-full h-2 bg-black lg:top-[9rem] z-[998] lg:left-[20.7rem] top-[9rem] left-[14.7rem] "></div>
                    <div className="eye absolute w-2 rounded-full h-2 bg-black lg:top-[16rem] z-[998] lg:left-[10.7rem] top-[16rem] left-[10.9rem] "></div>
                    <div className="eye absolute w-2 rounded-full h-2 bg-black lg:top-[15.8rem] z-[100] lg:left-[14rem] top-[16rem] left-[7.6rem] "></div> */}
                
                <div className="bg-white w-fit">

                    <Image 
                        src={eye}
                        alt="eye"
                        width={20}
                        height={20}
                        className="  absolute eye w-fit  lg:top-[8.3rem] z-[999] lg:left-[17.9rem] top-[8.5rem] left-[15rem] rounded-full"
                    />
                    <Image 
                        src={eye}
                        alt="eye"
                        width={20}
                        height={20}
                        className="absolute rounded-full bg-white eye w-fit  lg:top-[8.2rem] z-[999] lg:left-[20.9rem] top-[8.2rem] left-[18rem]"

                    />
                    <Image 
                        src={eye}
                        alt="eye"
                        width={20}
                        height={20}
                        className="absolute eye w-fit rounded-full lg:top-[15.8rem] z-[999] lg:left-[10.7rem] top-[15.7rem] left-[7.6rem]"

                    />
                    
                    <Image 
                        src={eye}
                        alt="eye"
                        width={20}
                        height={20}
                        className="absolute eye w-fit  lg:top-[15rem] rounded-full z-[999] lg:left-[13.9rem] top-[15.1rem] left-[11rem]"

                    />
                </div>
                    
            </div>
        
    )
}

export default MyImage