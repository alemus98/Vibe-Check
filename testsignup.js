import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import homePage from "./pages/Home";
// import signUp from "./pages/Signup";

function App() {
    return (
<div className="overlay">
    <form>
        <div className="con">
            <header className="head-form">
                <h2>Sign Up</h2>
                <p>sign up here using your username and password</p>
            </header>
            <br></br>
            <div className="field-set">
                <span className="input-item">
                    <i className="fa fa-user-circle"></i>
                </span>
                <input className="form-input" id="text-input" type="text" placeholder="Email" required></input>

                    <br></br>
                    <span className="input-item">
                        <i className="fa fa-key"></i>
                    </span>
                    <input className="form-input" type="text-input" placeholder="Username" id="usename" name="username" required></input>

                    <br></br>
                    <span className="input-item">
                        <i className="fa fa-key"></i>
                    </span>
                    <input className="form-input" type="password" placeholder="Password" id="pwd" name="password" required></input>

                    {/* <span>
                        <i className="fa fa-eye" aria-hidden="true" type="button" id="eye"></i>
                    </span> */}

                    <br></br>

                    <button className="log-in"> Sign Up</button>
            </div>
            <div className="other">
                <button className="btn submits sign-up">Login
                <i className="fa fa-user-plus" aria-hidden="true"></i>
                </button>

            </div>
            
        </div>
    </form>
</div>

    )
}

export default App;
