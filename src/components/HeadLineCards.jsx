import React from "react";
import HeadLineCard from "./HeadLineCard";

const HeadLineCards = () => {
  return (
    <div className="max-w-[1200px] xl:max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      <HeadLineCard
        h4="Sun's Out, Asado it's done"
        paragraph="Through 8/26"
        img="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"
      />
      <HeadLineCard
        h4="New Restaurants"
        paragraph="Added Daily"
        img="https://cdn.pixabay.com/photo/2016/01/02/00/44/empanadas-1117284_960_720.jpg"
      />
      <HeadLineCard
        h4="We Deliver Desserts Too"
        paragraph="Tasty Treats"
        img="https://assets.epicurious.com/photos/628d1b07fa016bab2139efa6/4:3/w_3955,h_2966,c_limit/Chocotorta%E2%80%94RECIPE.jpg"
      />
    </div>
  );
};
export default HeadLineCards;
