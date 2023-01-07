import React, { useState } from "react";
import "./app.scss";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import About from "./components/about/About";
import Reviews from "./components/reviews/Reviews";
import Footer from "./components/footer/Footer";

function App() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="app">
            {showModal && (
                <div onClick={() => setShowModal(false)} className="block">
                    <div className="block__modal">
                        <h2>ФОРМА ЗАЯВКИ</h2>
                        <form className="block__form" action="#">
                            <input type="text" placeholder="Ваше имя"/>
                            <input type="email" placeholder="Ваше e-mail"/>
                            <input className="block__form_about" type="text" placeholder="Ваше сообщение (марка автомобиля, цвет ковриков, номер телефона)"/>
                            <button className="block__form_btn">отправить</button>
                        </form>
                    </div>
                </div>
            )}
            <div
                className={
                    showModal ? "app__container app__blur" : "app__container"
                }
            >
                <Header />
                <Main setShowModal={setShowModal} />
                <About />
                <Reviews />
                <Footer />
            </div>
        </div>
    );
}

export default App;
