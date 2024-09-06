import React from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (token) {
    return children;
  } else {
    navigate("/login");
  }
};

export default ProtectedRoute;
