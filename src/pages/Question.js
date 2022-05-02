import React, { useEffect, useState } from "react";
import axios from "axios";

const Question = () => {
    const [question, setQuestion] = useState({});
    const [supportJSON, setSupportJSON] = useState({
        func: function (a, b, c) {
            return a + b + c;
        },
        params: [1, 3, 4],
    });

    useEffect(() => {
        const params = () => {
            for (let i = 0; i < supportJSON.length; i++) {
                
            }

            return 
        }

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
            <h1>Question: {question.name}...</h1>
            <div className="variables"></div>
        </div>
    );
};

export default Question;
