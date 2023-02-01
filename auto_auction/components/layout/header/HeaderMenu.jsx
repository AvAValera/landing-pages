import Link from "next/link";
import { useRouter } from "next/router";
import { animLeavePage, animLoadContactPage } from "../animation";

export default function HeaderMenu({menu = []}) {
    const router = useRouter();
    
    function activeMenu(el){
        if(router.pathname.includes("/services/") && el.url === "/services"){
            return "t-active-menu";
        }
        if(router.pathname === el.url){
            if( router.pathname === "/contacts"){
                return "t-active-menu-second";
            }
            return "t-active-menu";
        }
    } 
    
    return (
        <menu className="header__menu hidden md:block mt-[7px]">
            <nav className="flex gap-[42px]">
                {
                    menu.map(el => el.name === "CONTACTS" ? 
                    <button key={el.id} onClick={() => animLoadContactPage(router)} className={ `${activeMenu(el)} header__menu_item opacity-0`} >CONTACTS</button>:
                    <Link 
                    onClick={() => animLeavePage()}
                    key={el.id} className={ `${activeMenu(el)} header__menu_item opacity-0`} 
                    href={el.url}>{el.name}</Link>
                    )
                }
                
            </nav>
        </menu>
    );
}

{/*  */}