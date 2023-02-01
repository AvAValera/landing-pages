import Link from "next/link";


export default function HeaderLogo({mode}) {
    return (
        <div className="header__logo">
            <Link href={"/"}>
            <picture>
                <source media="(min-width: 768px)" srcSet={mode === "lite" ? "/img/logo/logo-white.svg" : "/img/logo/logo.svg"} />
                <img src={mode === "lite" ? "/img/logo/mobile-logo-white.svg": "/img/logo/mobile-logo.svg"} alt="logo" />
            </picture>
            </Link>
        </div>
    );
}
