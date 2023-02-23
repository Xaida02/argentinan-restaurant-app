import React from "react";
import { ImSpinner2 } from "react-icons/im";

const LoadingOverlay = () => {
  return (
    <div className="z-30 fixed w-screen p-8 h-screen overflow-hidden bg-white flex justify-center items-center">
      <div className="m-auto grid text-argBlue">
        <ImSpinner2 size={75} className="justify-self-center animate-spin" />
        <p className="p-4 text-lg tex-center text-argBlue font-semibold">
          Loading
        </p>
      </div>
    </div>
  );
};

export default LoadingOverlay;
