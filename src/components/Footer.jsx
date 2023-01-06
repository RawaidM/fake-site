import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="absolute bottom-0 w-full h-24">
      <div className="bg-gray-800 h-24 flex flex-wrap justify-between items-center text-sm text-gray-200">
        <div className="flex flex-col justify-center items-center w-5/12">
          <span>By RawaidM</span>
        </div>

        <div className="flex flex-col w-5/12">
          <h1 className="text-gray-200 text-base mb-1 self-center">
            Follow us
          </h1>
          <div className="flex flex-row justify-center items-center text-white mt-2 gap-5">
            <a href="/#">
              <BsFacebook className="mr-2" size={20} />
            </a>
            <a href="/#">
              <BsInstagram className="mr-2" size={20} />
            </a>
            <a href="/#">
              <BsYoutube className="mr-2" size={20} />
            </a>
            <a href="/#">
              <BsTwitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
