import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/MyContext";

const Profile = () => {
  const context = useContext(myContext);
  const { allNotes } = context;
  const [user, setUser] = useState([]);

  const userData = async () => {
    const res = await fetch(`http://localhost:4000/api/auth/getuser`, {
      method: "GET",

      headers: {
        "content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });

    const userData = await res.json();

    console.log(userData);

    setUser(userData);
  };
  useEffect(() => {
    userData();
  }, []);

  return (
    <Layout>
      <div className="mt-32 lg:mt-20 lg:mx-[20em]">
        <div className="flex items-center justify-center mb-2">
          <img className="w-20" src="profile.png" alt="profile image" />
        </div>
        <h1 className="text-center font-semibold">{user.name}</h1>
        <h1 className="text-center font-semibold">{user.email}</h1>
        <h1 className="text-center font-semibold">
          Total Notes created:{allNotes.length}
        </h1>
      </div>
    </Layout>
  );
};

export default Profile;
