import React from "react";
import Operations from "../OperationsTemplate/Operations";

const LoginForm = () => {
    return (
        <Operations>
            <section className="login-field">
                <form>
                    <div className="login-form">
                        <div className="input">
                            <label htmlFor="password">Yeni Şifrem</label>
                            <input
                                id="newPassword"
                                type="password"
                                placeholder="*********"
                            />
                            {/*<p className="info">Lütfen şifreni gir.</p>*/}
                        </div>
                        <div className="input">
                            <label htmlFor="password">Bir kere daha Şifrem</label>
                            <input
                                id="newPassword2"
                                type="password"
                                placeholder="*********"
                            />
                            {/*<p className="info">Lütfen şifreni gir.</p>*/}
                        </div>
                        <div className="login-operations">
                            <button className="login-button" type="button">
                                Giriş yap
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
