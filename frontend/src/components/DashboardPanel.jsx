import React from "react";
import { assets } from "../assets/assets";

const DashboardPanel = () => {
  return (
    <div className="flex h-full w-60 p-6 bg-indigo-950">
      <div className="flex flex-row h-12 items-center w-full justify-start p-6">
        <img className="w-10 pr-1" src={assets.file_icon} alt="" />
        <h1 className="text-white text-3xl">Categories</h1>
      </div>
    </div>
  );
};

export default DashboardPanel;
