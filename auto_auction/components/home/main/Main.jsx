import { useEffect, useRef } from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "../../../node_modules/gsap/ScrollTrigger"
import SplitTextJS from 'split-text-js';
import ButtonContacts from "@/components/items/Button";

export default function Main() {

    const random = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const mainContainer = useRef(null);
    

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const header = document.querySelector(".main__header");
        new SplitTextJS(header);

        const tl = gsap.timeline();
        let mm = gsap.matchMedia();
        tl.to(mainContainer.current,{
            opacity: 1
        })
        tl.to(mainContainer.current,{
            backgroundPosition: "right 0px bottom",
            delay: 1.5,
            duration: .5
        })
        tl.from(".SplitTextJS-char",{
            opacity: 0,
            scale: 0.1,
            x:() => random(-500, 500),
            y:() => random(-500, 500),
            stagger: .02,
        })
        tl.from(".main__subtitle span",{
            opacity: 0,
            x: 200,
            stagger: .5
        },"<")
        tl.from(".main__description",{
            opacity: 0,
            y: 100
        })
        tl.from(".main__btn",{
            opacity: 0,
            duration: .4,
            scale: 0.1,
            onComplete: ()=> {
                mm.add("(min-width: 1280px)", () => {
                    const scrollTl = gsap.timeline({
                        scrollTrigger: {
                            trigger: ".main__container",
                            start: "40% 10%",
                            end: "150% top",
                            scrub: 1,
                        }
                    })
                    scrollTl.to(".main__container", {
                        backgroundPosition: "right -50% bottom",
                        x: "-50%",
                        width: "400vw"
                    })
                })
            }
        })
    }, []);


    return (
        <main className="main  overflow-hidden">
            <div ref={mainContainer} className="main__container ] bg-[url('/img/index/main/main-bg.png')] bg-no-repeat bg-[right_-1000px_bottom] bg-contain px-7 md:pl-[130px] mb-[80px] opacity-0">
                <h1 className="main__header text-[26px] font-light leading-9  md:text-[54px] md:leading-[61px] lg:w-2/3 xl:w-[800px] ">
                    We are an American based company professionally provide 
                </h1>
                <h1 className="main__subtitle text-main-color text-[26px] font-light leading-9 mb-[25px] md:text-[54px] md:leading-[61px] lg:w-2/3 xl:w-[800px]">
                    <span className="inline-block"> auto</span> <span className="inline-block">auction</span> <span className="inline-block">participating</span>
                </h1>
                <p className="main__description mb-10 md:w-[400px]">We ship cars, motorcycles, boats, special machinery in containers from the USA to all over the world.</p>
                <ButtonContacts name={"main__btn mb-[350px]"} />

            </div>
        </main>
    );
}
