// import React from "react";
// import { useNavigate } from "react-router-dom";

// const ProtectedRoute = ({ children }) => {
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");
//   if (token) {
//     return children;
//   } else {
//     navigate("/login");
//   }
// };

// export default ProtectedRoute;
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]); // Dependencies to re-run the effect if token or navigate changes

  // If token is present, render the children, otherwise, this will immediately redirect to /login
  return token ? children : null;
};

export default ProtectedRoute;
