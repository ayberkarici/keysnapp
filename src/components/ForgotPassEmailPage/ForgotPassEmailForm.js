import React from "react";
import Operations from "../OperationsTemplate/Operations";

const LoginForm = () => {
    return (
        <Operations>
            <section className="login-field">
                <form>
                    <div className="login-form">
                        <div className="input">
                            <label htmlFor="password">Email</label>
                            <input
                                id="email-will-recover"
                                type="email"
                                placeholder="ricksanchez@wubbalubba.com"
                            />
                            {/*<p className="info">Lütfen emailini gir.</p>*/}
                        </div>
                        <div className="login-operations">
                            <button className="login-button" type="button">
                                Kod gönder
                            </button>
                            <a href="/login">Şifremi hatırladım</a>
                        </div>
                    </div>
                </form>
            </section>
        </Operations>
    );
};

export default LoginForm;
