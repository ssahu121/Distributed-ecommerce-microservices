import React, { useState } from "react";
import "./Auth.css";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login Successful");
  };

  return (
    <div className="auth-wrapper">
      <form className="auth-box" onSubmit={handleSubmit}>
        <h2>Login</h2>

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

        <button type="submit">Login</button>

        <p>
          New user? <a href="/signup">Create account</a>
        </p>
      </form>
    </div>
  );
}

export default Login;