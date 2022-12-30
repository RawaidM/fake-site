import React from "react";

const PhoneAd = () => {
  return (
    <div className="flex-row justify-center items-center bg-gray-200 shadow-xl py-2 hidden sm:flex">
      <p className="font-serif font-normal text-lg tracking-wide text-gray-800">
        We're also available on mobile now!&nbsp;
        <a href="/#" className="hover:text-blue-500">
          click for more details...
        </a>
      </p>
    </div>
  );
};

export default PhoneAd;
