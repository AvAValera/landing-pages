import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { animLoadContactPage } from "../animation";

export default function MobileMenu({ menu, showMenu, setShowMenu }) {

    const router = useRouter();

    function visibleMenu() {
        document.querySelector("body").style.overflow = "scroll";
        setShowMenu(false)
    }

    function activeMenu(el){
        if(router.pathname.includes("/services/") && el.url === "/services"){
            return "t-active-menu";
        }
        if(router.pathname === el.url){
            return "t-active-menu";
        }
    } 


    return (
        <AnimatePresence>
            {showMenu && (
                <motion.div className="mobile-menu absolute bg-[#18162dd0] min-w-[375px] w-full h-screen z-10"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0,}}
                >
                    <button onClick={() => visibleMenu(false)} className="mobile-menu__btn-close absolute  right-[20px] top-[35px]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={5}
                            stroke="#3579F4"
                            className="w-10 h-10"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 19.5L8.25 12l7.5-7.5"
                            />
                        </svg>
                    </button>
                    <motion.div className="mobile-menu__container absolute bg-white w-[295px]  h-full left-0 px-[29px] py-[30px] flex flex-col overflow-y-scroll"
                        initial={{left: "-100%"}}
                        animate={{left: "0%"}}
                        exit={{left: "-100%", transition:{delay: 0}}}
                        transition={{delay: .3, ease: "linear",}}
                    >
                        <div className="mobile-menu__logo mb-[100px]">
                            <img src="/img/logo/mobile-logo.svg" alt="logo" />
                        </div>
                        <menu>
                            <nav className="flex flex-col gap-[30px] mb-[185px]">
                                {menu.map((el) => (
                                    el.name === "CONTACTS" ? 
                                    <span key={el.id} onClick={() => {
                                        animLoadContactPage(router) 
                                        visibleMenu(false)
                                    }} 
                                    className={ `${activeMenu(el)} text-2xl text-black `} >CONTACTS</span>:
                                    <Link
                                    onClick={() => visibleMenu(false)}
                                        className={`${activeMenu(el)} text-2xl`}
                                        href={el.url}
                                        key={el.id}
                                    >
                                        {el.name}
                                    </Link>
                                ))}
                            </nav>
                        </menu>
                        <div className="mobile-menu__social flex gap-[15px] mb-[41px]">
                            <Link href="#">
                                <img
                                    className=" w-[48px] h-[48px] bg-main-color rounded-[3px] p-[10px] "
                                    src="/img/header/telegram.svg"
                                    alt="social-icon"
                                />
                            </Link>
                            <Link href="#">
                                <img
                                    className=" w-[48px] h-[48px] bg-main-color rounded-[3px] p-[10px] "
                                    src="/img/header/whatsapp.svg"
                                    alt="social-icon"
                                />
                            </Link>
                        </div>
                        <div className="mobile-menu__contact">
                            <span className="text-[22px] font-medium">
                                info@cargo.us
                            </span>
                            <br />
                            <span className="text-[22px] font-medium">
                                +1 912 000 0000
                            </span>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
