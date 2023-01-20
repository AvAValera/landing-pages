import Link from "next/link";

export default function HeaderMenu({menu = []}) {
    return (
        <menu className="header__menu hidden md:block">
            <nav>
                {
                    menu.map(el => <Link key={el.id} className="mr-[42px]" href={el.url}>{el.name}</Link>)
                }
            </nav>
        </menu>
    );
}
