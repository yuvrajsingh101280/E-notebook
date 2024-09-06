import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce200"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce400"></div>
      </div>
    </div>
  );
};

export default Loader;
