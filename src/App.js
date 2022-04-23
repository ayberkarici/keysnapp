import "./assets/scss/App.scss";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/RegisterPage";

function App() {
    return (
        <Router>
            <div className="App">
                {window.location.pathname !== '/login' && window.location.pathname !== '/register' ? <Header /> : null}
                
                <Routes>
                    <Route
                        path="/"
                        element={<LandingPage />}
                    />
                    <Route
                        path="/login"
                        element={<LoginPage />}
                    />
                    <Route
                        path="/register"
                        element={<Register />}
                    />
                    {/*<Route path="/movies" element={<Movies />}>
                        <Route path=":id" element={<MovieDetail />} />
                    </Route>*/}
                </Routes>
                {window.location.pathname !== '/login' && window.location.pathname !== '/register' ? <Footer /> : null}
                
            </div>
        </Router>
    );
}

export default App;
