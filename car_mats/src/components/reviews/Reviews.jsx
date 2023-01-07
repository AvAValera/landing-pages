import React from "react";
import "./reviews.scss";
import CardReview from "./CardReview";
import avatar1 from "../../img/reviews/avatar1.jpg"
import avatar2 from "../../img/reviews/avatar2.jpg"
import avatar3 from "../../img/reviews/avatar3.jpg"

export default function Reviews() {
    const dataRev = [
        {
            id: 1,
            img: avatar1,
            text: "Коврики супер!!! Качество на высшем уровне!!! Удачи и побольше заказов вам!!! Большое спасибо!",
            name: "Константин В.",
        },
        {
            id: 2,
            img: avatar2,
            text: "Покупала у ребят коврики для Хундай солярис в подарок молодому человеку. Все очень понравилось. Буду советовать только вас.",
            name: "Вера К.",
        },
        {
            id: 3,
            img: avatar3,
            text: "Спасибо, все приехало, поставил. Результатом доволен, в машине супер! Заказывал на Ниссан.",
            name: "Николай П.",
        },
    ];

    return (
        <section className="reviews">
            <div className="reviews__container">
                <div className="reviews__card-block">
                    {
                        dataRev.map(el => <CardReview key={el.id} img={el.img} text={el.text} name={el.name} />)
                    }
                </div>
            </div>
        </section>
    );
}
