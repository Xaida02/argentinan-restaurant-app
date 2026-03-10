import React from "react";

const LoadingOverlay = () => {
  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center gap-6">
      {/* Logo */}
      <h1 className="text-3xl text-argBlue font-light select-none">
        Resto <span className="font-black text-argYellow">Ferro</span>
      </h1>

      {/* Animated bar */}
      <div className="w-[160px] h-[3px] bg-gray-100 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-argBlue to-argYellow rounded-full animate-loading-bar" />
      </div>

      <p className="text-gray-400 text-xs tracking-[0.3em] uppercase">
        Loading
      </p>
    </div>
  );
};

export default LoadingOverlay;
