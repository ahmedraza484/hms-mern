import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [gender, setGender] = useState("");
  const handleRegister = (e)=>{
    e.preventDefault()
  }
  return (
    <section className="register-section">
      <form onSubmit={handleRegister}>
        <h1>Sign Up</h1>
        <p>Please Sign Up To Continue</p>
        <div className="input-group">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="input-group">
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Phone" />
        </div>
        <div className="input-group">
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input type="text" placeholder="passsword" />
        </div>

        <button className="btn">Register</button>
        <div className="register-row">
          <p>Already Registered?</p>
          <Link to={"/login"}>Login</Link>
        </div>
      </form>
    </section>
  );
};

export default Register;
