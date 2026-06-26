import React, { useState } from "react";
import "./Auth.css";

function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Signup Successful");
  };

  return (
    <div className="auth-wrapper">
      <form className="auth-box" onSubmit={handleSubmit}>
        <h2>Signup</h2>

        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <button type="submit">Signup</button>

        <p>
          Already have account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
}

export default Signup;