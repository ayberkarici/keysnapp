import React from "react";
import Operations from "../OperationsTemplate/Operations";

const LoginForm = () => {
    return (
        <Operations>
            <section className="login-field">
                <form>
                    <div className="login-form">
                        <div className="input">
                            <label htmlFor="password">Kurtarma kodum</label>
                            <input
                                id="email-recovery"
                                type="text"
                                placeholder="Örn: 121212"
                            />
                            {/*<p className="info">Lütfen şifreni gir.</p>*/}
                        </div>
                        <div className="login-operations">
                            <button className="login-button" type="button">
                                Yeni şifrem
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
