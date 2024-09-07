import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  // states

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const loginHandle = async () => {
    const res = await fetch(
      "https://e-notebook-tler.onrender.com/api/auth/login",
      {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    const loginData = await res.json();
    console.log(loginData);
    console.log(loginData.token);

    // condition

    if (loginData.error) {
      toast.error(loginData.error);
    } else {
      navigate("/");
      toast.success(loginData.success);
      localStorage.setItem("token", loginData.token);
    }
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex justify-center flex-col gap-3 items-center h-screen">
      {/* main div */}

      <div className="image mb-3">
        <img src="logo.png" alt="" />
      </div>

      <div className="bg-[#e3f8da] shadow-md px-10 py-10 rounded-xl">
        {/* Top Heading */}

        <div className="">
          <h1 className="text-center text-black mb-4 font-bold text-2xl">
            Login
          </h1>
        </div>

        {/* Input 1 Email*/}

        <div>
          {" "}
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="bg-transparent border border-[#9BEC00] mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-black outline-none placeholder:text-black"
          />
        </div>

        {/* input2 Password */}

        <div>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type={showPassword ? "text" : "password"}
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
            onClick={loginHandle}
            className="bg-[#059212] w-full text-white font-bold  px-2 py-2 rounded-lg mt-1"
          >
            Login
          </button>
        </div>

        {/* Link for signup */}

        <div>
          <h2 className="text-black ">
            Don't have an account?{" "}
            <Link to={"/signup"} className="text-blue-500 fonr-bold">
              Signup
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Login;
