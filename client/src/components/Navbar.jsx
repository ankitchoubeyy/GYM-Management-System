import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { MyButton } from "./MyButton";

const menuItems = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center px-6 sm:px-10 md:px-14 lg:px-18 py-2 shadow-lg">
      {/* ----------------- Logo and Title ----------------  */}
      <Link to={"/"} className="flex items-center">
        <img src={logo} className="h-15" alt="logo" />
        <h1 className="font-bold font-display text-md sm:text-lg md:text-xl lg:text-2xl text-teal-500 uppercase">MH Fitness</h1>
      </Link>
      {/* ----------------- Menu Items for Desktop ----------------  */}
      <div className="hidden md:flex items-center gap-6 ">
        <ul className="flex w-full gap-6">
          {menuItems.map((item, index) => (
            <li key={index} className="px-3 sm:text-sm md:text-md lg:text-xl  hover:text-teal-600 transition duration-500  font-medium"><Link to={item.link}>{item.title}</Link></li>
          ))}
        </ul>
          {/* ----------------- Call to Action ----------------  */}
        <MyButton title="Join Us" route="register" width={"full"} />
      </div>

      {/* ----------------- Menu Items for Mobile ----------------  */}
      <div className="md:hidden flex">
        <CiMenuFries onClick={() => setOpen(!open)} className="text-3xl text-teal-500 cursor-pointer" />

        <div className={`${open ? "translate-y-0" : "-translate-x-full"} absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center gap-12 items-center transition-all duration-300 `}>
        <RxCross1 onClick={() => setOpen(!open)} className="text-3xl absolute top-8 right-4 text-secondary cursor-pointer" />

        <ul className="flex flex-col  gap-6">
          {menuItems.map((item, index) => (
            <li key={index} className="px-3 font-bold  text-teal-500 hover:text-teal-600 transition duration-500"><Link to={item.link}>{item.title}</Link></li>
          ))}
        </ul>
          {/* ----------------- Call to Action ----------------  */}
        <button className="px-4 sm:px-6 md:px-8 lg:px-10 py-2 bg-secondary hover:bg-primary transition duration-500 text-white rounded-full w-[70%]  ">
          <Link to="/" className="">Join Us</Link>
        </button>
        </div>
          
      </div>
    </nav>
  );
};

export default Navbar;
