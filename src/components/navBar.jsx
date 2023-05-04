import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import Button from "./button";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  let Link = [
    { name: "Home", link: "/" },
    { name: "Sellers", link: "/" },
    { name: "Services", link: "/" },
    { name: "Product", link: "/" },
    { name: "About", link: "/" },
  ];

  return (
    <div className="w-full shadow-md top-0 left-0 fixed">
      <div className="md:flex justify-between items-center px-8 py-6 bg-slate-200">
        <div className=" md:ml-10 font-bold text-2xl md:flex items-center justify-between cursor-pointer text-gray-800">
          <span className="mr-2">
            <HomeWorkIcon  />
          </span>
          Rental
        </div>
        <div className="mr-8">
          <div
            onClick={handleClick}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            {nav ? (
              <CloseIcon style={{ width: "45px" }} />
            ) : (
              <MenuIcon style={{ width: "45px" }} />
            )}
          </div>
          <ul
            className={`md:flex mr-8 md:pb-0 pb-12 md:pt-0 pt-4 absolute md:static z-[-1] md:z-auto left-0 w-full md:w-auto pl-9 md:pl-0 transition-all duration-500 ease-in  ${
              nav ? "top-20" : "top-[-490px]"
            } `}
          >
            {Link.map((Link) => (
              <li
                key={Link.name}
                className="md:ml-8 text-xl md:my-0 my-7 font-semibold"
              >
                <a
                  href={Link.link}
                  className="text-gray-800 hover:text-gray-400 duration-500"
                >
                  {Link.name}
                </a>
              </li>
            ))}
            <Button name="Contact Us" />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
