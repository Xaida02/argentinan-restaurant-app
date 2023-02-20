import React from "react";
import { socialLinks } from "../variables";

const Footer = () => {
  return (
    <footer
      className="w-full mt-8 bg-white text-black px-4 py-16 grid lg:grid-cols-3 gap-6 relative
      shadow-[-2px_-2px_5px_rgb(0,0,0,0.15)]
      "
    >
      <div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 text-argBlue select-none">
          Resto <span className="font-bold text-argYellow">Ferro</span>
        </h1>
        <p className="py-4">
          Experience the rich flavors and vibrant culture of Argentina at Resto
          Ferro. From sizzling meats and savory empanadas to sweet dulce de
          leche, our menu is a celebration of traditional Argentine cuisine.
          Come and indulge in the warm, inviting atmosphere of our restaurant
          and discover a taste of Buenos Aires in the heart of Albuquerque.
        </p>
        <div className="md:w-[80%] mx-auto my-6 flex justify-between">
          {socialLinks.map((link, i) => (
            <a
              className="cursor-pointer text-gray-700 hover:scale-125 hover:text-gray-900 duration-300"
              key={i}
              href={link.url}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div className="text-left">
          <h6 className="font-medium text-black">Vision</h6>
          <ul className="text-gray-700">
            <li className="py-2 cursor-pointer text-sm  duration-100 hover:text-black">
              Mission
            </li>
            <li className="py-2 cursor-pointer text-sm  duration-100 hover:text-black">
              History
            </li>
            <li className="py-2 cursor-pointer text-sm  duration-100 hover:text-black">
              Team
            </li>
            <li className="py-2 cursor-pointer text-sm  duration-100 hover:text-black">
              Contact
            </li>
          </ul>
        </div>
        <div className="text-left">
          <h6 className="font-medium text-black">Topics</h6>
          <ul className="text-gray-700">
            <li className="py-2 cursor-pointer text-sm  duration-100 hover:text-black">
              Sustain
            </li>
            <li className="py-2 cursor-pointer text-sm  duration-100 hover:text-black">
              Works
            </li>
            <li className="py-2 cursor-pointer text-sm  duration-100 hover:text-black">
              maiores
            </li>
            <li className="py-2 cursor-pointer text-sm  duration-100 hover:text-black">
              FAQ
            </li>
          </ul>
        </div>
        <div className="text-left">
          <h6 className="font-medium text-black">Support</h6>
          <ul className="text-gray-700">
            <li className="py-2 cursor-pointer text-sm  duration-100 hover:text-black">
              Contact
            </li>
            <li className="py-2 cursor-pointer text-sm  duration-100 hover:text-black">
              Center
            </li>
            <li className="py-2 cursor-pointer text-sm  duration-100 hover:text-black">
              Forums
            </li>
            <li className="py-2 cursor-pointer text-sm  duration-100 hover:text-black">
              Nami
            </li>
          </ul>
        </div>
        <div className="text-left">
          <h6 className="font-medium text-black">Legal</h6>
          <ul className="text-gray-700">
            <li className="py-2 cursor-pointer text-sm  duration-100 hover:text-black">
              Terms
            </li>
            <li className="py-2 cursor-pointer text-sm  duration-100 hover:text-black">
              Privacy
            </li>
            <li className="py-2 cursor-pointer text-sm  duration-100 hover:text-black">
              Cookies
            </li>
            <li className="py-2 cursor-pointer text-sm  duration-100 hover:text-black">
              Poison
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
