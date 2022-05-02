import React from "react";

const ActiveHomeworks = () => {
    const homeworks = [
        {
            courseName: "Physics II",
            courseTeacher: "İlhan YAVUZ",
            courseID: "yavuz7281",
            dueDate: "7 Nisan",
            homeworkID: 8284016,
        },
        {
            courseName: "Chemistry",
            courseTeacher: "Rick SANCHEZ",
            courseID: "rickko74530",
            dueDate: "2 Nisan",
            homeworkID: 8593628,
        },
        {
            courseName: "Calculus II",
            courseTeacher: "Morty SANCHEZ",
            courseID: "moriarty74530",
            dueDate: "30 Mayıs",
            homeworkID: 7802765,
        }
    ];

    return (
        <div className="section-layout">
            <div className="form-layout">
                <div for="univ-choice" className="section-title">
                    <span className="highlight-green">Aktif</span> ödevlerin
                </div>
                <div className="homework-list">
                    {homeworks.map((homework, key) => {
                        return (
                            <a
                                key={key}
                                className="homework-list-item"
                                href={"/sections/" + homework.homeworkID} 
                            >
                                <h1>{homework.courseName}</h1>
                                <div className="teacher-name">{homework.courseTeacher}</div>
                                <div className="courseID">
                                    Course ID: <span>{homework.courseID}</span>
                                </div>
                                <div className="due-date">
                                    <span>{homework.dueDate}</span>
                                </div>
                                <div className="item-left-color"></div>
                            </a>
                        );
                    })}
                </div>

                <a
                    className="button-position-left navigation-button-style-1"
                    href="/department-selection"
                >
                    Önceki
                </a>
            </div>
        </div>
    );
};

export default ActiveHomeworks;
