import * as React from "react";
import { useAuth } from "../../context/AuthContext";

import help from "../Assets/img/help.png";
import name_eld from "../Assets/img/name_eld.png";

import "../../components/Login/Auth.css";

export default function Auth() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    emailError,
    passwordError,
  } = useAuth();

  return (
    <div className="form_container">
      <img className="logo" src={name_eld} alt="photo" />
      <form action="./index.html" className="form_box">
        <input
          className="login"
          type="text"
          placeholder="login"
          id="email"
          label="Email Адрес"
          name="email"
          autoComplete="email"
          helperText={emailError}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className="pass"
          type="password"
          placeholder="password"
          name="password"
          label="Пароль"
          id="password"
          autoComplete="current-password"
          helperText={passwordError}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          className="btn_lg"
          value="login"
          type="batton"
          onClick={handleLogin}
        >
          Login
        </button>
        <div className="message">
          <a href="#" className="forget">
            Forgor password
            <img className="help" src={help} alt="" />
          </a>
        </div>
      </form>
    </div>
  );
}
