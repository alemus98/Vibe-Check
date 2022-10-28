import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({
      email: "",
      password: "",
    });
  };

  // TODO: re-label w/new classes/css
  return (
    <div className="overlay">
      <form onSubmit={handleFormSubmit}>
        <div className="con">
          <header className="head-form">
            <h2>Login</h2>
            <p>Login here using your username and password</p>
          </header>
          <br></br>
          <div className="field-set">
            <span className="input-item">
              <i className="fa fa-user-circle"></i>
            </span>

            <br></br>
            <span className="input-item">
              <i className="fa fa-key"></i>
            </span>
            <input
              value={formState.email}
              className="form-input"
              id="text-input"
              type="text"
              onChange={handleChange}
              name="email"
              placeholder="Email"
              required
            ></input>

            <br></br>
            <span className="input-item">
              <i className="fa fa-key"></i>
            </span>
            <input
              value={formState.password}
              className="form-input"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              id="pwd"
              name="password"
              required
            ></input>

            <br></br>

            {/* <button type="submit" className="log-in"> Sign Up</button> */}
          </div>
          <div className="other">
            <button type="submit" className="btn submits sign-up">
              Login
              <i className="fa fa-user-plus" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
