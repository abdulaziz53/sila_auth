import React from "react";
import Auth from "../components/Login/Auth";
import { useAuth } from "../context/AuthContext";
import HomePage from "./HomePage";

const AuthPage = () => {
  const { user } = useAuth();
  return <>{user ? <HomePage /> : <Auth />}</>;
};

export default AuthPage;
