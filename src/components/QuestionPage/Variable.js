import React from "react";

const Variable = ({sign}) => {
    return (
        <div className="variable">
            <div className="sign">{sign}</div>
            <input type="text" pattern="\d*"></input>
        </div>
    );
};

export default Variable;
