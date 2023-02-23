import React, { useState, useEffect, useContext } from "react";
import { foods } from "./variables";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [displayedFood, setDisplayedFood] = useState(foods);

  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setPageLoading(false);
    };
    window.addEventListener("load", handleLoad);
  }, []);

  useEffect(() => {
    const cartItems = cart.reduce((acc, food) => {
      const existingItemIndex = acc.findIndex((item) => item.id === food.id);
      if (existingItemIndex !== -1) {
        acc[existingItemIndex].quantity++;
      } else {
        acc.push({ ...food, quantity: 1 });
      }
      return acc;
    }, []);
    setUniqueCartItems(cartItems);
  }, [cart]);

  useEffect(() => {
    const cartItems = cart.reduce((acc, food) => {
      const existingItemIndex = acc.findIndex((item) => item.id === food.id);
      if (existingItemIndex !== -1) {
        acc[existingItemIndex].quantity++;
      } else {
        acc.push({ ...food, quantity: 1 });
      }
      return acc;
    }, []);
    setUniqueCartItems(cartItems);
  }, [cart]);

  const [uniqueCartItems, setUniqueCartItems] = useState([]);

  return (
    <AppContext.Provider
      value={{
        cart,
        setCart,
        uniqueCartItems,
        setUniqueCartItems,
        displayedFood,
        setDisplayedFood,
        pageLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
