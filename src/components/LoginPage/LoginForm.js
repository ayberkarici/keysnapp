import React from "react";
import Operations from "../OperationsTemplate/Operations";

const LoginForm = () => {
    return (
        <Operations>
            <section className="login-field">
                <form>
                    <div className="login-form">
                        <div className="input">
                            <label htmlFor="mail" >E-mail</label>
                            <input
                                id="mail"
                                type="email"
                                placeholder="E-mail"
                            />
                            {/*<p className="info inputAlert">Lütfen emailini gir.</p> */}
                        </div>
                        <div className="input">
                            <label htmlFor="password">Şifre</label>
                            <input
                                id="password"
                                type="password"
                                placeholder="******************"
                            />
                            {/*<p className="info">Lütfen şifreni gir.</p>*/}
                        </div>
                        <div className="login-operations">
                            <button className="login-button" type="button">
                                Giriş yap
                            </button>
                            <a href="#">Forgot Password?</a>
                        </div>
                    </div>
                </form>
            </section>
        </Operations>
    );
};

export default LoginForm;
