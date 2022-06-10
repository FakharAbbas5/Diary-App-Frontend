import React from "react";
import { Navigate } from "react-router";
import { USER_STORAGE_KEY } from "../../helpers/variables";

const PrivateRoute = ({ children }) => {
  const user = localStorage.getItem(USER_STORAGE_KEY);
  return user ? children : <Navigate to='/signin' />;
};

export default PrivateRoute;
