import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaCcMastercard,
  FaCcVisa,
  FaCcDiscover,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex bg-stone-900 justify-between text-white px-6 pt-8 ">
      <div className="">
        <div className="block md:space-x-12 lg:text-lg lg:space-x-20 md:flex">
          <div className="mt-4 space-y-4">
            <span>ABOUT</span>
            <div className="text-gray-400 text-xs grid space-y-4 ">
              <a href="#about-us" className="hover:text-white">
                OUR STORY
              </a>
              <span className="hover:text-white"> CAREERS</span>
              <span className="hover:text-white"> MERCHANDISE</span>
              <span className="hover:text-white"> PRESS & AWARDS</span>
            </div>
          </div>

          <div className="mt-4 space-y-4">
            <span>GET IN TOUCH</span>
            <div className="text-gray-400 grid text-xs space-y-4">
              <a href="#home" className="hover:text-white">
                TOP
              </a>
              <a href="#about-us" className="hover:text-white">
                ABOUT US
              </a>
              <a href="#cards" className="hover:text-white">
                CARDS
              </a>
              <a href="#contact-us" className="hover:text-white">
                {" "}
                CONTACT US
              </a>
            </div>
          </div>
        </div>
        <div className="flex space-x-4 pt-8">
          <div className="payment">
            <FaCcMastercard style={{ fontSize: "18" }} />
          </div>
          <div className="payment">
            <FaCcVisa style={{ fontSize: "18" }} />
          </div>
          <div className="payment">
            <FaCcDiscover style={{ fontSize: "18" }} />
          </div>
        </div>
        <div>
          <p className="text-gray-300 py-12 text-sm">
            © 2022 Via Reál — All rights reserved.
          </p>
        </div>
      </div>
      <div className="grid font-semibold mt-4">
        <div className="grid">
          <span>CALL US</span>
          <span className="text-lg md:text-xl lg:text-3xl xl:text-3xl my-4">
            (972) 650 9001
          </span>
        </div>
        <div className="mt-2 md:mt-8 lg:mt-16">
          <p className="text-md">FOLLOW US</p>
          <div className="flex space-x-4 pt-4">
            <div className="payment">
              <FaFacebook style={{ fontSize: "18" }} />
            </div>
            <div className="payment">
              <FaInstagram style={{ fontSize: "18" }} />
            </div>
            <div className="payment">
              <FaTwitter style={{ fontSize: "18" }} />
            </div>
            <div className="payment">
              <FaLinkedin style={{ fontSize: "18" }} />
            </div>
          </div>
          <div className="py-12 text-sm flex font-medium">
            <p>Designed and developed by- </p>
            <p className="text-yellow-500 underline cursor-pointer">Intelzy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
