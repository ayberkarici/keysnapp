import React from "react";
import LogoHamb from "../assets/img/logo_light.png";


const HamburgerMenu = () => {
    return (
        <div className="hamburger-menu">
            <div className="hamburger-menu-brand">
                <img src={LogoHamb} />
            </div>
            <div className="hamburger-menu-item">
                <a href="/">Nasıl Çalışır</a>
            </div>
            <div className="hamburger-menu-item">
                <a href="/">Math Engine</a>
            </div>
            <div className="hamburger-menu-item">
                <a href="/login">Giriş Yap</a>
            </div>
            <div className="hamburger-menu-item">
                <a href="/register">Üye Ol</a>
            </div>
        </div>
    );
};

export default HamburgerMenu;
