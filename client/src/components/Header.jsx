import React from "react";
import logo2 from "../assets/Logo2.png";

const Header = () => {
  return (
    <div className=" bg-transparent w-screen lg:w-full flex flex-col border border-slate-600">
      <div className="flex justify-center">
        <img src={logo2} alt="" className="w-10 sm:hidden" />
      </div>
      <p className="hidden font-semibold lg:block text-xl pl-6 pt-2">Home</p>
      <div className=" flex list-none justify-evenly pt-6 text-lg pb-3">
        <li>Following</li>
        <li>For you</li>
      </div>
    </div>
  );
};

export default Header;
