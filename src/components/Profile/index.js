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
        <section>
          <h2>Profile Details</h2>
          <div>
            <h4>Name</h4>
            <p>{user.userInfo.name}</p>
          </div>
          <div>
            <h4>Email</h4>
            <p>{user.userInfo.email}</p>
          </div>

          <div>
            <h4>Role</h4>
            <p>{user.userInfo.role}</p>
          </div>
        </section>
      ) : (
        <h4>You have been logged out. Please Login</h4>
      )}
    </>
  );
}

// export default Profile;
