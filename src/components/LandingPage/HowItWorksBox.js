import React, { useState } from "react";
import search from "../../assets/img/search.png";
import click from "../../assets/img/click.png";
import coffee from "../../assets/img/coffee.png";
import result from "../../assets/img/result.png";

const Pricing = () => {
    const [shownPhoto, setShownPhoto] = useState("search");

    return (
        <section className="section-layout">
            <div className="section-header">
                Coffee Pay & Math Engine, nasıl çalışır
            </div>
            <div className="section-body">
                <div className="premise-box">
                    <div
                        className="premise"
                        onMouseEnter={() => setShownPhoto("search")}
                    >
                        <span>1) Ödev setini çözümler arasında arat</span>
                    </div>
                    <div
                        className="premise"
                        onMouseEnter={() => setShownPhoto("package")}
                    >
                        <span>2) Pakete tıkla</span>
                    </div>
                    <div
                        className="premise"
                        onMouseEnter={() => setShownPhoto("coffeePay")}
                    >
                        <span>3) Coffee Pay'le ödemeni yap</span>
                    </div>
                    <div
                        className="premise"
                        onMouseEnter={() => setShownPhoto("mathEngine")}
                    >
                        <span>
                            4) Math Engine'i kullan ve <span className="highlight-green" >kendi değerlerinle</span> sonuca
                            ulaş
                        </span>
                    </div>
                </div>
                <div className="premise-image">
                    {shownPhoto == "search" && <img src={search} style={{ display: "block" }} />}
                    {shownPhoto == "package" && <img src={click} style={{ display: "block" }} />}
                    {shownPhoto == "coffeePay" && <img src={coffee} style={{ display: "block" }} />}
                    {shownPhoto == "mathEngine" && <img src={result} style={{ display: "block" }} />}
                    
                </div>
            </div>
        </section>
    );
};

export default Pricing;
