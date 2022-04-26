import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-20 items-center justify-center">
        <h1 className="text-3xl font-bold">GivMoney</h1>
        <ul className="text-lg flex gap-10 leading-loose">
          <li>Features</li>
          <li>Resources</li>
          <li>Contact Us</li>
          <li>Career</li>
        </ul>
      </div>

      <div className="flex gap-10 text-lg font-semibold items-center">
        <button className="text-white">Login</button>
        <button className="text-blue-500 text-base bg-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-bg-blue-300 font-medium rounded-lg  w-full px-5 py-2.5 text-center flex items-center gap-x-2">
          Sign Up
          <span>
            <img src="/assets/icons/arrow.png" alt="" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
