import React from "react";
import SideImg from '../assets/img/forgot_pass.png';
import ForgotPasswordForm from '../components/ForgotPassPage/ForgotPassForm';

const ForgotPasswordPage = () => {
    return (
        <div className="login">
            <ForgotPasswordForm />
            <section className="login-image">
                 <img src={SideImg} />
            </section>
        </div>
    );
};

export default ForgotPasswordPage;
