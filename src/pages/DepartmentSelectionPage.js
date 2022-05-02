import React from "react";

const UnivSelectionPage = () => {
    const options = [
        "Endüstri Mühendisliği",
        "Makine Mühendisliği",
        "Fizik",
        "Kimya",
    ];
    return (
        <div className="section-layout">
            <form action="/active-homeworks">
                <div className="form-layout">
                    <div for="univ-choice" className="section-title">
                        <span className="highlight-green">Bölümünü</span>{" "}
                        seç!
                    </div>
                    <select
                        name="depart-choice"
                        id="depart-choice"
                        className="section-select"
                    >
                        <option defaultValue={"null"} value="null">
                            Bölümler
                        </option>
                        {options.map((option, key) => {
                            return <option key={key} value={option}>{option}</option>; 
                        })}
                    </select>
                    <div className="button-position-right">
                        <button className="navigation-button-style-1">
                            Sonraki
                        </button>
                    </div>
                    <a
                        className="button-position-left navigation-button-style-1"
                        href="/university-selection"
                    >
                        Önceki
                    </a>
                </div>
            </form>
        </div>
    );
};

export default UnivSelectionPage;
