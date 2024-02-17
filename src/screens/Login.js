import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

function Login() {
  const navigate = useNavigate();
  const login = () => {
    localStorage.setItem("token", "some_secret_token");
    navigate("/dashboard");
  };

  return (
    <div className="login_container">
      <div className="left_side">
        <img
          src="https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="left_image"
          className="image"
        />
        <div className="auth_text">
          <p>
            Authentication is the gatekeeper of digital security, standing as
            the frontline defense against unauthorized access. It verifies user
            identity through methods like passwords or biometrics, ensuring only
            authorized individuals gain entry. By safeguarding data and
            resources, authentication plays a vital role in preserving
            confidentiality and integrity online. Its importance cannot be
            overstated, as it forms the bedrock of trust in digital
            interactions, protecting against cyber threats and maintaining a
            secure environment.
          </p>
        </div>
      </div>
      <div className="right_side">
        <h1 className="login_text">Login</h1>
        <div className="input_wrapper">
          <input placeholder="Enter email" className="input" />
          <input placeholder="Enter password" className="input" />
        </div>
        <button
          className="button"
          onClick={() => {
            login();
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
