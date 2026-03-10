import React, { useState, useEffect } from "react";

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      setVisible(scrollY > 400);
      setProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const r = 18;
  const circumference = 2 * Math.PI * r;
  const dashOffset = circumference - (progress / 100) * circumference;

  return (
    <button
      onClick={scrollTop}
      title="Back to top"
      className={`fixed bottom-6 right-6 z-30 w-[52px] h-[52px] flex items-center justify-center transition-all duration-500
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}
    >
      {/* Progress ring */}
      <svg
        width="52"
        height="52"
        className="absolute top-0 left-0 -rotate-90"
        viewBox="0 0 52 52"
      >
        {/* Track */}
        <circle
          cx="26"
          cy="26"
          r={r}
          fill="white"
          stroke="#e5e7eb"
          strokeWidth="3"
          className="drop-shadow-md"
        />
        {/* Progress */}
        <circle
          cx="26"
          cy="26"
          r={r}
          fill="transparent"
          stroke="#43A1D5"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          className="transition-all duration-100"
        />
      </svg>

      {/* Arrow icon */}
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className="relative z-10"
      >
        <path
          d="M8 12V4M4 7l4-4 4 4"
          stroke="#43A1D5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default ScrollTop;
