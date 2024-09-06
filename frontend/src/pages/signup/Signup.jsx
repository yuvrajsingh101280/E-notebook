import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
const Signup = () => {
  // states to store the userdetails

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  // function to handle signup

  const signupHandle = async () => {
    // console.log(name, email, password);

    // send the data through api

    const res = await fetch("http://localhost:4000/api/auth/signup", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const signupData = await res.json();
    console.log(signupData);

    // condition

    if (signupData.error) {
      toast.error(signupData.error);
    } else {
      toast.success(signupData.success);
      navigate("/login");
    }

    setName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex justify-center items-center h-screen">
      {/* main div */}

      <div className="bg-[#e3f8da] shadow-md px-10 py-10 rounded-xl">
        {/* Top Heading */}

        <div className="">
          <h1 className="text-center text-black mb-4 font-bold text-2xl">
            Signup
          </h1>
        </div>

        {/* Input 1 name*/}

        <div>
          {" "}
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            placeholder="Enter your name"
            className="bg-transparent border border-[#9BEC00] mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-black outline-none placeholder:text-black"
          />
        </div>
        {/* Input2 email */}
        <div>
          {" "}
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            name="email"
            placeholder="Enter your email"
            className="bg-transparent border border-[#9BEC00] mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-black outline-none placeholder:text-black"
          />
        </div>

        {/* input3 Password */}

        <div>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={!showPassword ? "password" : "text"}
            placeholder="password"
            className="bg-transparent border border-[#9BEC00] mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-black outline-none placeholder:text-black"
          />
        </div>
        {/* show or hide password */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            className="border border-[#9BEC00]"
          />
          <label
            for="checkbox"
            onClick={() => setShowPassword(!showPassword)}
            className=""
          >
            {showPassword ? "Hide Password" : "Show Password"}
          </label>
        </div>

        {/* Button for login */}

        <div className="flex justify-center mb-3">
          <button
            onClick={signupHandle}
            className="bg-[#9BEC00] hover:bg-[#059212] w-full text-white font-bold  px-2 py-2 rounded-lg mt-1"
          >
            Signup
          </button>
        </div>

        {/* Link for signup */}

        <div>
          <h2 className="text-black ">
            Have an account?{" "}
            <Link to={"/login"} className="text-blue-500 fonr-bold">
              Login
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Signup;
