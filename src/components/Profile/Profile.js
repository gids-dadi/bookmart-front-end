import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Profile = () => {
  // const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);
  // const { name, email, role } = user;

  return (
    <>
      {user ? (
        <div>
          <h2>Profile Details</h2>
          <section>
            <h4>Name</h4>
            <p>{user.name}</p>
          </section>
          <section>
            <h4>Email</h4>
            <p>{user.email}</p>
          </section>
        </div>
      ) : (
        <h4>
          You have been logged out. Please Login{" "}
          <Link to="/login">
            <button>Login</button>
          </Link>
        </h4>
      )}
    </>
  );
};

export default Profile;
