import React, { useState, useEffect } from "react";
import { foods, categories, uniquePrices } from "../variables";
import "./Food.css";
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

    let filteredFoods = [];

    // This will filter the foods by price without having to write a condition for each price range

    filteredFoods = foods.filter((food) => {
      const priceDollarSigns = "$".repeat(Math.floor(food.price / 10) + 1);

      // console.log(priceDollarSigns);

      return priceDollarSigns === dollarSign;
    });
    setDisplayedFood(filteredFoods);
    setActivePriceBtn(e.target.dataset.index);
    setActiveCategoryBtn(-1);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShaking(false);
    }, 1000);
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
      timeOut = setTimeout(() => {
        setShowAdded(false);
        console.log("timeout ended.");
      }, 3500);
    }

    return () => {
      clearTimeout(timeOut);
    };
  }, [showAdded]);

  return (
    <section className="max-w-[1200px] xl:max-w-[1640px] m-auto px-4 py-10">
      <h1 className="m-auto text-6xl text-argYellow text-center px-4 pb-12 font-bold">
        Top Rated Choices
      </h1>
      <div className="flex w-full flex-col sm:flex-row justify-around sm:justify-between items-center m-auto">
        {/* Search by category buttons */}
        <div className="w-full mt-7 sm:mt-2 sm:w-[400px] flex flex-col z">
          <h4 className="text-lg text-argBlue font-semibold">
            Search by <span className="italic">category</span>
          </h4>
          <ul className="list-filter-container flex items-start w-full overflow-x-scroll sm:overflow-hidden sm:flex-wrap">
            {categories().map((category, index) => (
              // The category string shouldn't change so the filter function works properly
              <li
                className={`mr-2 mt-3 px-4 py-2 rounded-full font-bold border-argYellow border text-[12px] text-center min-w-[75px] flex justify-center items-center cursor-pointer duration-300 hover:text-white hover:bg-argYellow ${
                  index.toString() === activeCategoryBtn
                    ? "bg-argYellow text-white"
                    : "text-yellow-600 "
                }`}
                data-index={index}
                key={index}
                onClick={filterByCategory}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
        {/* Search by price buttons */}
        <div className="w-full mt-7 sm:mt-2 sm:w-[300px] flex flex-col z">
          <h4 className="text-lg text-argBlue font-semibold">
            Search by <span className="italic">price</span>
          </h4>
          <ul className="list-filter-container flex items-start w-full overflow-x-scroll sm:overflow-hidden sm:flex-wrap">
            {uniquePrices().map((price, index) => (
              <li
                className={`mr-2 mt-3 px-4 py-2  lex justify-center items-center rounded-full font-bold border-argYellow border text-[12px] text-center min-w-[75px] cursor-pointer duration-300 hover:text-white hover:bg-argYellow ${
                  index.toString() === activePriceBtn
                    ? "bg-argYellow text-white"
                    : "text-yellow-600 "
                }`}
                key={index}
                data-index={index}
                onClick={filterByPrice}
              >
                {price}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Display food */}
      <div className="w-full flex">
        <button
          className="border mt-8 sm:mt-2 rounded-full font-bold border-argBlue text-cyan-600 text-lg px-4 py-1 m-auto duration-150 hover:text-white hover:bg-argBlue hover:"
          onClick={() => setDisplayedFood(foods)}
        >
          Show All
        </button>
      </div>
      <div
        id="foods"
        className="py-8 w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
      >
        {displayedFood.map((food, index) => {
          const { id, name, image, price } = food;
          return (
            <div
              key={index}
              className="food-box shadow-xl rounded-t-md duration-500 hover:shadow-2xl hover:scale-105 cursor-pointer relative"
            >
              <img
                src={image}
                className="h-[200px] w-full rounded-t-md object-cover duration-500
                "
                alt=""
              />
              <button
                className="add-to-cart absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 border-2 border-argYellow text-white duration-500 w-[125px] md:w-[200px] opacity-0 text-sm md:text-base invisible font-semibold hover:bg-white hover:text-argYellow hover:border-white"
                onClick={() => addToCart(food)}
              >
                Add to the cart
              </button>
              <div className="flex items-center justify-between w-full p-2">
                <p className="font-bold text-sm">{name}</p>
                <p className="font-semibold px-2 pt-1 bg-argYellow rounded-xl  text-sm">
                  <span className="">{price}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {!displayedFood.length && (
        <div className="max-w-full">
          <h1 className="m-auto text-lg text-center text-argBlue font-bold">
            We don't have anithing like that, please refer to others of our
            restaurants in albuquerque.
          </h1>
          <img
            src="./assets/noFoodsMatched.png"
            className="m-auto w-[200px] xl:min-w-[700px]"
            alt="Confused girl for the lack of food"
          />
        </div>
      )}
      {/* Added to the cart notification */}
      <Link
        to="/cart"
        className={`w-[150px] md:w-[200px] text-[11px] md:text-base fixed rounded bottom-[10%] z-10 font-bold duration-500  px-1 py-2 md:py-4 flex items-center justify-evenly text-green-900 bg-green-50 shadow-lg 
          ${showAdded ? "left-[10%]" : "left-[-75%] md:left-[-50%]"}
          ${isShaking ? "shaking" : ""}
         
        }`}
      >
        Added to the cart <BsCartDashFill size={25} />{" "}
        <BiTrash
          onClick={(event) => {
            event.preventDefault();
            setShowAdded(false);
            setCart(cart.slice(0, -1));
          }}
          size={30}
          className="duration-300 cursor-pointer absolute text-white p-1 rounded-full bg-red-600 right-[-25%] md:right-[-20%] text-xl opacity-60 hover:opacity-100"
        />
      </Link>
    </section>
  );
};

export default Food;
