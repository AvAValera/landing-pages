import React from "react";
import "./header.scss";
import phone from "../../img/header/telephone.svg";
import marker from "../../img/header/marker.svg";
import instagram from "../../img/header/instagram.svg";

export default function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__telephones">
                    <img className="header__telephones_telephone-icon" src={phone} alt="phone_icon" />
                    <a className="header__telephones_number-first" href="tel:+375292922929">+375 29 292-29-29 (VEL)</a>
                    <a className="header__telephones_number-second" href="tel:+375333333333">+375 33 333-33-33 (MTC)</a>
                </div>
                <div className="header__marker">
                    <img className="header__marker_icon" src={marker} alt="marker_icon" />
                    <a href="/#">ваш город</a>
                </div>
                <div className="header__social">
                    <a href="/#">
                        <img src={instagram} alt="" />
                        <span>посетите нашу страницу</span>
                    </a>
                </div>
            </div>
        </header>
    );
}
