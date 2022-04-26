import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import brandPhoto from "../assets/img/logo_light.png";

const Footer = (props) => {
    const pathList = props.pathList; 
    const [checkPath, setCheckPath] = useState(false);

    const location = useLocation(); 

    React.useEffect(() => {
        for (let i = 0; i < pathList.length; i++) {
            if (window.location.pathname == pathList[i]) {
                console.log('içerdeyim');
                setCheckPath(true);
            }
        }
    }, [location]);

    return (
        <footer className="footer" style={(checkPath ? {"display" : "none"} : {})}>
            <div className="brand">
                <img src={brandPhoto} />
            </div>
            <div className="site-map">
                <div className="item-header"><span>Bölümler</span></div>
                <div className="item"><a href="/">Nasıl Çalışır</a></div>
                <div className="item"><a href="/">Math Engine</a></div>
                <div className="item"><a href="/login">Giriş Yap</a></div>
                <div className="item"><a href="/register">Üye Ol</a></div>
                <div className="item"><a href="/">Site Haritası</a></div>
            </div>
            <div className="legal">
                <div className="item-header"><span>Legal</span></div>
                <div className="item"><a href="/">Gizlilik Politikası</a></div>
                <div className="item"><a href="/">KVKK</a></div>
                <div className="item"><a href="/">Kullanım Koşulları</a></div>
            </div>
        </footer>
    );
};

export default Footer;
