import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineCreditCard } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
import { TbArrowLeft } from "react-icons/tb";
import { useGlobalContext } from "../context";

const Cart = () => {
  const { uniqueCartItems, setUniqueCartItems } = useGlobalContext();
  const [fullPrice, setFullPrice] = useState(0);

  const handleRestItem = (food) => {
    const updated = uniqueCartItems
      .map((item) =>
        item.id === food.id
          ? item.quantity - 1 <= 0
            ? null
            : { ...item, quantity: item.quantity - 1 }
          : item,
      )
      .filter(Boolean);
    setUniqueCartItems(updated);
  };

  const handleAddItem = (food) => {
    setUniqueCartItems(
      uniqueCartItems.map((item) =>
        item.id === food.id && item.quantity < 10
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
  };

  const handleRemove = (food) => {
    setUniqueCartItems(uniqueCartItems.filter((item) => item.id !== food.id));
  };

  useEffect(() => {
    const total = uniqueCartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );
    setFullPrice(total);
  }, [uniqueCartItems]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar — igual que el footer/hero, mismo lenguaje */}
      <div className="h-[3px] w-full bg-gradient-to-r from-argBlue via-argYellow to-argBlue" />
      <div className="bg-white border-b border-gray-100 shadow-sm px-6 sm:px-12 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-gray-500 hover:text-argBlue font-semibold text-sm transition-colors duration-150 group"
        >
          <TbArrowLeft
            size={18}
            className="group-hover:-translate-x-1 transition-transform duration-150"
          />
          Back
        </Link>
        <h1 className="text-argBlue font-light text-xl tracking-tight">
          Resto <span className="font-black text-argYellow">Ferro</span>
          <span className="text-gray-300 font-normal text-sm ml-2">/ Cart</span>
        </h1>
        <div className="w-[48px]" /> {/* spacer para centrar el título */}
      </div>

      <div className="max-w-[960px] mx-auto px-4 py-10 flex flex-col lg:flex-row gap-6 items-start">
        {/* Items panel */}
        <div className="flex-1 w-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
            <div>
              <h2 className="text-gray-800 font-black text-base">Your Order</h2>
              <p className="text-gray-400 text-xs mt-0.5">
                {uniqueCartItems.length}{" "}
                {uniqueCartItems.length === 1 ? "item" : "items"}
              </p>
            </div>
            {uniqueCartItems.length > 0 && (
              <button
                onClick={() => setUniqueCartItems([])}
                className="text-xs text-red-400 hover:text-red-600 font-semibold transition-colors duration-150 flex items-center gap-1"
              >
                <BiTrash size={14} /> Clear all
              </button>
            )}
          </div>

          {/* Items */}
          <div className="cart-box-content overflow-y-auto max-h-[520px] divide-y divide-gray-50">
            {uniqueCartItems.length ? (
              uniqueCartItems.map((food, index) => {
                const { image, name, price, description, quantity } = food;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50/80 transition-colors duration-150"
                  >
                    {/* Image */}
                    <img
                      src={image}
                      className="w-[72px] h-[72px] object-cover rounded-xl shrink-0 shadow-sm"
                      alt={name}
                    />

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-gray-800 text-sm truncate">
                        {name}
                      </p>
                      <p className="text-gray-400 text-xs mt-0.5 truncate">
                        {description}
                      </p>
                    </div>

                    {/* Quantity */}
                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        onClick={() => handleRestItem(food)}
                        className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 font-bold text-sm flex items-center justify-center transition-all duration-150 active:scale-90"
                      >
                        −
                      </button>
                      <span className="w-7 text-center font-bold text-gray-800 text-sm">
                        {quantity}
                      </span>
                      <button
                        onClick={() => handleAddItem(food)}
                        className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 font-bold text-sm flex items-center justify-center transition-all duration-150 active:scale-90"
                      >
                        +
                      </button>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-3 shrink-0 min-w-[80px] justify-end">
                      <p className="font-black text-lg text-argYellow">
                        ${(price * quantity).toFixed(2)}
                      </p>
                      <button
                        onClick={() => handleRemove(food)}
                        className="text-gray-300 hover:text-red-400 transition-colors duration-150 active:scale-90"
                      >
                        <BiTrash size={17} />
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="flex flex-col items-center py-20 gap-4">
                <img
                  src="./assets/emptyCart.png"
                  className="w-[160px] opacity-50 grayscale"
                  alt="Empty cart"
                />
                <p className="text-gray-400 text-sm font-medium">
                  Your cart is empty
                </p>
                <Link
                  to="/"
                  className="flex items-center gap-1.5 text-argBlue hover:text-cyan-700 text-sm font-bold transition-colors duration-150"
                >
                  <TbArrowLeft size={15} /> Browse the menu
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Summary panel — sticky en desktop */}
        {uniqueCartItems.length > 0 && (
          <div className="w-full lg:w-[280px] shrink-0 lg:sticky lg:top-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              {/* Header */}
              <div className="px-5 py-4 border-b border-gray-100">
                <h3 className="font-black text-gray-800 text-sm">Summary</h3>
              </div>

              {/* Breakdown */}
              <div className="px-5 py-4 flex flex-col gap-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Subtotal</span>
                  <span className="font-semibold text-gray-700">
                    ${fullPrice.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Delivery</span>
                  <span className="font-semibold text-green-500">Free</span>
                </div>
                <div className="h-px bg-gray-100" />
                <div className="flex justify-between items-center">
                  <span className="font-black text-gray-800 text-sm">
                    Total
                  </span>
                  <span className="font-black text-2xl text-argYellow">
                    ${fullPrice.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* CTA */}
              <div className="px-5 pb-5">
                <button className="w-full flex justify-center items-center gap-2 bg-argYellow hover:bg-yellow-300 active:scale-95 transition-all duration-200 text-black font-black py-3.5 rounded-xl shadow-sm text-sm">
                  Pay Now <AiOutlineCreditCard size={20} />
                </button>
                <Link
                  to="/"
                  className="mt-3 w-full flex justify-center items-center gap-1.5 text-gray-400 hover:text-argBlue text-xs font-semibold transition-colors duration-150"
                >
                  <TbArrowLeft size={13} /> Continue browsing
                </Link>
              </div>
            </div>

            {/* Trust badges */}
            <div className="mt-4 bg-white rounded-2xl border border-gray-100 px-5 py-4 flex flex-col gap-2.5">
              {[
                { icon: "🔒", text: "Secure checkout" },
                { icon: "🛵", text: "Free delivery" },
                { icon: "↩️", text: "Easy returns" },
              ].map((badge) => (
                <div key={badge.text} className="flex items-center gap-2.5">
                  <span className="text-sm">{badge.icon}</span>
                  <span className="text-gray-400 text-xs font-medium">
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
