import React from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
const SideBar = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear("token");
    if (!token) {
      toast.success("Already logged out");
    } else {
      toast.success("Logged out successfully");
    }
    // navigate("/login");
    navigate("/");
  };
  const handleLogin = () => {
    if (token) {
      toast("Already Logged in!", {
        icon: "☺️",
      });
      return;
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="bg-gradient-to-t from-[#F3FF90] to-[#06ab15] h-screen border-r">
      {/* Top Image */}

      <div className="flex justify-center">
        <img src="logo.png" alt="" className="w-52 mt-10 mx-auto m-auto" />
      </div>
      {/* Menu list */}
      <ul className="flex  justify-end mt-20">
        {/* Main div */}

        <div className="">
          {/* Home page link */}
          <Link to={"/"}>
            <li className="flex space-x-6 mr-10 transition-all items-center h-16 hover:bg-[#F3FF90] w-52 p-2 rounded-xl ">
              <span>
                {/* Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40"
                  height="40"
                  viewBox="0 0 50 50"
                >
                  <path d="M 24.962891 1.0546875 A 1.0001 1.0001 0 0 0 24.384766 1.2636719 L 1.3847656 19.210938 A 1.0005659 1.0005659 0 0 0 2.6152344 20.789062 L 4 19.708984 L 4 46 A 1.0001 1.0001 0 0 0 5 47 L 18.832031 47 A 1.0001 1.0001 0 0 0 19.158203 47 L 30.832031 47 A 1.0001 1.0001 0 0 0 31.158203 47 L 45 47 A 1.0001 1.0001 0 0 0 46 46 L 46 19.708984 L 47.384766 20.789062 A 1.0005657 1.0005657 0 1 0 48.615234 19.210938 L 41 13.269531 L 41 6 L 35 6 L 35 8.5859375 L 25.615234 1.2636719 A 1.0001 1.0001 0 0 0 24.962891 1.0546875 z M 25 3.3222656 L 44 18.148438 L 44 45 L 32 45 L 32 26 L 18 26 L 18 45 L 6 45 L 6 18.148438 L 25 3.3222656 z M 37 8 L 39 8 L 39 11.708984 L 37 10.146484 L 37 8 z M 20 28 L 30 28 L 30 45 L 20 45 L 20 28 z"></path>
                </svg>
              </span>
              {/* TExt */}
              <span className="font-semibold text-xl">Home</span>
            </li>
          </Link>

          {/* Add note link */}
          <Link to={"/addnote"}>
            <li className="flex space-x-6 mr-10 transition-all items-center h-16 hover:bg-[#F3FF90] w-52 p-2 rounded-xl ">
              <span>
                {/* Icon */}
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </span>
              {/* TExt */}
              <span className="font-semibold text-xl">Add Note</span>
            </li>
          </Link>

          {/* Profile Page link */}
          <Link to={"/profile"}>
            <li className="flex space-x-6 mr-10 transition-all items-center h-16 hover:bg-[#F3FF90] w-52 p-2 rounded-xl ">
              <svg
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                  fill="#000000"
                />
              </svg>

              {/* TExt */}
              <span className="font-semibold text-xl">Profile</span>
            </li>
          </Link>

          {/* login */}

          <li
            onClick={handleLogin}
            className="cursor-pointer  flex space-x-6 mr-10 transition-all items-center h-16 hover:bg-[#F3FF90] w-52 p-2 rounded-xl "
          >
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 16.5V19C15 20.1046 14.1046 21 13 21H6C4.89543 21 4 20.1046 4 19V5C4 3.89543 4.89543 3 6 3H13C14.1046 3 15 3.89543 15 5V8.0625M20 12L9 12M9 12L11.5 14.5M9 12L11.5 9.5"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            {/* TExt */}
            <span className="font-semibold text-xl">Login</span>
          </li>

          {/* Logout */}

          <li
            onClick={logout}
            className="flex space-x-6 mr-10 cursor-pointer transition-all items-center h-16 hover:bg-[#F3FF90] w-52 p-2 rounded-xl "
          >
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 13v-2H9v-2h7V7l5 5-5 5z" fill="#000000" />
              <path
                d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4h-2v4H5V5h14v4h2V5c0-1.1-.9-2-2-2z"
                fill="#000000"
              />
            </svg>

            {/* TExt */}
            <span className="font-semibold text-xl">Logout</span>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default SideBar;
