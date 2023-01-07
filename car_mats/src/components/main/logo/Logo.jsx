import React from "react";
import logo from "../../../img/main/logo.svg";

export default function Logo() {
    return (
        <a className="main__logo" href="/">
            <img className="main__logo_img" src={logo} alt="logo" />
            <span className="main__logo_name">EVARUGS</span>
        </a>
    );
}
