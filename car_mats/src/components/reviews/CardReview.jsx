import React from "react";

export default function CardReview({ img, text, name }) {
    return (
        <div className="rev-card">
            <div className="rev-card__container">
                <div className="rev-card__container_img">
                    <img src={img} alt="avatar_icon" />
                </div>
                <div className="rev-card__container_description">
                    <div className="rev-card__container_text">{text}</div>
                    <div className="rev-card__container_name">{name}</div>
                </div>
            </div>
        </div>
    );
}
