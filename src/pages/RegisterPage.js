import React from "react";
import RegisterImg from '../assets/img/register_img.png'
import RegisterForm from "../components/RegisterPage/RegisterForm";

const LoginPage = () => {
    return (
        <div className="login">
            <RegisterForm />

            <section className="login-image">
                <img src={RegisterImg} />
            </section>
            
        </div>
    );
};

export default LoginPage;
