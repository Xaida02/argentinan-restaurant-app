import React from "react";
import HeadLineCard from "./HeadLineCard";

const HeadLineCards = () => {
  return (
    <div className="max-w-[1200px] xl:max-w-[1640px] my-10 mx-auto px-4 pb-12">
      {/* Section header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-8 h-px bg-argYellow" />
        <p className="text-argYellow text-xs font-bold tracking-[0.3em] uppercase">
          Featured
        </p>
        <div className="flex-1 h-px bg-gray-100" />
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        <HeadLineCard
          number="01"
          tag="Through 8/26"
          h4="Sun's Out, Asado it's Done"
          img="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"
          accent="argYellow"
        />
        <HeadLineCard
          number="02"
          tag="Added Daily"
          h4="New Restaurants Near You"
          img="https://cdn.pixabay.com/photo/2016/01/02/00/44/empanadas-1117284_960_720.jpg"
          accent="argBlue"
          featured
        />
        <HeadLineCard
          number="03"
          tag="Tasty Treats"
          h4="We Deliver Desserts Too"
          img="https://assets.epicurious.com/photos/628d1b07fa016bab2139efa6/4:3/w_3955,h_2966,c_limit/Chocotorta%E2%80%94RECIPE.jpg"
          accent="argYellow"
        />
      </div>
    </div>
  );
};

export default HeadLineCards;
