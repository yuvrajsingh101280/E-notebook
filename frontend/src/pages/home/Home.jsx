import Layout from "../../components/layout/Layout.jsx";

import NoteCard from "../../components/noteCard/NoteCard";
import React from "react";
const Home = () => {
  const token = localStorage.getItem("token");
  return (
    <div>
      <Layout>
        {token ? (
          <NoteCard />
        ) : (
          <>
            <h1 className="flex justify-center items-center mx-auto mt-auto h-screen w-full font-bold text-xl">
              Please Login to see all notes
            </h1>
          </>
        )}
      </Layout>
    </div>
  );
};

export default Home;
