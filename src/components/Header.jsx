import React, { useState, useEffect } from "react";
import LogoDark from "../assets/img/logo.jpeg";

const Header = () => {
  const [header, setHeader] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  });

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <header
      className={`${
        header ? "bg-white  shadow-lg" : "bg-transparent py-8"
      } fixed z-50 w-full transition-all duration-500`}
    >
      <div className="container mx-auto flex flex-col items-center lg:flex-row lg:justify-between lg:gap-y-0">
        <a href="/">
          {header ? (
            <div>
              <img className="w-[100px]  " src={LogoDark} />
              <h4 className="text-black">ALPHA</h4>
            </div>
          ) : (
            <div>
              <img className="w-[100px]" src={LogoDark} />
              <h4 className="text-black">ALPHA</h4>{" "}
            </div>
          )}
        </a>
        <nav
          className={`${
            header ? "text-black" : "text-white"
          } flex justify-center gap-x-4 font-tertiary tracking-[3px] text-[15px] items-center uppercase lg:gap-x-8`}
        >
          <a href="/" className="hover:text-accent transtion">
            Home
          </a>
          <a href=" " className="hover:text-accent transtion">
            about
          </a>
          <div className="relative">
            <button
              className="hover:text-accent transtion"
              onClick={toggleServicesDropdown}
            >
              services
            </button>
            {isServicesOpen && (
              <div className="absolute bg-white text-black py-2 px-4 rounded shadow-lg">
                <a href="#" className="block hover:text-accent transtion">
                  Service 1
                </a>
                <a href="#" className="block hover:text-accent transtion">
                  Service 2
                </a>
                <a href="#" className="block hover:text-accent transtion">
                  Service 3
                </a>
              </div>
            )}
          </div>
          <a href=" " className="hover:text-accent transtion">
            pricing
          </a>
          <a href=" " className="hover:text-accent transtion">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
