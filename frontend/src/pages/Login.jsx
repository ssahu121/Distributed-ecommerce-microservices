import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaGithub,
} from "react-icons/fa";
import "./Auth.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Backend API yaha connect karenge
    alert("Login Successfully!");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        {/* LEFT SIDE */}
        <div className="auth-left">
          <h1>Welcome Back 👋</h1>

          <p>
            Login to your ShopEase account and continue shopping with amazing
            offers, fast delivery and secure payments.
          </p>

          <img
            src="https://cdn-icons-png.flaticon.com/512/869/869636.png"
            alt="Shopping"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="auth-right">

          <h2>Login</h2>

          <p className="subtitle">
            Enter your email and password
          </p>

          <form onSubmit={handleSubmit}>

            {/* Email */}
            <div className="input-box">
              <FaEnvelope className="input-icon" />

              <input
                type="email"
                placeholder="Enter Email"
                required
              />
            </div>

            {/* Password */}
            <div className="input-box">

              <FaLock className="input-icon" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                required
              />

              <span
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>

            </div>

            {/* Remember */}
            <div className="auth-options">

              <label>
                <input type="checkbox" />
                Remember Me
              </label>

              <Link to="#">
                Forgot Password?
              </Link>

            </div>

            {/* Login Button */}
            <button className="auth-btn">
              Login
            </button>

          </form>

          {/* Divider */}

          <div className="divider">
            <span>OR</span>
          </div>

          {/* Google */}

          <button className="social-btn google">
            <FaGoogle />
            Continue with Google
          </button>

          {/* Github */}

          <button className="social-btn github">
            <FaGithub />
            Continue with Github
          </button>

          {/* Signup */}

          <p className="bottom-text">

            Don't have an account?

            <Link to="/signup">
              Signup
            </Link>

          </p>

        </div>

      </div>
    </div>
  );
}

export default Login;