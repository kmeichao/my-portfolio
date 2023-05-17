import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 fixed text-black bg-slate-200">
      <div>
        <h1 className="text-4xl ml-2 px-4">Kaylee Mei</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ link, id }) => (
          <li
            key={id}
            className="px-4 cursor-pointer font-medium text-gray-700 hover:scale-105 duration-200 "
          >
            {link}
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-700 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 w-full h-screen bg-gradient-to-b from-white to-black text-white">
          {links.map(({ link, id }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
