"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { push } = useRouter();

  const handleClick = () => {
    push("#footer");
  };
  return (
    <div className="navbar flex justify-between items-center px-4 lg:px-20 py-3 bg-gray-800 shadow-lg text-white z-4">
      <div className="navbar-start flex items-center">
        <a href="/" className="text-lg font-bold">
          John Booker
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-4">
          <li>
            <a>Model</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          className="btn bg-transparent transition duration-3000 text-white hover:text-black rounded-full px-4 py-2 border-none disabled"
          onClick={handleClick}
        >
          Contact Model
        </a>
      </div>
    </div>
  );
};

export default Navbar;
