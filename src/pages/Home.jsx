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
    <>
      {pageLoading && <LoadingOverlay />}
      <Navbar />
      <Hero />
      <HeadLineCards />
      <Food />
      <Footer />
    </>
  );
};

export default Home;
