import React, { useEffect, useState } from "react";
import axios from "axios";
import Variable from "../components/QuestionPage/Variable";
import AnswererBox from "../components/QuestionPage/AnswererBox";
import QuestionSkeleton from "../components/QuestionSkeleton";

const QuestionPage = () => {
    // TODO Mathquill ekle
    const [question, setQuestion] = useState({});
    const [supportJSON, setSupportJSON] = useState({
        func: function (a, b, c) {
            return a + b + c;
        },
        params: [1, 3, 4],
    });

    useEffect(() => {
        const params = () => {
            for (let i = 0; i < supportJSON.length; i++) {}

            return;
        };

        console.log(supportJSON.func());
        // Make a request for a user with a given ID
        axios
            .get("https://jsonplaceholder.typicode.com/comments/1")
            .then(function (response) {
                // handle success
                setQuestion(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }, []);

    return (
        <div className="question-layout">
            <div className="variables">
                <Variable sign={"V"} />
                <Variable sign={"∂"} />
                <Variable sign={"∆x"} />
                <div className="variables-title">Değişkenlerin</div>
                <button className="calculate-button">Soruyu çöz</button>
            </div>
            <div className="question-section">
                {!question&& <QuestionSkeleton />}
                {question && (
                    <>
                        <AnswererBox
                            name={"Ayberk Arıcı"}
                            questionAnswered={12}
                            userUrl={"ayberk-arici"}
                        />
                        <div className="question">
                            <h1 className="question-mark">
                                Soru: {question.name}...
                            </h1>
                            <p>{question.body}</p>
                            <p>{question.body}</p>
                            <h1 className="step-mark">Adım 1</h1>
                            <p>{question.body}</p>
                            <p>{question.body}</p>
                            <p>{question.body}</p>
                            <h1 className="step-mark">Adım 2</h1>
                            <p>{question.body}</p>
                            <h1 className="step-mark">Adım 3</h1>
                            <p>{question.body}</p>
                            <p>{question.body}</p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default QuestionPage;
