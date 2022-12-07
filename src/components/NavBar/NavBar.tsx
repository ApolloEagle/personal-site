import React, { useState } from "react";
import { Links } from "../Links";

const NavBar = () => {
  let [open, setOpen] = useState(false);

  const links = [
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
  ];

  return (
    <div className="flex flex-col justify-center align-center sticky top-0 z-20 bg-[#5EA985] w-full lg:w-56 min-h-16 lg:h-full">
      <a
        className="w-12 lg:w-32 self-center py-2"
        href="#about"
        onClick={() => setOpen(false)}
      >
        <img
          className="transition hover:scale-110 duration-300 rounded-full"
          src="/profile.jpeg"
          alt="profile"
        />
      </a>
      <button
        className="absolute top-0 right-0 pr-4 text-4xl font-bold text-gray-200 active:text-white sm:block lg:hidden"
        onClick={() => setOpen(!open)}
      >
        ...
      </button>
      <div
        className={`flex flex-col lg:flex-row justify-center text-center bg-[#5EA985] animate-expand p-2 ${
          open ? "block" : "hidden"
        }`}
      >
        {links.map((link, i) => {
          return (
            <a
              key={i}
              href={`${link.href}-mob`}
              className="text-gray-200 font-semibold"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          );
        })}
      </div>
      <div className="flex-col justify-center items-center text-center hidden lg:block">
        {links.map((link, i) => {
          return (
            <div
              key={i}
              className="transition hover:scale-110 duration-300 text-gray-200 hover:text-white py-2 font-semibold sm:text-sm md:text-sm lg:text-lg"
            >
              <a href={`${link.href}`}>{link.label}</a>
            </div>
          );
        })}
        <Links />
      </div>
    </div>
  );
};

export default NavBar;
