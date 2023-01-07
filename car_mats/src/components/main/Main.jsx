import React from "react";
import Logo from "./logo/Logo";
import Menu from "./menu/Menu";
import Title from "./block/Title";
import "./main.scss";
import matsImg from "../../img/main/mats.svg";
import vectorSmall from "../../img/footer/vector-small.svg";

export default function Main({ setShowModal }) {
    return (
        <main className="main">
            <div className="main__container">
                <div className="main__header">
                    <Logo />
                    <Menu />
                </div>
                <div className="main__block">
                    <img
                        className="main__anim"
                        src={vectorSmall}
                        alt="vector"
                    />
                    <img
                        className="main__anim"
                        src={vectorSmall}
                        alt="vector"
                        style={{
                            top: "100px",
                            left: "250px",
                            width: "400px",
                            animation: "rotate 30s linear reverse infinite ",
                        }}
                    />
                    <img
                        className="main__anim"
                        src={vectorSmall}
                        alt="vector"
                        style={{
                            top: "500px",
                            left: "10px",
                            width: "100px",
                            animation: "scale 10s infinite alternate ",
                        }}
                    />
                    <Title setShowModal={setShowModal} />
                    <div className="main__block_image">
                        <img src={matsImg} alt="" />
                    </div>
                </div>
            </div>
        </main>
    );
}
