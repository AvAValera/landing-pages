import Link from "next/link";


export default function HeaderLogo() {
    return (
        <div className="header__logo">
            <Link href={"/"}>
            <picture>
                <source media="(min-width: 768px)" srcSet="/img/logo/logo.svg" />
                <img src="/img/logo/mobile-logo.svg" alt="logo" />
            </picture>
            </Link>
        </div>
    );
}
