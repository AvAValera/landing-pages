import { useEffect } from "react";
import {gsap} from "gsap";

export default function Main() {

    useEffect(() => {
        const tl = gsap.timeline();
        tl.to(".main__container",{
            backgroundPosition: "right 0% bottom",
            delay: 2,
            duration: 1
        })
    }, []);

    return (
        <main className="main">
            <div className="main__container bg-[url('/img/index/main/main-bg.png')] bg-no-repeat bg-[right_-100%_bottom] bg-contain px-7 md:pl-[130px] mb-[80px]">
                <h1 className="text-[26px] font-light leading-9 mb-[25px] md:text-[54px] md:leading-[61px] lg:w-2/3 xl:w-[800px]">
                    We are an American based company professionally provide <span className="text-main-color">auto
                    auction participating</span>
                </h1>
                <p className="mb-10 md:w-[400px]">We ship cars, motorcycles, boats, special machinery in containers from the USA to all over the world.</p>
                <button className="bg-main-color text-white text-center font-bold w-full py-6 mx-auto mb-[350px] rounded-[10px] mob-590:w-[226px] xl:mb-[216px]">CONTACT US</button>
            </div>
        </main>
    );
}
