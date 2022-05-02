import React from "react";

const SectionItemsPage = () => {
    const homeworkItems = [
        {
            sectionTitle: "Unit 28 - Capacitors",
            dueDate: "7 nisan",
            sectionUrl: "8174789817234"
            
        },
        {
            sectionTitle: "Unit 29 - Magnetic Field",
            dueDate: "20 nisan",
            sectionUrl: "8174789817235"
        },
    ];

    return (
        <div className="section-layout">
            <div className="form-layout">
                <div className="section-title">
                    <span className="highlight-green">Aktif</span> ödevlerin
                </div>
                <div className="homework-list">
                    {homeworkItems.map((item, key) => {
                        return (
                            <a
                                key={key}
                                className="homework-list-item"
                                href={"/section-details/" + item.sectionUrl} 
                            >
                                <h1>{item.sectionTitle}</h1>
                                <div className="due-date">
                                    <span>{item.dueDate}</span>
                                </div>
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
