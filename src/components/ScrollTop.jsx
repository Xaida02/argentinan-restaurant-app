import React, { useState, useEffect } from "react";
import { BsChevronCompactUp } from "react-icons/bs";

const ScrollTop = () => {
  const [showBackToTopButton, setShowBackToTopButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setShowBackToTopButton(true);
    } else {
      setShowBackToTopButton(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={scrollTop}
      className="text-[white] flex justify-center items-center animate-bounce rounded fixed bottom-[10px] right-[25px] bg-argBlue w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] smooth-transition shadow-lg"
      style={{
        boxSHadow: "box-shadow: 0px 5px 20px 5px rgba(0, 0, 0, 0.5)",
        visibility: showBackToTopButton ? "visible" : "hidden",
      }}
    >
      <BsChevronCompactUp size={30} />
    </button>
  );
};

export default ScrollTop;
