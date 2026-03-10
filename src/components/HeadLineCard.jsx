import React from "react";

const HeadLineCard = ({ number, tag, h4, img, featured }) => {
  return (
    <div
      className={`group relative rounded-2xl overflow-hidden cursor-pointer
      ${featured ? "md:scale-[1.03] md:shadow-2xl" : "shadow-md"}
      hover:shadow-2xl hover:-translate-y-1 transition-all duration-500`}
      style={{ aspectRatio: "4/3" }}
    >
      {/* Image */}
      <img
        src={img}
        alt={h4}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 transition-all duration-500 group-hover:from-black/95" />

      {/* Featured badge */}
      {featured && (
        <div className="absolute top-4 left-4 z-10 bg-argBlue text-white text-[10px] font-black px-3 py-1 rounded-full tracking-widest uppercase shadow-lg">
          ★ Featured
        </div>
      )}

      {/* Number — top right */}
      <div className="absolute top-4 right-4 z-10 text-white/20 font-black text-5xl leading-none select-none group-hover:text-white/10 transition-all duration-500">
        {number}
      </div>

      {/* Content — bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
        {/* Tag */}
        <div className="flex items-center gap-2 mb-2">
          <div className="w-4 h-px bg-argYellow" />
          <p className="text-argYellow text-[10px] font-bold tracking-[0.25em] uppercase">
            {tag}
          </p>
        </div>

        {/* Title */}
        <h4 className="text-white font-black text-lg leading-tight mb-4 drop-shadow-lg">
          {h4}
        </h4>

        {/* CTA */}
        <button className="flex items-center gap-2 text-sm font-bold text-black bg-white hover:bg-argYellow active:scale-95 transition-all duration-200 px-5 py-2 rounded-full shadow-md">
          Order Now
          <span className="text-xs transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>
    </div>
  );
};

export default HeadLineCard;
