import React from "react";
import { Hero, HeadLineCards, Food, Footer, Navbar } from "../components";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <HeadLineCards />
      <Food />
      <Footer />
    </div>
  );
};

export default Home;
