import React, { useState } from "react";
import "./LoginSignup.css";

import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

export const LoginSignup = () => {
  const [action, setAction] = useState("Login");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Username" />
          </div>
        ) : (
          <div></div>
        )}
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      {action === "Login" && (
        <div className="forgot-password">
          Forgot Password? <span>Click Here</span>
        </div>
      )}
      <div className="demo-user">
        Sign in as <span>Demo User</span>
      </div>
      <div className="submit-container">
        <div
          className={action === "Login" ? "submit" : "submit gray"}
          onClick={() => setAction("Login")}
        >
          Login
        </div>
        <div
          className={action === "Sign up" ? "submit" : "submit gray"}
          onClick={() => setAction("Sign up")}
        >
          Sign up
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
