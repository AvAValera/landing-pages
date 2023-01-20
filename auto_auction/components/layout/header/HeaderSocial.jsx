import Link from "next/link";

export default function HeaderSocial() {
    return (
        <div className="header__social gap-[13px] hidden md:flex">
            <Link className="w-[41px] h-[41px] block bg-main-color rounded-[3px]" href={"/"}>
                <img className="p-[9px]" src="/img/header/telegram.svg" alt="telegram" />
            </Link>
            <Link className="w-[41px] h-[41px] block bg-main-color rounded-[3px]" href={"/"}>
                <img className="p-[9px]" src="/img/header/whatsapp.svg" alt="whatsapp" />
            </Link>
        </div>
    );
}
