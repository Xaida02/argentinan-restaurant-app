import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdAccessTime } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";

const Hero = () => {
  const scrollToMenu = () => {
    const el = document.getElementById("foods");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="max-w-[1200px] xl:max-w-[1640px] mx-auto px-4 mt-20 pb-2">
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{ height: "420px" }}
      >
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1529694157872-4e0c0f3b238b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="Asado argentino"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Decorative vertical line */}
        <div className="absolute left-[8%] top-[12%] bottom-[20%] w-px bg-argYellow/30 hidden lg:block" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-14 lg:px-[10%] pb-14">
          {/* Eyebrow */}
          <div className="hero-line-1 flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-argYellow" />
            <p className="text-argYellow text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase">
              Albuquerque's Finest
            </p>
          </div>

          {/* Headline */}
          <h1 className="font-black leading-none tracking-tight">
            <span className="hero-line-2 block text-4xl sm:text-5xl lg:text-6xl text-white">
              The <span className="text-argBlue italic">Best</span>
            </span>
            <span className="hero-line-3 block text-4xl sm:text-5xl lg:text-6xl text-argYellow mt-1">
              Argentinian
            </span>
            <span className="hero-line-4 block text-4xl sm:text-5xl lg:text-6xl text-white mt-1">
              Foods
            </span>
          </h1>

          {/* Subtext + CTA */}
          <div className="hero-line-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6">
            <p className="text-gray-300 text-xs sm:text-sm max-w-[240px] leading-relaxed border-l-2 border-argYellow/40 pl-3">
              Authentic flavors straight from Buenos Aires to your table.
            </p>
            <button
              onClick={scrollToMenu}
              className="shrink-0 bg-argYellow hover:bg-yellow-300 active:scale-95 transition-all duration-200 text-black font-black text-sm px-6 py-3 rounded-full shadow-lg tracking-wide"
            >
              Explore the Menu
            </button>
          </div>
        </div>

        {/* Bottom info strip */}
        <div className="absolute bottom-0 left-0 right-0 z-10 bg-black/40 backdrop-blur-sm border-t border-white/10 px-8 sm:px-14 lg:px-[10%] py-3 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <TbTruckDelivery size={16} className="text-argBlue shrink-0" />
              <span className="text-white/80 text-xs font-medium hidden sm:inline">
                Free delivery
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MdAccessTime size={16} className="text-argBlue shrink-0" />
              <span className="text-white/80 text-xs font-medium hidden sm:inline">
                30 min avg
              </span>
            </div>
            <div className="flex items-center gap-2">
              <AiFillStar size={16} className="text-argYellow shrink-0" />
              <span className="text-white/80 text-xs font-medium hidden sm:inline">
                4.9 rating
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/70 text-xs">Open now</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
