import React from "react";
import {
  Hero,
  HeadLineCards,
  Food,
  Footer,
  Navbar,
  LoadingOverlay,
} from "../components";
import { useGlobalContext } from "../context";

const Home = () => {
  const { pageLoading } = useGlobalContext();
  return (
    <div className="">
      {pageLoading && <LoadingOverlay />}
      <Navbar />
      <Hero />
      <HeadLineCards />
      <Food />
      <Footer />
    </div>
  );
};

export default Home;
