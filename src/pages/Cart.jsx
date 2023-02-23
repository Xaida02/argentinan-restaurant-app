import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineCreditCard, AiOutlineHome } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
import { useGlobalContext } from "../context";

const Cart = () => {
  const { uniqueCartItems, setUniqueCartItems } = useGlobalContext();

  const [fullPrice, setFullPrice] = useState(0);

  const handleRestItem = (food) => {
    const updatedItems = uniqueCartItems.map((item) => {
      if (item.id === food.id) {
        const updatedQuantity = item.quantity - 1;
        if (updatedQuantity <= 0) {
          return null;
        } else {
          return { ...item, quantity: updatedQuantity };
        }
      }
      return item;
    });

    setUniqueCartItems(updatedItems.filter((item) => item !== null));
  };

  const handleAddItem = (food) => {
    const updatedItems = uniqueCartItems.map((item) => {
      if (item.id === food.id && item.quantity < 10) {
        return { ...item, quantity: item.quantity + 1 };
      }

      return item;
    });

    // console.log(upDatedItems);
    setUniqueCartItems(updatedItems);
  };

  const handleRemove = (food) => {
    const updatedItems = uniqueCartItems.filter((item) => item.id !== food.id);
    setUniqueCartItems(updatedItems);
  };

  useEffect(() => {
    const newPrice = uniqueCartItems.reduce(
      (accumulator, currentItem) =>
        accumulator + currentItem.price * currentItem.quantity,
      0
    );
    setFullPrice(newPrice);
  }, [uniqueCartItems]);

  return (
    <>
      <section className="relative mt-[5px] flex flex-col items-center justify-center h-[100%] w-full">
        {/* Back Home button */}
        <div className="flex justify-start items-start px-12 mt-8 w-screen">
          <Link
            className="flex justify-evenly w-[100px] text-sm items-center bg-argBlue hover:bg-cyan-700 duration-200 font-bold p-1 rounded-lg text-white shadow-lg"
            to="/"
          >
            <AiOutlineHome size={20} /> Back
            <br /> Home
          </Link>
        </div>
        {/* Cart box */}
        <div className="w-[300px] ss:w-[500px] duration-500 cart-box md:w-[900px] shadow-2xl p-4 mt-[40px] min-h-[685px] rounded-lg bg-cyan-50">
          {/* Cart box top*/}
          <div className="flex flex-col sm:flex-row justify-between w-full py-2">
            <h2
              className="text-argBlue font-bold text-lg md:text-xl xl:text-xl duration-200 cursor-pointer drop-shadow-lg
            "
            >
              Cart
            </h2>
            <button
              onClick={() => setUniqueCartItems([])}
              className="text-red-500 font-bold cursor-pointer duration-200 hover:text-red-600 drop-shadow-lg"
            >
              Remove <span className="underline capitalize">all</span>
            </button>
          </div>
          {/* Cart box content */}
          {!uniqueCartItems.length && (
            <img
              className="duration-500 m-auto w-full"
              src="./assets/emptyCart.png"
              alt="empty shopping cart"
            />
          )}
          {uniqueCartItems.map((foodInTheCart, index) => {
            const { image, name, price, description, quantity } = foodInTheCart;
            return (
              <>
                <div
                  key={index}
                  className="flex duration-500 flex-col justify-between w-full"
                >
                  {/* Each item in the cart */}
                  <div className="flex flex-col ss:flex-row items-center justify-between px-6 py-8 w-full">
                    {/* Item img */}
                    <img
                      src={image}
                      className="w-full ss:w-[80px] ss:h-[80px] md:w-[130px] md:h-[130px] object-cover  shadow-lg ss:shadow-sm rounded"
                      alt=""
                    />
                    {/* Item name and desc */}
                    <div className="flex flex-col justify-center p-4 md:p-0 items-center ss:items-start w-[260px]">
                      <p className="text-xl font-semibold text-gray-900  text-shadow">
                        {name}
                      </p>
                      <p className="text-sm text-gray-500 text-center">
                        {description}
                      </p>
                    </div>
                    <div className="md:ml-[100px] flex justify-between flex-col-reverse md:flex-row items-center">
                      {/* Item quantity */}
                      <div className="mt-2 md:mt-0 flex justify-center items-center text-sm md:text-lg">
                        <p
                          className="font-bold flex items-center justify-center cursor-pointer  w-[40px] h-[40px] rounded-full bg-slate-200 duration-300 hover:bg-slate-300"
                          onClick={() => handleRestItem(foodInTheCart)}
                        >
                          -
                        </p>
                        <p className="font-bold flex items-center justify-center  w-[40px] h-[40px] rounded-full">
                          {quantity}
                        </p>
                        <p
                          className="font-bold flex items-center justify-center cursor-pointer  w-[40px] h-[40px] rounded-full bg-slate-200 duration-300 hover:bg-slate-300 font-bold md:font-semibold"
                          onClick={() => handleAddItem(foodInTheCart)}
                        >
                          +
                        </p>
                      </div>
                      {/* Price and remove */}
                      <div className="w-full flex justify-evenly items-center md:inline text-center md:ml-[25px]">
                        <p className="text-xl md:text-2xl font-bold">
                          ${price}
                        </p>
                        <button
                          className="text-red-500 cursor-pointer text-sm font-semibold flex justify-between items-center duration-200 hover:text-red-600
                    "
                          onClick={() => handleRemove(foodInTheCart)}
                        >
                          <span className="hidden md:inline">Remove</span>{" "}
                          <BiTrash
                            size={15}
                            className="ml-1 underline md:no-underline"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {index !== index.length - 1 && (
                  <hr className="ss:hidden border-argYellow" />
                )}
              </>
            );
          })}
          <hr className="w-[70%] ml-auto border-gray-300" />
          <div className="w-full flex justify-end ">
            <div className="flex flex-col justify-between w-[200px] m-4 ">
              <div className="flex justify-between">
                <div>
                  <p className="font-bold text-lg">Sub Total</p>
                  <p className="text-gray-400 font-semibold">
                    {uniqueCartItems.length} items
                  </p>
                </div>
                <p
                  className="font-bold text-4xl text-yellow-600
              "
                >
                  ${fullPrice}
                </p>
              </div>
              <button className="flex justify-evenly items-center bg-argYellow font-bold p-2 rounded-lg m-2 duration-300 hover:bg-yellow-300 hover:text-green-900">
                Pay options <AiOutlineCreditCard size={23} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
