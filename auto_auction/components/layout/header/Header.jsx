import {useEffect} from "react";
import MobileBtnMenu from "./MobileBtnMenu";
import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";
import HeaderSocial from "./HeaderSocial";
import {animLoadPage} from "../animation"

export default function Header({menu, showMenu, setShowMenu}) {
    
    useEffect(() => {
        animLoadPage();
    }, []);

    return (
        <header className="header mb-[72px] max-w-[1366px] mx-auto">
            <div className="header__container flex justify-between items-center pt-[30px] px-[27px] lg:px-[132px] translate-y-[-50px] opacity-0">
                <HeaderLogo />
                <HeaderMenu menu={menu} />
                <MobileBtnMenu showMenu={showMenu} setShowMenu={setShowMenu} />
                <HeaderSocial />
            </div>
        </header>
    );
}
