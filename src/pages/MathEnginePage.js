import React, { useState } from "react";
import { addStyles, EditableMathField, StaticMathField } from "react-mathquill";
import {latexParser} from "latex-parser";

addStyles();

const MathEngine = () => {
    const [latex, setLatex] = useState("\\frac{1}{\\sqrt{2}}\\cdot 2");

    const [tokens, setTokens] = useState(latexParser.parse(latex));
    
    
    React.useEffect(() => {
        setTokens(latex);
        console.log(tokens);
    
    } , [latex]);


    return (
        <div className="section-layout">
            <EditableMathField
                latex={latex}
                onChange={(mathField) => {
                    setLatex(mathField.latex());
                }}
            />
            <p>{latex}</p>
        </div>
    );
};

function addbits(s) {
    if (s === "") {
        return "null";
    } else {
        return (s.replace(/\s/g, "").match(/[+\-]?([0-9\.]+)/g) || []).reduce(
            function (sum, value) {
                const newLocal = parseFloat(sum) + parseFloat(value);
                return newLocal;
            }
        );
    }
}

export default MathEngine;
