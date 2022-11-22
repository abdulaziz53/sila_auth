import React from "react";
import { useAuth } from "../../context/AuthContext";

const Home = () => {
  const {
    user: { email },
    handleLogout,
  } = useAuth();
  console.log(email);
  return (
    <div>
      <div>{email ? email : "you didn't signed up"}</div>
      <div>{email && <div onClick={handleLogout}>logout</div>}</div>
    </div>
  );
};

export default Home;
