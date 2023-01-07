import React from "react";
import "./footer.scss";
import instagram from "../../img/footer/instagram.svg"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__social footer__item">
                    <h3 className="footer__title">МЫ В СОЦИАЛЬНЫХ СЕТЯХ</h3>
                    <a href="/#" className="footer__social_icon">
                        <img src={instagram} alt="instagram" />
                    </a>
                </div>
                <div className="footer__contacts footer__item">
                    <h3 className="footer__title">КОНТАКТНЫЕ ТЕЛЕФОНЫ</h3>
                    <a className="footer__contacts_tel" href="tel:+375292922929">+375 29 292-29-29 (VEL)</a>
                    <br />
                    <a className="footer__contacts_tel" href="tel:+375333333333">+375 33 333-33-33 (MTC)</a>
                </div>
                <div className="footer__about footer__item">
                    <h3 className="footer__title">О НАС</h3>
                    <p>Индивидуальное изготовление EVA ковриков для вашего автомобиля</p>
                    <span>ваш город</span>
                </div>
            </div>
        </footer>
    );
}
