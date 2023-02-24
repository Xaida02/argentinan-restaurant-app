import React, { useState } from "react";
import {
  Hero,
  HeadLineCards,
  Food,
  Footer,
  Navbar,
  LoadingOverlay,
} from "../components";

const Home = () => {
  const [pageLoading, setPageLoading] = useState(false);

  if (pageLoading) {
    setPageLoading(false);
  }

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
