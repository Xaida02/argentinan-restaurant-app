import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import { FaBars, FaSearch, FaShoppingCart, FaTimes } from "react-icons/fa";
import { menuLinks, foods } from "../variables";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [delivery, setDelivery] = useState(true);
  const [fullItems, setFullItems] = useState(0);
  const [navHeight, setNavHeight] = useState(null);
  const [searchFocused, setSearchFocused] = useState(false);

  const [fixedNavbar, setFixedNavbar] = useState(false);

  const { uniqueCartItems, setDisplayedFood } = useGlobalContext();
  const navRef = useRef(null);

  const arraySearch = (array, keyword) => {
    const searchTerm = keyword.toLowerCase();
    return array.filter((item) =>
      item.name.toLowerCase().match(new RegExp(searchTerm, "g")),
    );
  };

  const handleChange = (event) => {
    let value = event.target.value;
    if (value.length > 2) {
      let search = arraySearch(foods, value);
      setDisplayedFood(search);
      window.scrollTo({
        top: document.getElementById("foods").offsetTop - navHeight,
        behavior: "smooth",
      });
    } else {
      setDisplayedFood(foods);
    }
  };

  const handleFixedNavbar = () => {
    if (window.scrollY > navHeight * 1.5) {
      setFixedNavbar(true);
    } else {
      setFixedNavbar(false);
    }
  };

  useEffect(() => {
    if (navRef.current) setNavHeight(navRef.current.offsetHeight);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleFixedNavbar);
    return () => window.removeEventListener("scroll", handleFixedNavbar);
  }, [fixedNavbar]);

  useEffect(() => {
    const total = uniqueCartItems.reduce((acc, cur) => acc + cur.quantity, 0);
    setFullItems(total);
  }, [uniqueCartItems]);

  return (
    <nav className="w-full bg-transparent h-4">
      <div
        ref={navRef}
        style={
          fixedNavbar ? { animation: "fadeInDown 0.4s ease forwards" } : {}
        }
        className={`shadow-md bg-white flex justify-between items-center p-4 gap-3
          ${
            fixedNavbar
              ? "fixed top-0 w-full  z-[100]"
              : "static max-w-[1200px] xl:max-w-[1640px] mx-auto"
          }`}
      >
        {/* Left */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setShowMenu(true)}
            className="text-white bg-argBlue hover:bg-cyan-700 active:scale-95 transition-all duration-150 rounded-md p-1.5"
          >
            <FaBars size={28} />
          </button>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-argBlue select-none whitespace-nowrap">
            Resto <span className="font-bold text-argYellow">Ferro</span>
          </h1>

          <div className="hidden sm:flex bg-gray-100 border border-gray-200 rounded-full p-1 text-sm">
            <button
              onClick={() => setDelivery(true)}
              className={`px-3 py-1.5 rounded-full font-medium transition-all duration-200 cursor-pointer
                ${delivery ? "bg-argBlue text-white shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
            >
              Delivery
            </button>
            <button
              onClick={() => setDelivery(false)}
              className={`px-3 py-1.5 rounded-full font-medium transition-all duration-200 cursor-pointer
                ${!delivery ? "bg-argBlue text-white shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
            >
              Pickup
            </button>
          </div>
        </div>

        {/* Search */}
        {/* Search */}
        <div
          className={`relative flex items-center rounded-full gap-2 w-full transition-all duration-300
  max-w-[180px] sm:max-w-[360px] lg:max-w-[560px] xl:max-w-[740px]
  ${
    searchFocused
      ? "bg-white shadow-[0_0_0_3px_rgba(67,161,213,0.2)] border border-argBlue"
      : fixedNavbar
        ? "bg-gray-100 border border-gray-200 hover:border-argBlue/40 hover:bg-gray-50"
        : "bg-white/15 border border-white/20 backdrop-blur-sm hover:bg-white/25"
  }`}
        >
          <div
            className={`pl-4 transition-all duration-300 ${searchFocused ? "text-argBlue scale-110" : fixedNavbar ? "text-gray-400" : "text-white/70"}`}
          >
            <FaSearch size={14} />
          </div>

          <input
            onChange={handleChange}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            onKeyDown={(e) => e.key === "Enter" && handleChange(e)}
            type="text"
            placeholder="Search foods..."
            className={`bg-transparent w-full py-2.5 pr-4 text-sm focus:outline-none transition-colors duration-200
      ${
        fixedNavbar || searchFocused
          ? "text-gray-700 placeholder:text-gray-300"
          : "text-white placeholder:text-white/50"
      }`}
          />

          <div
            className={`absolute right-3 transition-all duration-300 pointer-events-none
    ${searchFocused ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"}`}
          >
            <span className=" text-argBlue text-[15px] font-bold px-2 py-1 rounded-full tracking-wide">
              ↵
            </span>
          </div>
        </div>

        {/* Cart button — desktop */}
        <Link
          to="/Cart"
          className="hidden md:flex items-center gap-2 bg-argBlue hover:bg-cyan-700 active:scale-95 transition-all duration-200 text-white rounded-full py-2 px-5 font-semibold shrink-0 shadow-sm"
        >
          <div className="relative">
            <FaShoppingCart size={20} />
            <span
              className={`absolute -top-2 -right-2 w-[17px] h-[17px] rounded-full bg-white text-argBlue text-[10px] flex items-center justify-center font-bold transition-opacity duration-300
              ${fullItems ? "opacity-100" : "opacity-0"}`}
            >
              {fullItems}
            </span>
          </div>
          Cart
        </Link>
      </div>

      {/* Overlay */}
      {showMenu && (
        <div
          onClick={() => setShowMenu(false)}
          className="fixed z-10 inset-0 bg-black/60 backdrop-blur-sm"
        />
      )}

      {/* Side menu */}
      <div
        className={`fixed top-0 ${showMenu ? "left-0" : "left-[-100%]"} h-screen w-[280px] bg-white shadow-2xl transition-all duration-500 z-20 flex flex-col`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
          <h2 className="text-2xl text-argBlue">
            Resto <span className="font-bold text-argYellow">Ferro</span>
          </h2>
          <button
            onClick={() => setShowMenu(false)}
            className="text-gray-400 hover:text-gray-700 hover:scale-110 transition-all duration-200"
          >
            <FaTimes size={26} />
          </button>
        </div>
        <ul className="flex flex-col mt-2">
          {menuLinks.map((link, index) => (
            <li
              key={index}
              className="flex items-center px-5 py-3.5 text-argBlue hover:text-cyan-700 hover:bg-blue-50 hover:pl-8 transition-all duration-300 cursor-pointer text-base font-medium border-b border-gray-50"
            >
              {link.icon}
              {link.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Cart button — mobile floating */}
      <Link
        to="/Cart"
        className="md:hidden fixed right-[20px] top-[50vh] -translate-y-1/2 bg-argBlue hover:bg-cyan-700 text-white rounded-full p-4 z-10 shadow-xl transition-all duration-200 active:scale-95"
      >
        <div className="relative">
          <FaShoppingCart size={22} />
          <span
            className={`absolute -top-2 -right-2 w-[17px] h-[17px] rounded-full bg-white text-argBlue text-[10px] flex items-center justify-center font-bold transition-opacity duration-300
            ${fullItems ? "opacity-100" : "opacity-0"}`}
          >
            {fullItems}
          </span>
        </div>
      </Link>

      {/* Keyframe for fixed navbar animation */}
      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
