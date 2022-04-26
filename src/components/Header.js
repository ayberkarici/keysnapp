import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import HamburgerMenu from "./HamburgerMenu";

const Header = (props) => {
    const [hamburgerMenu, setHamburgerMenu] = useState(false);
    const pathList = props.pathList; 
    const [checkPath, setCheckPath] = useState(false);
    const location = useLocation(); 

    const menuHandler = () => {!hamburgerMenu ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"}
    
    React.useEffect(() => {
        for (let i = 0; i < pathList.length; i++) {
            if (window.location.pathname == pathList[i]) {
                console.log('içerdeyim');
                setCheckPath(true);
            }
        }
    }, [location]);

    return (
        <header className="header" style={(checkPath ? {"display" : "none"} : {})}>
            <div className="brand-name">
                <a href="/">
                    <img src={Logo} />
                </a>
            </div>
            <div className="menu-list">
                <a href="/" className="menu-list-item">
                    <span >Nasıl Çalışır</span>
                </a>
                <a href="/math-engine" className="menu-list-item">
                    <span >Math Engine</span>
                </a>
                <a href="/login" className="menu-list-item">
                    <span >Giriş Yap</span>
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
