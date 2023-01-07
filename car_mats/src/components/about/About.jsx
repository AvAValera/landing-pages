import React, {useEffect} from "react";
import "./about.scss";
import Card from "./Card";
import card1 from "../../img/about/card1.jpg";
import card2 from "../../img/about/card2.jpg";
import card3 from "../../img/about/card3.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
    const dataCard = [
        {
            id: 1,
            img: card1,
            header: "МАТЕРИАЛ",
            text: "Коврики EVA всесезонные и отличаются уникальной поверхностью материала с ячейками ромбовидной формы. Из-за чего вода не проливается при изъятии ковра и не плещется при езде. Коврики воду не пропускают.",
        },
        {
            id: 2,
            img: card2,
            header: "ОТЛИЧИЯ",
            text: "Резиновые коврики загибаются и лезут на педали. EVA коврики такого не допустят! Специальные липучки держат его в одном положении. При желании, для водителя устанавливается подпятник из рельефного алюминия.",
        },
        {
            id: 3,
            img: card3,
            header: "РАСЦВЕТКА",
            text: "Автомобильные коврики EVA можно заказать и в индивидуальных размерах и в разных цветах, которые комбинируется на выбор покупателя с такими же цветами окантованной полипропиленовой ременной ленты.",
        },
    ];

    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        gsap.fromTo(".card",{
            opacity: 0,
            y: 200,
        },{
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger:{
                trigger: ".card-second",
                start: "-200px 80%",
            }
        })
    }, []);
    return (
        <section className="about">
            <div className="about__container">
                <h2 className="about__header">
                    Что такое <span className="about__header_color">EVA </span>
                    коврики?
                </h2>
                <div className="about__card-block">
                    {dataCard.map((el) => (
                        <Card
                        key={el.id}
                            {...el}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
