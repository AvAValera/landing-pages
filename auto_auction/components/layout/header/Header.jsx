import {useEffect, useState} from "react";
import MobileBtnMenu from "./MobileBtnMenu";
import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";
import HeaderSocial from "./HeaderSocial";
import { animLoadPage } from "../animation";
import { useRouter } from "next/router";
import {gsap} from "gsap"


export default function Header({menu, showMenu, setShowMenu, mode}) {
    useEffect(() => {
        animLoadPage()
    }, []);
    return (
        <header className={mode === "lite" ? "header mx-auto max-w-[1366px] bg-main-color" : "header mb-[72px] max-w-[1366px] mx-auto"}>
            <div className="header__container  flex justify-between items-center pt-[30px] px-[27px] lg:px-[132px] translate-y-[-50px] opacity-0">
                <HeaderLogo mode={mode} />
                <HeaderMenu menu={menu} />
                <MobileBtnMenu showMenu={showMenu} setShowMenu={setShowMenu} mode={mode}/>
                <HeaderSocial mode={mode} />
            </div>
        </header>
    );
}
