import React from "react";

const UnivSelectionPage = () => {
    const options = [
        "Marmara University",
        "Marmara University",
        "Marmara University",
        "Marmara University",
    ];
    return (
        <div className="section-layout">
            <form action="/department-selection">
                <div className="form-layout">
                    <div for="univ-choice" className="section-title">
                        <span className="highlight-green">Üniversiteni</span>{" "}
                        seç!
                    </div>
                    <select
                        name="univ-choice"
                        id="univ-choice"
                        className="section-select"
                    >
                        <option defaultValue={"null"} value="null">
                            Üniversiteler
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
                </div>
            </form>
        </div>
    );
};

export default UnivSelectionPage;
