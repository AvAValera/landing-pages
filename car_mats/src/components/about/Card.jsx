import React from "react";

export default function Card({id, img, header, text}) {
    return (
        <div className={id === 2 ? "card card-second": "card"}>
            <div className="card__container">
                <div className="card__image" style={{backgroundImage: `url(${img})`}}>
                    {/* <img src={img} alt="card_img" /> */}
                </div>
                <div className="card__text">
                    <div className="card__text_header">{header}</div>
                    <div className="card__text_description">{text}</div>
                </div>
            </div>
        </div>
    );
}
