import React from "react";
import supermanSvg from "../../assets/img/svg/superman_icon.svg";
import rickSvg from "../../assets/img/svg/rick_icon.svg";
import starwarsIcon from "../../assets/img/svg/starwars_icon.svg";

const HowItWorks2 = () => {
    return (
        <section className="section-layout how-it-works" style={{"background-color" : "#FFFFFF" }}>
            <div className="section-header">İş bitiriciler için;</div>
            <div className="info-card-container">
                <div className="info-card">
                    <div className="info-card-icon">
                        <img src={supermanSvg} />
                    </div>
                    <div className="info-card-title">Title</div>
                    <div className="info-card-desc">
                        Lorem ıpsum dolor sit amet. Per aspera ad astra. Ars
                        longa vita bravis.
                    </div>
                </div>
                <div className="info-card">
                    <div className="info-card-icon">
                        <img src={rickSvg} />{" "}
                    </div>
                    <div className="info-card-title">Title</div>
                    <div className="info-card-desc">
                        Lorem ıpsum dolor sit amet. Per aspera ad astra. Ars
                        longa vita bravis.
                    </div>
                </div>
                <div className="info-card">
                    <div className="info-card-icon">
                        <img src={starwarsIcon} />{" "}
                    </div>
                    <div className="info-card-title">Title</div>
                    <div className="info-card-desc">
                        Lorem ıpsum dolor sit amet. Per aspera ad astra. Ars
                        longa vita bravis.
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks2;
