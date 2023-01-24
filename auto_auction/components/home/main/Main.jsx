import { useEffect } from "react";
import {gsap} from "gsap";

export default function Main() {

    useEffect(() => {
        const tl = gsap.timeline();
        tl.to(".main__container",{
            backgroundPosition: "right 0px bottom",
            delay: 1.5,
            duration: .5
        })
    }, []);

    return (
        <main className="main">
            <div className="main__container bg-[url('/img/index/main/main-bg.png')] bg-no-repeat bg-[right_-1000px_bottom] bg-contain px-7 md:pl-[130px] mb-[80px]">
                <h1 className="text-[26px] font-light leading-9 mb-[25px] md:text-[54px] md:leading-[61px] lg:w-2/3 xl:w-[800px]">
                    We are an American based company professionally provide <span className="text-main-color">auto
                    auction participating</span>
                </h1>
                <p className="mb-10 md:w-[400px]">We ship cars, motorcycles, boats, special machinery in containers from the USA to all over the world.</p>
                <button className="t-main-btn-primary mb-[350px]">CONTACT US</button>
            </div>
        </main>
    );
}
