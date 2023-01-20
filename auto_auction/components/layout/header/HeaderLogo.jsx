import Link from "next/link";


export default function HeaderLogo() {
    return (
        <div className="header__logo">
            <div className="header__mobile-logo md:hidden">
                <Link href={"/"}>
                    <img src="/img/logo/mobile-logo.svg" alt="logo" />
                </Link>
            </div>
            <div className="header__logo hidden md:block">
                <Link href={"/"}>
                    <img src="/img/logo/logo.svg" alt="logo" />
                </Link>
            </div>
        </div>
    );
}
