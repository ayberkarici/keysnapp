import React, { useState } from "react";
import Logo from "../assets/img/logo.png";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
    const [hamburgerMenu, setHamburgerMenu] = useState(false);

    const menuHandler = () => {!hamburgerMenu ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"}
    

    return (
        <header className="header">
            <div className="brand-name">
                <a href="/">
                    <img src={Logo} />
                </a>
            </div>
            <div className="menu-list">
                <a href="/" className="menu-list-item">
                    <span href="/a">Nasıl Çalışır</span>
                </a>
                <a href="/" className="menu-list-item">
                    <span href="/a">Math Engine</span>
                </a>
                <a href="/login" className="menu-list-item">
                    <span href="/login">Giriş Yap</span>
                </a>
                <a href="/register" className="signup-button menu-list-item">
                    <span >Üye Ol</span>
                </a>

                <div
                    className={
                        hamburgerMenu
                            ? "hamburger-button hamburger-icon-active"
                            : "hamburger-button"
                    }
                    onClick={() => {
                        setHamburgerMenu(!hamburgerMenu);
                        menuHandler();
                    }}
                >
                    <span className="hamburger-icon"></span>
                </div>
            </div>
            {hamburgerMenu && <HamburgerMenu />}
        </header>
    );
};

export default Header;
