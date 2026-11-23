import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";
import UserContext from "../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isAuthenticated, setIsAuthenticated } = useContext(UserContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://hms-mern-cl5u.vercel.app/api/v1/user/login",
        { email, password },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      toast.success(res.data.message);
      setIsAuthenticated(true);
      setEmail("");
      setPassword("");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <section className="login-section">
      <form onSubmit={handleLogin}>
        <h1>Sign In</h1>
        <p>Please Login To Continue</p>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
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
