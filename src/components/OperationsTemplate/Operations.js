import React from "react";
import Logo from "../../assets/img/logo.png";

const Login = (props) => {
    return (
        <>
            <div className="brand-position">
                <a href="/">
                    {" "}
                    <span> {"<"} Go back to</span> <img src={Logo} />
                </a>
            </div>
            {props.children}
        </>
    );
};

export default Login;
