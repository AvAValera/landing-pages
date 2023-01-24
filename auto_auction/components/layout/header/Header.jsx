
import {useEffect} from "react";
import MobileBtnMenu from "./MobileBtnMenu";
import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";
import HeaderSocial from "./HeaderSocial";
import {gsap} from "gsap";

export default function Header({menu}) {
    const tl = gsap.timeline();
    useEffect(() => {
        tl.to(".header__container",{
            opacity: 1,
            duration: .5,
            y: 0,
            delay: .5
        })
        tl.to(".header__menu_item",{
            opacity: 1,
            duration: .5,
            stagger: .2,
        })
        tl.to(".header__social",{
            opacity: 1
        }, "<1")
        tl.to(".header__social img",{opacity: 1})
    }, []);

    return (
        <header className="header mb-[72px] max-w-[1366px] mx-auto">
            <div className="header__container flex justify-between items-center pt-[30px] px-[27px] lg:px-[132px] translate-y-[-50px] opacity-0">
                <HeaderLogo />
                <HeaderMenu menu={menu} />
                <MobileBtnMenu />
                <HeaderSocial />
            </div>
        </header>
    );
}
