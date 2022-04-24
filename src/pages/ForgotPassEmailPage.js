import React from "react";
import SideImg from '../assets/img/forgot_pass.png';
import ForgotPassEmailForm from '../components/ForgotPassEmailPage/ForgotPassEmailForm';

const ForgotPasswordPage = () => {
    return (
        <div className="login">
            <ForgotPassEmailForm />
            <section className="login-image">
                 <img src={SideImg} />
            </section>
        </div>
    );
};

export default ForgotPasswordPage;
