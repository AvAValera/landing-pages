export default function MobileBtnMenu() {
    return (
        <button className="header__mobile-btn w-[31px] h-[31px] gap-[5px] grid grid-cols-2 grid-rows-2 md:hidden">
            <div className="header__mobile-btn_circle w-[13px] h-[13px] border-main-color border-[2px] rounded-full"></div>
            <div className="header__mobile-btn_circle w-[13px] h-[13px] border-main-color border-[2px] rounded-full"></div>
            <div className="header__mobile-btn_circle w-[13px] h-[13px] border-main-color border-[2px] rounded-full"></div>
            <div className="header__mobile-btn_circle w-[13px] h-[13px] border-main-color border-[2px] rounded-full"></div>
        </button>
    );
}
