import React from "react";
import { Link } from "react-router-dom";
import hwImg from "../../assets/img/boy-sitting.png";

const Landing = () => {
    return (
        <div className="landing">
            <div className="landing_starting_part">
                <div className="landing_text">
                    <h1>
                        Ev ödevi <br /> yeniden tasarlandı...
                    </h1>
                    <p>
                        Sen de bitmek bilmeyen ödevlerden, anlamadığın sorularla
                        saatlerce uğraşmaktan ya da emeğinin karşılığını
                        alamamaktan sıkılmadın mı?
                    </p>
                    <p>
                        Sana güzel bir haberim var. Artık sorularının
                        cevaplarını tek tıkla bulabileceksin! Ayrıca sen de
                        sürecin bir parçası olabilirsin!
                    </p>
                </div>
                <div className="landing_buttons">
                    <a href="/login" className="sign-up-button">
                        Giriş yap
                    </a>

                    <a href="/asd" className="how-it-works">
                        Nasıl çalışır?
                    </a>
                </div>
            </div>
            <div className="landing_image">
                <img src={hwImg} />
            </div>
        </div>
    );
};

export default Landing;
