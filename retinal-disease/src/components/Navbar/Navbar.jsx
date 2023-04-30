import React from "react";

function Navbar() {
  return (
    <div className="bg-black bg-opacity-70 backdrop-blur-sm sticky top-0 z-50 text-white">
      <div className="flex justify-between px-16 py-4 ">
        <div>
          <a href="/">
            <h1 className="text-lg font-semibold">Retinal Disease</h1>
          </a>
        </div>
        <div className="flex gap-x-20 text-lg">
          <a href="/">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
