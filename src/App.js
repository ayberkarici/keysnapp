import "./assets/scss/App.scss";
import React from "react";
import {
    BrowserRouter,
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ForgotPassEmailPage from "./pages/ForgotPassEmailPage";
import NewPassPage from "./pages/NewPassPage";
import MathEnginePage from "./pages/MathEnginePage";

function App() {
    const notAllowedPaths = [
        "/login",
        "/register",
        "/recovery",
        "/email-support",
        "/new-password"
    ];

    return (
        <BrowserRouter>
            <div className="App">
                <Header
                    pathName={window.location.pathname}
                    pathList={notAllowedPaths}
                />
                <Routes>
                    <Route path="/" exact element={<LandingPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/recovery" element={<ForgotPasswordPage />} />
                    <Route path="/email-support" element={<ForgotPassEmailPage />} />
                    <Route path="/new-password" element={<NewPassPage />} />
                    <Route path="/math-engine" element={<MathEnginePage />} />
                </Routes>
                <Footer
                    pathName={window.location.pathname}
                    pathList={notAllowedPaths}
                />
            </div>
        </BrowserRouter>
    );
}

export default App;
