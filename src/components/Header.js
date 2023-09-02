import React from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../features/auth/authService";
import { reset } from "../features/auth/authSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const onLogout = () => {
    dispatch(logoutUser());
    if (!user) {
      navigate("/login");
    }
    dispatch(reset());
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <h1>BookMart</h1>
        </Link>
      </div>

      {user ? (
        <button className="btn" onClick={onLogout}>
          <FaSignOutAlt /> Logout
        </button>
      ) : (
        <ul>
          <li>
            <Link to="/login">
              <FaSignInAlt /> Login
            </Link>
          </li>

          <li>
            <Link to="/register">
              <FaUser /> Register
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
