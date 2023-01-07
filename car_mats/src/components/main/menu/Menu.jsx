import React from "react";

export default function Menu() {

    const menuItem = [
        {id: 1, name: "отзывы", url:"/#"},
        {id: 2, name: "что это?", url:"/#"},
        {id: 3, name: "контакты", url:"/#"}
    ]


    return (
        <nav className="main__menu">
            <ul className="main__menu-container">
                {
                    menuItem.map((el) => <li key={el.id}><a href={el.url}>{el.name}</a></li>)
                }
            </ul>
        </nav>
    );
}
