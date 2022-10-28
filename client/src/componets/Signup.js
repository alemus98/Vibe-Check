import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import "../css/sign.css";
import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

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
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  // TODO: re-label class/css
  return (
    <div className="overlay">
      <form   onSubmit={handleFormSubmit}>
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
              value={formState.username}
              className="form-input"
              type="text-input"
              placeholder="Username"
              onChange={handleChange}
              id="username"
              name="username"
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
              Sign Up
              <i className="fa fa-user-plus" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
