import Link from "next/link";

export default function HeaderSocial({mode}) {

    const socialBg = mode === 'lite' ? "bg-[#5591FF]" : "bg-main-color";

    return (
        <div className="header__social gap-[13px] hidden md:flex opacity-0">
            <Link className={`w-[41px] h-[41px] block ${socialBg} rounded-[3px]`} href={"/"}>
                <img className="p-[9px] opacity-0" src="/img/header/telegram.svg" alt="telegram" />
            </Link>
            <Link className={`w-[41px] h-[41px] block ${socialBg} rounded-[3px]`} href={"/"}>
                <img className="p-[9px] opacity-0" src="/img/header/whatsapp.svg" alt="whatsapp" />
            </Link>
        </div>
    );
}
