import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";

const MainRoutes = () => {
  const ADMIN = "abdu@gmail.com";
  const { user } = useAuth();
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/auth",
      element: <AuthPage />,
      id: 2,
    },
  ];
  const PRIVATE_ROUTES = [
    {
      link: "/admin",
      element: <AuthPage />,
      id: 1,
    },
  ];
  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} />
        ))}

        {user
          ? PRIVATE_ROUTES.map((item) => (
              <Route
                path={item.link}
                element={
                  user.email === ADMIN ? (
                    item.element
                  ) : (
                    <Navigate replace to="*" />
                  )
                }
              />
            ))
          : null}
      </Routes>
    </>
  );
};

export default MainRoutes;
