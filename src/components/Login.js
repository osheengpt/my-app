import React from "react";
import { useNavigate } from "react-router-dom";
import { USER_TYPE } from "../utils/consts";
import { useAuthContext, useErrorHandler } from "../hooks";
import "./Login.css";

const Login = () => {
  const [userType, setUserType] = React.useState(USER_TYPE.FREELANCER);
  const [userEmail, setUserEmail] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");
  const { isValidUser } = useAuthContext();
  const { error, setError, showError } = useErrorHandler();
  const navigate = useNavigate();
  const isFreelancer = userType === USER_TYPE.FREELANCER;

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: userEmail,
      password: userPassword,
      type: userType,
    };
    if (isValidUser(user)) {
      navigate("/");
    } else {
      setUserEmail("");
      setUserPassword("");
      setError("Wrong credentials!");
    }
  };

  return (
    <div className="login-container">
      {error && showError()}
      <h2>Login</h2>
      <div className="button-container">
        <button
          className={isFreelancer ? "active" : ""}
          onClick={() => setUserType(USER_TYPE.FREELANCER)}
        >
          Login as FreeLancer
        </button>
        <button
          className={isFreelancer ? "" : "active"}
          onClick={() => setUserType(USER_TYPE.EMPLOYER)}
        >
          Login as Employer
        </button>
      </div>
      <form className="form">
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          required
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
