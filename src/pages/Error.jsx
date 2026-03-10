import React from "react";
import { Link } from "react-router-dom";
import { TbArrowLeft } from "react-icons/tb";

const Error = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top accent */}
      <div className="h-[3px] w-full bg-gradient-to-r from-argBlue via-argYellow to-argBlue" />

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 gap-6 text-center">
        {/* 404 */}
        <div className="relative select-none">
          <p className="text-[140px] sm:text-[180px] font-black leading-none text-gray-100">
            404
          </p>
          <p className="absolute inset-0 flex items-center justify-center text-2xl sm:text-3xl font-black text-gray-800">
            Page not found
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-px bg-argYellow" />
          <p className="text-gray-400 text-sm">
            This room it's only for staff only, go away!
          </p>
          <div className="w-8 h-px bg-argYellow" />
        </div>

        {/* CTA */}
        <Link
          to="/"
          className="flex items-center gap-2 bg-argBlue hover:bg-cyan-700 active:scale-95 transition-all duration-200 text-white font-bold text-sm px-6 py-3 rounded-full shadow-md group"
        >
          <TbArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform duration-150"
          />
          Back to Menu
        </Link>

        {/* Brand */}
        <p className="text-gray-300 text-sm">
          Resto <span className="font-bold text-argYellow">Ferro</span>
        </p>
      </div>
    </div>
  );
};

export default Error;
