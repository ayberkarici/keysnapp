import React, { useState } from "react";

const SectionItemsPage = () => {
    const homeworkItem = [
        {
            title: "A ball releasing 3 feet above the... ",
            id : 12098401924,
            url: "478473872"
        },
        {
            title: "A flat, square surface with side ... ",
            id : 12098401925,
            url: "132390902"
        },
        {
            title: "A ball releasing 3 feet above the... ",
            id : 12098401924,
            url: "478473872"
        },
        {
            title: "A flat, square surface with side ... ",
            id : 12098401925,
            url: "132390902"
        },
        {
            title: "A ball releasing 3 feet above the... ",
            id : 12098401924,
            url: "478473872"
        },
        {
            title: "A flat, square surface with side ... ",
            id : 12098401925,
            url: "132390902"
        },
    ];


    return (
        <div className="section-layout">
            <div className="form-layout">
                <div for="univ-choice" className="section-title">
                    <span className="highlight-green">Ödev</span> listesi
                </div>
                <div className="homework-list">
                    {homeworkItem.map((item, key) => {
                        return (
                            <a
                                key={key}
                                className="homework-list-item"
                                href={"/question/" + item.url} 
                            >
                                <h1>{(key+1) + " - " + item.title}</h1>
                                <div className="item-left-color"></div>
                            </a>
                        );
                    })}
                </div>

                <a
                    className="button-position-left navigation-button-style-1"
                    href="/active-homeworks"
                >
                    Önceki
                </a>
            </div>
        </div>
    );
};

export default SectionItemsPage;
