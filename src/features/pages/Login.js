import React from "react";
import { useNavigate } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import { loginUser } from "../../features/auth/authService";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { reset } from "../auth/authSlice";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isError, IsSuccess, user } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  useEffect(() => {
    if (isError) {
      toast.error("An error ocured logging in user");
    }

    if (IsSuccess || user) {
      toast.success("Login successful");
      navigate("/profile");
    }
    dispatch(reset());
  }, [isError, IsSuccess, user, dispatch, navigate]);

  const handleInputChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    if (!email && !password) {
      toast.warning("Enter all fields to login");
    } else {
      dispatch(loginUser(userData));
    }
  };

  return (
    <main className="form-wrap">
      <section className="heading">
        <h2>
          <FaSignInAlt /> Login{" "}
        </h2>
        <p>Login and start shopping exciting books</p>
      </section>

      <section className="form form-group">
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="Enter your Email"
            autoComplete="off"
            onChange={handleInputChange}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="Enter password"
            autoComplete="off"
            onChange={handleInputChange}
          />

          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </section>
    </main>
  );
}

export default Login;
