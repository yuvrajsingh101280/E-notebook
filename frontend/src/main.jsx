import React from "react"; // Add this line
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MyState from "./context/data/MyState.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Signup from "./pages/signup/Signup.jsx";
import Login from "./pages/login/Login.jsx";
import AddNote from "./pages/addNote/AddNote.jsx";
import UpdateNote from "./pages/updateNote/UpdateNote.jsx";
import Profile from "./pages/profile/Profile.jsx";
import NoPage from "./pages/noPage/NoPage.jsx";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup", // Fixed typo: changed '/singup' to '/signup'
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/addnote",
    element: (
      <ProtectedRoute>
        <AddNote />,
      </ProtectedRoute>
    ),
  },
  {
    path: "/updatenote/:id",
    element: (
      <ProtectedRoute>
        <UpdateNote />,
      </ProtectedRoute>
    ),
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    ),
  },
  {
    path: "/*",
    element: <NoPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <MyState>
    <StrictMode>
      <RouterProvider router={router} />
      <Toaster />
    </StrictMode>
  </MyState>
);
