import { useState } from "react";
import { assets } from "../assets/assets";

const Sidebar = () => {
  const [expand, setExpand] = useState(true);
  return (
    <div
      className={`flex flex-col justify-between bg-[#212327] pt-7 transition-all z-50 max-md:absolute max-md:h-screen ${
        expand ? "p-4 w-64" : "md:w-20 w-0 max-md:overflow-hidden"
      }`}
    >
      <div>
        <div
          onClick={() => (expand ? setExpand(false) : setExpand(true))}
          className={`flex ${
            expand
              ? "flex-row gap-10 justify-end"
              : "flex-col items-center gap-8"
          }`}
        >
          <div className="group relative flex items-end justify-end hover:bg-gray-500/20 transition-all duration-300 h-9 w-9 aspect-square rounded-lg cursor-pointer">
            <img src={assets.menu_icon} alt="" className="md:hidden" />
            <img
              src={expand ? assets.sidebar_close_icon : assets.sidebar_icon}
              alt=""
              className="hidden md:block w-7"
            />
            <div
              className={`absolute w-max ${
                expand ? "left-1/2 -translate-x-1/2 top-12" : "-top-12 left-0"
              } opacity-0 group-hover:opacity-100 transition bg-black text-white text-sm px-3 py-2 rounded-lg shadow-lg pointer-events-none`}
            >
              {expand ? "Close sidebar" : "Open sidebar"}
              <div
                className={`w-3 h-3 absolute bg-black rotate-45 ${
                  expand
                    ? "left-1/2 -top-1.5 -translate-x-1/2"
                    : "left-4 -bottom-1.5"
                }`}
              ></div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4 p-2 text-white/80 hover:bg-white/10 rounded-lg text-sm group cursor-pointer border-4 border-indigo-200 border-x-indigo-500 ">
          <p className="group-hover:max-w-5/6 truncate ">Categories</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
