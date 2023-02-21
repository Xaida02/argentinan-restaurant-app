import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import { FaBars, FaSearch, FaShoppingCart, FaTimes } from "react-icons/fa";
import { menuLinks, foods } from "../variables";
import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [delivery, setDelivery] = useState(true);
  const [fullItems, setFullItems] = useState(0);
  const [navHeight, setNavHeight] = useState(null);
  const [fixedNavbar, setFixedNavbar] = useState(false);

  const { uniqueCartItems, setDisplayedFood } = useGlobalContext();

  const navRef = useRef(null);

  const arraySearch = (array, keyword) => {
    const searchTerm = keyword.toLowerCase();
    return array.filter((item) => {
      return item.name.toLowerCase().match(new RegExp(searchTerm, "g"));
    });
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
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleFixedNavbar);

    return () => window.removeEventListener("scroll", handleFixedNavbar);
  }, [fixedNavbar]);

  useEffect(() => {
    const theLenght = uniqueCartItems.reduce(
      (accumulator, currentValue) => accumulator + currentValue.quantity,
      0
    );
    setFullItems(theLenght);
  }, [uniqueCartItems]);

  return (
    <nav className="w-full bg-transparent h-4">
      <div
        ref={navRef}
        className={`static shadow-2xl bg-white mx-auto flex justify-between items-center p-4 ${
          fixedNavbar
            ? "navbar-fixed fixed w-full z-20"
            : "max-w-[1200px] xl:max-w-[1640px]"
        }`}
      >
        {/* Left items */}
        <div className="flex items-center">
          <button
            className="cursor-pointer text-white bg-argBlue hover:bg-cyan-700 duration-150 rounded p-1"
            onClick={() => setShowMenu(true)}
          >
            <FaBars size={30} />
          </button>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 text-argBlue select-none">
            Resto <span className="font-bold text-argYellow">Ferro</span>
          </h1>
          <div className="hidden sm:flex bg-gray-200 rounded-full p-1 text-sm">
            <p
              onClick={() => setDelivery(true)}
              className={
                "duration-300 " +
                (delivery
                  ? `bg-argBlue text-white rounded-full p-2 cursor-pointer`
                  : "p-2 cursor-pointer")
              }
            >
              Delivery
            </p>
            <p
              onClick={() => setDelivery(false)}
              className={
                "duration-300 " +
                (!delivery
                  ? `bg-argBlue text-white rounded-full p-2 cursor-pointer`
                  : "p-2 cursor-pointer")
              }
            >
              Pickup
            </p>
          </div>
        </div>
        {/* Search Input */}
        <div className="bg-gray-200 flex rounded-full px-2 items-center w-[200px] sm:w-[400px] lg:w-[600px] xl:w-[800px]">
          <FaSearch className="fill-cyan-700 " size={25} />
          <input
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleChange(e);
              }
            }}
            type="text"
            placeholder="Search Foods"
            className="bg-transparent w-full p-2 focus:outline-none"
          />
        </div>
        {/* Cart Icon */}
        <Link
          to="/Cart"
          className="rounded-full cursor-pointer bg-argBlue hover:bg-cyan-700 duration-200 text-white  right-[30px] top-[50vh] -translate-y-1/2 md:-translate-y-0 fixed md:static flex items-center justify-center z-10 py-4 md:py-2 px-4"
        >
          <div className="relative">
            <FaShoppingCart className="mr-2 " size={25} />
            <span
              className={`absolute top-[-5px] right-[-1px] w-[17px] h-[17px] rounded-full bg-white text-cyan-600 z-15 flex items-center text-xs justify-center font-bold duration-300 ${
                fullItems ? "opacity-80" : "opacity-0"
              }`}
            >
              {fullItems}
            </span>
          </div>
          <p className="hidden md:inline">Cart</p>
        </Link>
      </div>
      {/* Menu */}
      {showMenu && (
        <div className="fixed z-10 top-0 left-0 w-full h-screen bg-black/70"></div>
      )}
      <div
        className={`fixed top-0 ${
          showMenu ? "left-0 " : "left-[-100%]"
        } h-screen w-[300px] bg-white duration-500 z-20`}
      >
        <button
          className="duration-300  hover:scale-125 cursor-pointer absolute right-4 top-4"
          onClick={() => setShowMenu(false)}
        >
          <FaTimes size={30} />
        </button>
        <h2 className="text-2xl p-4 text-argBlue shadow-sm">
          Resto <span className="font-bold text-argYellow">Ferro</span>
        </h2>
        <ul className="flex flex-col text-gray-800">
          {menuLinks.map((link, index) => (
            <li
              key={index}
              className="text-xl p-4 flex cursor-pointer duration-500 hover:border-l border-gray-300 hover:text-cyan-700 hover:translate-x-4 text-argBlue"
            >
              {link.icon}
              {link.name}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
