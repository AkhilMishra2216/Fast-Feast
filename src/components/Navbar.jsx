import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <nav className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 px-6 py-6 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl shadow-lg mb-10">
      <div>
        <h3 className="text-xs text-gray-600 font-light">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">
          Fast Feast 🍽️
        </h1>
      </div>
      <div className="w-full lg:w-auto mt-4 lg:mt-0">
        <input
          type="search"
          placeholder="Search delicious meals..."
          autoComplete="off"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="w-full lg:w-[25vw] px-5 py-3 rounded-lg bg-white border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 ease-in-out"
        />
      </div>
    </nav>
  );
};

export default Navbar;
