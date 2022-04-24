import React from "react";
import SideImg from '../assets/img/new_pass.png';
import NewPassForm from '../components/NewPassPage/NewPassForm';

const ForgotPasswordPage = () => {
    return (
        <div className="login">
            <NewPassForm />
            <section className="login-image">
                 <img src={SideImg} />
            </section>
        </div>
    );
};

export default ForgotPasswordPage;
