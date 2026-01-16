import Logo from "@/components/layouts/Logo";
import React from "react";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-white">
      <h2 className="text-5xl font-bold animate-pulse flex items-center">
        Loading...{" "}
        <span className="loading loading-spinner loading-xl"></span>
      </h2>
    </div>
  );
};

export default Loading;
