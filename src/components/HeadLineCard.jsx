import React from "react";

const HeadLineCard = ({ h4, paragraph, img }) => {
  return (
    <div className="rounded-xl relative">
      {/* Overlay */}
      <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
        <h4 className="font-bold text-2xl px-2 pt-4 text-argYellow drop-shadow-xl">
          {h4}
        </h4>
        <p className="px-2">{paragraph}</p>
        <button className="border-white text-black bg-white mx-2 absolute bottom-4 py-2 px-4 font-semibold rounded-full">
          Order Now!
        </button>
      </div>
      <img
        className="max-h-[160px] md:max-h-[200px] w-full object-cover bg-center rounded-xl"
        src={img}
        alt="food"
      />
    </div>
  );
};

export default HeadLineCard;
