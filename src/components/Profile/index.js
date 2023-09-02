import React from "react";
import { useSelector } from "react-redux";

// const Profile = () => {
  export default function Profile() {
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
        <h4>You have been logged out. Please Login</h4>
      )}
    </>
  );
};

// export default Profile;
