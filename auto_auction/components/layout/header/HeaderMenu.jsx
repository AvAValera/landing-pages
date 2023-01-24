import Link from "next/link";

export default function HeaderMenu({menu = []}) {
    
    return (
        <menu className="header__menu hidden md:block mt-[7px]">
            <nav>
                {
                    menu.map(el => <Link key={el.id} className="header__menu_item mr-[42px] opacity-0" href={el.url}>{el.name}</Link>)
                }
            </nav>
        </menu>
    );
}
