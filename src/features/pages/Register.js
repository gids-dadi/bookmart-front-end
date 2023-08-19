import React from "react";
import { FaUser } from "react-icons/fa";
import { registerUser } from "../../features/auth/authService";
import { reset } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = formData;

  useEffect(() => {
    if (isError) {
      console.log("Error occured registering user");
    }

    if (isSuccess || user) {
      console.log("Profile created successfuly");
      navigate("/login");
    }
    dispatch(reset());
  }, [user, isLoading, isSuccess, navigate, isError, dispatch, message]);

  const handleInputChange = (e) => {
    setFormData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      // const email = email.toLowerCase();

      const userData = {
        name,
        email,
        password,
      };

      dispatch(registerUser(userData));
    }
  };

  return (
    <main className="form-wrap">
      <section className="heading">
        <h1>
          <FaUser /> Register{" "}
        </h1>
        <p>Please fill the form to create an account</p>
      </section>

      <section className="form form-group">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            placeholder="Enter your name"
            onChange={handleInputChange}
          />

          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            placeholder="Enter your Email"
            required
            onChange={handleInputChange}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            placeholder="Enter password"
            required
            onChange={handleInputChange}
          />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm password"
            value={confirmPassword}
            required
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

export default Register;
