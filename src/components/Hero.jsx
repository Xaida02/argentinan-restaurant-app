import React from "react";

const Hero = () => {
  return (
    <section className="my-[80px] max-w-[1200px] xl:max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        <div className="w-full bg-black/50 h-full text-gray-200 font-bold flex flex-col justify-center absolute max-h-[500px] rounded-xl">
          <h1 className="px-4 text-4xl sm:text-5xl lg:text-6xl xl:text:7xl drop-shadow-md">
            The<span className="text-argBlue"> Best</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl lg:text-6xl xl:text:7xl drop-shadow-md">
            <span className="text-argYellow">Argentinian </span>Foods
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1529694157872-4e0c0f3b238b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="Asado"
        />
      </div>
    </section>
  );
};

export default Hero;
