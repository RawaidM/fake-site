import React from "react";
import { Fade as Hamburger } from "hamburger-react";
import { useState } from "react";
import Logo from "../images/P.png";
import { LinkData } from "./LinkData";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  //Get Links
  const listLinks = LinkData.map((link) => {
    return (
      <li key={link.text}>
        <Link
          to={`${link.href}`}
          className="px-5 py-2 block font-semibold text-end hover:text-blue-700 active:bg-[#c2c2c2]"
        >
          {link.text}
        </Link>
      </li>
    );
  });

  return (
    <header className="flex flex-wrap sticky top-0 left-0 z-30 bg-white w-full justify-between items-center shadow-lg max-w-full px-[2%] py-[1%]">
      {/*Logo*/}
      <a
        href="/#"
        className="flex items-center font-serif font-normal text-xl italic"
      >
        <img
          src={Logo}
          alt="header-logo"
          className="h-10 sm:h-12"
          id="header-logo"
        />
        <span className="-ml-6 mt-3 ">rofessionals for you</span>
      </a>

      {/*Hamburger*/}
      <div className="sm:hidden" id="hamburger">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={20}
          color="black"
          rounded
          direction="left"
        />
      </div>

      {/*Links*/}
      <nav
        className={`${
          isOpen
            ? "block h-full opacity-100 scale-100"
            : "h-0 opacity-0 scale-0 sm:opacity-100 sm:scale-100 sm:h-full"
        } sm:flex sm:w-auto w-full transition-all`}
      >
        <ul className="sm:flex text-base text-black ">{listLinks}</ul>
      </nav>
    </header>
  );
};

export default Header;
