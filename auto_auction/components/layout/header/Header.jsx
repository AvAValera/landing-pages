
import MobileBtnMenu from "./MobileBtnMenu";
import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";
import HeaderSocial from "./HeaderSocial";

export default function Header({menu}) {

    

    return (
        <header className="header mb-[72px] max-w-[1366px]">
            <div className="header__container flex justify-between items-center pt-[30px] px-[27px] lg:px-[132px]">
                <HeaderLogo />
                <HeaderMenu menu={menu} />
                <MobileBtnMenu />
                <HeaderSocial />
            </div>
        </header>
    );
}
