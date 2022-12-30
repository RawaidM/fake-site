import React from "react";
import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <main className="bg-no-repeat bg-[45%] sm:bg-bottom sm:bg-fixed sm:bg-cover bg-[url('https://images.unsplash.com/photo-1624355511224-14da0f11e256?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80%27')] py-16 sm:p-28 tracking-wider">
      <div className="flex flex-col justify-center items-center">
        <p className="text-[#f3f3f3] font-bold text-3xl mb-2 sm:text-5xl sm:mb-5">
          Professionals
        </p>
        <span className="font-semibold text-lg mb-4 sm:text-2xl sm:mb-7 before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange-700 relative inline-block">
          <span className="relative text-white">For Your Requests</span>
        </span>

        <div className="flex">
          <input
            type="text"
            className="rounded-l w-72 p-1 pl-3 sm:w-96 sm:p-2 sm:pl-5 focus-visible:outline-none"
            placeholder="Example: Repair Phone"
          />
          <button className="text-black bg-white rounded-r p-1">
            <BsSearch size={20} className="" />
          </button>
        </div>
      </div>
    </main>
  );
};

export default Search;
