import React, { useState, useEffect } from "react";
import { foods, categories, uniquePrices } from "../variables";
import { useGlobalContext } from "../context";
import { BsCartDashFill } from "react-icons/bs";
import { BiTrash } from "react-icons/bi";
import { Link } from "react-router-dom";

const Food = () => {
  const [activePriceBtn, setActivePriceBtn] = useState(-1);
  const [activeCategoryBtn, setActiveCategoryBtn] = useState(-1);
  const [showAdded, setShowAdded] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  const { cart, setCart, displayedFood, setDisplayedFood } = useGlobalContext();

  const addToCart = (food) => {
    setCart([...cart, food]);
    setShowAdded(true);
    setIsShaking(true);
  };

  const filterByCategory = (e) => {
    const category = e.target.textContent;
    setDisplayedFood(foods.filter((food) => food.category.includes(category)));
    setActiveCategoryBtn(e.target.dataset.index);
    setActivePriceBtn(-1);
  };

  const filterByPrice = (e) => {
    const dollarSign = e.target.textContent;
    const filteredFoods = foods.filter((food) => {
      const priceDollarSigns = "$".repeat(Math.floor(food.price / 10) + 1);
      return priceDollarSigns === dollarSign;
    });
    setDisplayedFood(filteredFoods);
    setActivePriceBtn(e.target.dataset.index);
    setActiveCategoryBtn(-1);
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsShaking(false), 1000);
    return () => clearTimeout(timeout);
  }, [isShaking]);

  useEffect(() => {
    if (displayedFood.length === foods.length) {
      setActiveCategoryBtn(-1);
      setActivePriceBtn(-1);
    }
  }, [displayedFood]);

  useEffect(() => {
    let timeOut;
    if (showAdded) {
      timeOut = setTimeout(() => setShowAdded(false), 3500);
    }
    return () => clearTimeout(timeOut);
  }, [showAdded]);

  return (
    <section className="max-w-[1200px] xl:max-w-[1640px] mx-auto px-4 py-16">
      {/* Section header */}
      <div className="relative flex flex-col items-center mb-14">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-px bg-argYellow" />
          <p className="text-argYellow text-xs font-bold tracking-[0.35em] uppercase">
            Our Menu
          </p>
          <div className="w-12 h-px bg-argYellow" />
        </div>
        <h1 className="text-5xl sm:text-6xl text-gray-800 text-center font-black tracking-tight leading-tight">
          Top Rated <span className="text-argYellow">Choices</span>
        </h1>
        <p className="text-gray-400 text-sm mt-3 tracking-widest uppercase">
          Authentic Argentine cuisine, delivered to you
        </p>
      </div>

      {/* Filter bar */}
      <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 mb-6 shadow-sm">
        {/* Category + Price en la misma fila con separador */}
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 lg:items-start">
          {/* Category */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1 h-4 bg-argBlue rounded-full" />
              <h4 className="text-xs font-black text-gray-500 tracking-[0.2em] uppercase">
                Category
              </h4>
            </div>
            <ul className="list-filter-container flex flex-wrap gap-2">
              {categories().map((category, index) => (
                <li
                  key={index}
                  data-index={index}
                  onClick={filterByCategory}
                  className={`px-3.5 py-1.5 rounded-full font-semibold text-xs cursor-pointer transition-all duration-200 select-none border
                    ${
                      index.toString() === activeCategoryBtn
                        ? "bg-argYellow text-white border-argYellow shadow-md shadow-yellow-100"
                        : "text-gray-500 border-gray-200 bg-white hover:border-argYellow hover:text-argYellow"
                    }`}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>

          {/* Divider vertical */}
          <div className="hidden lg:block w-px bg-gray-200 mx-6 self-stretch" />

          {/* Price + Show All lado a lado */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-5 lg:gap-4 lg:min-w-[180px]">
            {/* Price */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1 h-4 bg-argYellow rounded-full" />
                <h4 className="text-xs font-black text-gray-500 tracking-[0.2em] uppercase">
                  Price
                </h4>
              </div>
              <ul className="flex flex-wrap gap-2">
                {uniquePrices().map((price, index) => (
                  <li
                    key={index}
                    data-index={index}
                    onClick={filterByPrice}
                    className={`px-4 py-1.5 rounded-full font-black text-xs cursor-pointer transition-all duration-200 select-none border tracking-wider
                      ${
                        index.toString() === activePriceBtn
                          ? "bg-argYellow text-white border-argYellow shadow-md shadow-yellow-100"
                          : "text-gray-500 border-gray-200 bg-white hover:border-argYellow hover:text-argYellow"
                      }`}
                  >
                    {price}
                  </li>
                ))}
              </ul>
            </div>

            {/* Show All */}
            <button
              onClick={() => setDisplayedFood(foods)}
              className="self-start flex items-center gap-2 border border-argBlue text-argBlue font-bold text-xs px-5 py-2 rounded-full transition-all duration-200 hover:bg-argBlue hover:text-white active:scale-95 tracking-wide"
            >
              <span className="text-base leading-none">↺</span> Show All
            </button>
          </div>
        </div>

        {/* Active filter indicator */}
        {(activeCategoryBtn !== -1 || activePriceBtn !== -1) && (
          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2">
            <p className="text-xs text-gray-400">Filtering by:</p>
            {activeCategoryBtn !== -1 && (
              <span className="bg-argYellow/10 text-argYellow text-xs font-bold px-3 py-1 rounded-full border border-argYellow/20">
                {categories()[activeCategoryBtn]}
              </span>
            )}
            {activePriceBtn !== -1 && (
              <span className="bg-argYellow/10 text-argYellow text-xs font-bold px-3 py-1 rounded-full border border-argYellow/20">
                {uniquePrices()[activePriceBtn]}
              </span>
            )}
            <span className="text-xs text-gray-300 ml-1">
              — {displayedFood.length} result
              {displayedFood.length !== 1 ? "s" : ""}
            </span>
          </div>
        )}
      </div>
      {/* Food grid */}
      <div
        id="foods"
        className="py-8 w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5"
      >
        {displayedFood.map((food, index) => {
          const { name, image, price, description } = food;
          return (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 bg-black"
              style={{ aspectRatio: "3/4" }}
            >
              {/* Image */}
              <img
                src={image}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-50 brightness-75"
                alt={name}
              />

              {/* Price badge — top right */}
              <div className="absolute top-3 right-3 z-10 bg-argYellow text-black text-xs font-black px-3 py-1.5 rounded-full shadow-lg tracking-wide">
                ${price}
              </div>

              {/* Bottom info — always visible name, description slides in */}
              <div className="absolute bottom-0 left-0 right-0 z-10 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent translate-y-0">
                <p className="text-white font-bold text-base leading-tight drop-shadow">
                  {name}
                </p>
                <p className="text-gray-300 text-xs mt-1 leading-snug max-h-0 overflow-hidden opacity-0 group-hover:max-h-[60px] group-hover:opacity-100 transition-all duration-500">
                  {description}
                </p>

                {/* Add to cart — slides up on hover */}
                <button
                  onClick={() => addToCart(food)}
                  className="mt-3 w-full bg-argYellow hover:bg-yellow-300 active:scale-95 text-black font-bold text-sm py-2 rounded-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 shadow-lg"
                >
                  + Add to cart
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* No results */}
      {!displayedFood.length && (
        <div className="flex flex-col items-center py-10 gap-4">
          <h1 className="text-lg text-center text-argBlue font-bold">
            We don't have anything like that — try another search.
          </h1>
          <img
            src="./assets/noFoodsMatched.png"
            className="w-[200px] xl:w-[400px]"
            alt="No foods matched"
          />
        </div>
      )}
      {/* Added to cart notification */}
      <div
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-20 transition-all duration-500
          ${showAdded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16 pointer-events-none"}
          ${isShaking ? "shaking" : ""}`}
      >
        <div className="flex items-center gap-3 bg-white border border-gray-100 rounded-2xl shadow-2xl px-4 py-3 min-w-[260px]">
          {/* Icon */}
          <div className="bg-argBlue rounded-xl p-2 shrink-0">
            <BsCartDashFill size={20} className="text-white" />
          </div>

          {/* Text */}
          <Link
            to="/cart"
            className="flex-1"
            onClick={() => setShowAdded(false)}
          >
            <p className="text-gray-800 font-bold text-sm">Added to cart!</p>
            <p className="text-argBlue text-xs font-medium hover:underline">
              View cart →
            </p>
          </Link>

          {/* Undo button */}
          <button
            onClick={() => {
              setShowAdded(false);
              setCart(cart.slice(0, -1));
            }}
            className="text-gray-300 hover:text-red-500 transition-colors duration-150 shrink-0"
            title="Undo"
          >
            <BiTrash size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Food;
