import React from "react";
export default function Navbar() {
  return (
    <nav className="bg-white text-black p-9 flex flex-row">
      <img src="/logo.jpg" alt="logo" width={100} height={150} />
      <div className="b-5 flex flex-cols gap-5">
        <input
          className=" w-[400px] border shadow rounded-2xl p-2.5 m-3 pr-4.5 text-pointer"
          placeholder="Search for products brands etc"
          type="text"
        />
        <button className=" bg-blue-500 text-white border hover:bg-amber-300 shadow btton rounded-2xl p-2.5 m-2.5">
          Search
        </button>
      </div>

      <div className="flex flex-row gap-10 pr-9 pl-60 text-2xl">
        <a className="text-black hover:text-blue-600 ">Home</a>
        <a className="text-black hover:text-blue-600">About</a>
        <a className="text-black hover:text-blue-600">Services</a>
        <a href="/login" className="text-black hover:text-blue-600">
          Login
        </a>
      </div>
    </nav>
  );
}
