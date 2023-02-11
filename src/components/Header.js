import React from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-screen h-10vh min-h-10vh flex items-center justify-around text-white bg-dk">
      <div className="w-10 h-5 flex items-center justify-center text-white font-semibold bg-slate-600 cursor-pointer">
        <Link to={"/"}>npm</Link>
      </div>
      <div
        className="flex items-center justify-center text-white"
        style={{ fontSize: "calc(10px + 2vmin)" }}
      >
        <Link to={"/"}>
          <h2 className="text-white font-semibold tracking-wide">
            Favourite Node Module
          </h2>
        </Link>
      </div>
      <div className="w-5 h-5 flex items-center justify-center text-white font-semibold cursor-pointer">
        <MdOutlineDarkMode />
      </div>
    </div>
  );
};

export default Header;
