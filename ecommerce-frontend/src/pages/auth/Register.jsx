import { useState } from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <Layout>
      <div className="container-fluid register-page">
        <div className="row min-vh-100 align-items-center">

          <div className="col-lg-6 d-none d-lg-flex register-left">
            <div>
              <h1 className="fw-bold display-4">
                Welcome To ShopKart
              </h1>

              <p className="fs-5 mt-3">
                Create your account and enjoy shopping,
                deals, offers and fast delivery.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="register-card">

              <h2 className="text-center mb-4">
                Create Account
              </h2>

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="form-control"
                    value={user.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="form-control"
                    value={user.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                    value={user.password}
                    onChange={handleChange}
                  />
                </div>

                <button
                  className="btn btn-primary w-100 py-2"
                  type="submit"
                >
                  Create Account
                </button>

                <p className="text-center mt-4">
                  Already have an account?
                  <Link to="/login"> Login</Link>
                </p>

              </form>

            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}

export default Register;