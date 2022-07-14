import React, { useState } from "react";
import Images from "../images";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isActive, setIsActive] = useState("");

  return (
    <div className="flex shadow-lg justify-around py-3 font-extrabold font-monst opacity-95 tracking-wider items-center sticky top-0 bg-white z-30">
      <a href="#home" className="cursor-pointer">
        <img
          className="h-20 w-full object-cover"
          src={Images.maholcafe}
          alt="sdf"
        />
      </a>

      <div className="md:hidden" onClick={() => setShowMenu(!showMenu)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <ul
        className={`${
          showMenu ? "left-0" : "-left-full"
        } animation flex flex-col text-center absolute top-20 bg-white md:h-full w-full py-6 md:py-0 gap-x-3 md:flex-row md:static md:[background:none] md:w-auto`}
      >
        <a
          onClick={() => {
            setIsActive("gallery");
          }}
          href="#gallery"
          className={`block ${
            isActive === "gallery" && "bg-[#bc8d4b] text-white"
          } hover:bg-[#bc8d4b]  hover:text-white animation px-3 py-2`}
        >
          <li onClick={() => setShowMenu(!showMenu)}>GALLERY</li>
        </a>
        <a
          onClick={() => {
            setIsActive("owner");
          }}
          href="#owner"
          className={`block hover:bg-[#bc8d4b] active:bg-[#bc5a1b] hover:text-white animation px-3 py-2 ${
            isActive === "owner" && "bg-[#bc8d4b] text-white"
          }`}
        >
          <li onClick={() => setShowMenu(!showMenu)}>OWNER</li>
        </a>
        <a
          onClick={() => setIsActive("about")}
          href="#about-us"
          className={`block hover:bg-[#bc8d4b] active:bg-[#bc5a1b] hover:text-white animation px-3 py-2 ${
            isActive === "about" && "bg-[#bc8d4b] text-white"
          }`}
        >
          <li onClick={() => setShowMenu(!showMenu)}>ABOUT</li>
        </a>
        <a
          onClick={() => setIsActive("contact")}
          href="#contact-us"
          className={`block hover:bg-[#bc8d4b] active:bg-[#bc5a1b] hover:text-white animation px-3 py-2  ${
            isActive === "contact" && "bg-[#bc8d4b] text-white"
          }`}
        >
          <li onClick={() => setShowMenu(!showMenu)}>CONTACT US</li>
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
