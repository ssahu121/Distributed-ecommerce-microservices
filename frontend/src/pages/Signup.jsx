import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaGithub,
} from "react-icons/fa";
import "./Auth.css";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Backend API yaha connect karenge
    alert("Account Created Successfully!");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        {/* LEFT SIDE */}
        <div className="auth-left">
          <h1>Join ShopEase 🛍️</h1>

          <p>
            Create your account to enjoy exclusive offers,
            secure payments and fast delivery.
          </p>

          <img
            src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
            alt="Signup"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="auth-right">

          <h2>Create Account</h2>

          <p className="subtitle">
            Fill in your details below
          </p>

          <form onSubmit={handleSubmit}>

            {/* Full Name */}
            <div className="input-box">
              <FaUser className="input-icon" />

              <input
                type="text"
                placeholder="Full Name"
                required
              />
            </div>

            {/* Email */}
            <div className="input-box">
              <FaEnvelope className="input-icon" />

              <input
                type="email"
                placeholder="Email Address"
                required
              />
            </div>

            {/* Phone */}
            <div className="input-box">
              <FaPhone className="input-icon" />

              <input
                type="tel"
                placeholder="Phone Number"
                required
              />
            </div>

            {/* Password */}
            <div className="input-box">
              <FaLock className="input-icon" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
              />

              <span
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* Confirm Password */}
            <div className="input-box">
              <FaLock className="input-icon" />

              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                required
              />

              <span
                className="eye-icon"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* Terms */}
            <div className="auth-options">
              <label>
                <input type="checkbox" required />
                I agree to Terms & Conditions
              </label>
            </div>

            {/* Signup Button */}
            <button className="auth-btn">
              Create Account
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

          {/* GitHub */}
          <button className="social-btn github">
            <FaGithub />
            Continue with Github
          </button>

          {/* Login Link */}
          <p className="bottom-text">
            Already have an account?
            <Link to="/login"> Login</Link>
          </p>

        </div>

      </div>
    </div>
  );
}

export default Signup;