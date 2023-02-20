import { AiFillTag } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { BsFillSaveFill } from "react-icons/bs";
import {
  FaUserFriends,
  FaWallet,
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

// Links of the side menu

export const menuLinks = [
  { name: "Orders", icon: <TbTruckDelivery size={25} className="mr-4" /> },
  { name: "Favorites", icon: <MdFavorite size={25} className="mr-4" /> },
  { name: "Wallet", icon: <FaWallet size={25} className="mr-4" /> },
  { name: "Help", icon: <MdHelp size={25} className="mr-4" /> },
  { name: "Promotions", icon: <AiFillTag size={25} className="mr-4" /> },
  { name: "Best Ones", icon: <BsFillSaveFill size={25} className="mr-4" /> },
  {
    name: "Invite Friends",
    icon: <FaUserFriends size={25} className="mr-4" />,
  },
];

// social media links

export const socialLinks = [
  {
    name: "Facebook",
    icon: <FaFacebookSquare size={30} />,
    url: "/",
  },
  {
    name: "Instagram",
    icon: <FaInstagram size={30} />,
    url: "/",
  },
  {
    name: "Twitter",
    icon: <FaTwitter size={30} />,
    url: "/",
  },
  {
    name: "Github",
    icon: <FaGithub size={30} />,
    url: "/",
  },
];

// Foods object array

export const foods = [
  {
    id: 1,
    name: "Empanadas",
    description: "Fried or baked pastry with various fillings",
    price: 3.5,
    category: ["Appetizer", "Pastry", "Savory"],
    image: "./assets/1.jpg",
  },
  {
    id: 2,
    name: "Chimichurri Steak",
    description: "Grilled steak with chimichurri sauce",
    price: 18.5,
    category: ["Entree", "Beef", "Savory"],
    image: "./assets/2.jpg",
  },
  {
    id: 3,
    name: "Milanesa",
    description: "Breaded and fried chicken or beef cutlets",
    price: 12.5,
    category: ["Entree", "Chicken", "Beef", "Savory"],
    image: "./assets/3.jpg",
  },
  {
    id: 4,
    name: "Asado",
    description: "Grilled meat platter with various cuts",
    price: 28.5,
    category: ["Entree", "Beef", "Pork", "Savory"],
    image: "./assets/4.jpg",
  },
  {
    id: 5,
    name: "Locro",
    description: "Hearty stew made with corn and meat",
    price: 10.5,
    category: ["Entree", "Stew", "Pork", "Savory"],
    image: "./assets/5.jpg",
  },
  {
    id: 6,
    name: "Matambre",
    description: "Stuffed and rolled flank steak",
    price: 16.5,
    category: ["Entree", "Beef", "Savory"],
    image: "./assets/6.jpg",
  },
  {
    id: 7,
    name: "Pasta Flora",
    description: "Sweet pie with various fruit fillings",
    price: 8.5,
    category: ["Entree", "Pastry", "Sweet"],
    image: "./assets/7.jpg",
  },
  {
    id: 8,
    name: "Provoleta",
    description: "Grilled provolone cheese",
    price: 7.5,
    category: ["Appetizer", "Cheese", "Savory"],
    image: "./assets/8.jpg",
  },
  {
    id: 9,
    name: "Ensalada Rusa",
    description: "Potato salad with vegetables and mayonnaise",
    price: 6.5,
    category: ["Salad", "Vegetarian", "Savory"],
    image: "./assets/9.jpg",
  },
  {
    id: 10,
    name: "Mollejas",
    description: "Grilled sweetbreads",
    price: 9.5,
    category: ["Appetizer", "Offal", "Savory"],
    image: "./assets/10.jpg",
  },
  {
    id: 11,
    name: "Dulce de Leche Pancakes",
    description: "Pancakes with dulce de leche sauce",
    price: 9.5,
    category: ["Dessert", "Sweet"],
    image: "./assets/11.jpg",
  },
  {
    id: 12,
    name: "Alfajores",
    description: "Cookies with dulce de leche filling",
    price: 3.5,
    category: ["Dessert", "Pastry", "Sweet"],
    image: "./assets/12.jpg",
  },
  {
    id: 13,
    name: "Fainá",
    description: "Chickpea flatbread typically served with pizza",
    price: 5.5,
    category: ["Appetizer", "Gluten-free", "Savory"],
    image: "./assets/13.jpg",
  },
  {
    id: 14,
    name: "Carbonada",
    description: "Hearty beef and vegetable stew",
    price: 14.5,
    category: ["Entree", "Stew", "Beef", "Savory"],
    image: "./assets/14.jpg",
  },
  {
    id: 15,
    name: "Churros",
    description: "Fried dough pastry dusted with sugar",
    price: 4.5,
    category: ["Dessert", "Pastry", "Sweet"],
    image: "./assets/15.jpg",
  },
  {
    id: 16,
    name: "Ñoquis",
    description: "Potato-based pasta usually served with sauce",
    price: 11.5,
    category: ["Entree", "Pasta", "Vegetarian", "Savory"],
    image: "./assets/16.jpg",
  },
  {
    id: 17,
    name: "Matambre a la pizza",
    description: "Flank steak with tomato sauce, cheese, and herbs",
    price: 20.5,
    category: ["Entree", "Beef", "Savory"],
    image: "./assets/17.jpg",
  },
];

// Categories array, it will return a string per category value

export const categories = () => {
  const uniqueCategories = new Set(foods.map((food) => food.category).flat());

  return [...uniqueCategories];
};

/*

 This function generates an array of dollar signs based on the unique prices of the foods.
 It adds one dollar sign for each increment of 10 in price, so that items with a price of 10 or less get one dollar sign, items with a price between 10 and 20 get two dollar signs, and so on. The resulting array will be used to render filter buttons for the food items.

*/

export const uniquePrices = () => {
  let prices = [...new Set(foods.map((item) => item.price))];
  let dollarSigns = prices.map((price) => {
    return "$".repeat(Math.floor(price / 10) + 1);
  });

  return [...new Set(dollarSigns)];
};
