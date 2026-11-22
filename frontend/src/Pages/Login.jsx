import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (e)=>{
    e.preventDefault()
  }
  return (
    <section className="login-section">
      <form onSubmit={handleLogin}>
        <h1>Sign In</h1>
        <p>Please Login To Continue</p>
        <input type="text" placeholder="Email"/>
        <input type="text" placeholder="password" />
        <button className="btn">Login</button>
        <div className="register-row">
          <p>Not Registered?</p>
          <Link to={"/register"}>Register Now</Link>
        </div>
      </form>
    </section>
  );
};

export default Login;
