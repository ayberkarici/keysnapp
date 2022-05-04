import React from "react";

const AnswererBox = ({ name, questionAnswered, userUrl }) => {
    return (
        <div className="answerer-box">
            <a href={"user/" + userUrl}>
                <div className="answerer-profile-photo">[img]</div>
            </a>
            <div className="answerer-info">
                <div className="answerer-name">
                    <a className="answerer" href={"user/" + userUrl}>
                        {name}
                    </a>{" "}
                    bu soruyu cevapladı
                </div>
                <div className="answerer-questions-done">
                    Daha önce {questionAnswered} soruyu daha cevapladı
                </div>
            </div>
        </div>
    );
};

export default AnswererBox;
