import Link from "next/link";
import { useRouter } from "next/router";
import {animLeavePage} from "../animation";


export default function HeaderMenu({menu = []}) {
    const router = useRouter();
    
    return (
        <menu className="header__menu hidden md:block mt-[7px]">
            <nav className="flex gap-[42px]">
                {
                    menu.map(el => <Link onClick={(e) => {
                        e.preventDefault();
                        router.pathname !== el.url ? animLeavePage(el.url, router) : null
                    }} 
                    key={el.id} className={router.pathname === el.url ? "t-active-menu header__menu_item opacity-0" : "header__menu_item opacity-0"} 
                    href={el.url}>{el.name}</Link>)
                }
            </nav>
        </menu>
    );
}
