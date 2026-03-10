import React, { useState, useEffect } from "react";
import {
  Hero,
  HeadLineCards,
  Food,
  Footer,
  Navbar,
  LoadingOverlay,
} from "../components";

const Home = () => {
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setPageLoading(false), 900);
    // so folks get a chance to see the loading screen
    return () => clearTimeout(timer);
  }, []);

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
