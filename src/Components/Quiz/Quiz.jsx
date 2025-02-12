import React from "react";

const OverlayImage = () => {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      {/* Background Image */}
      <img
        src="quizbg.png"
        alt="Background"
        className="w-full h-full object-cover rounded-2xl shadow-lg"
      />


      {/* Overlay Content */}
      <div className="absolute inset-0 right-0 bg-opacity-50 flex flex-col items-center justify-center text-center text-white p-6 rounded-2xl">

        {/* Title Text */}
        <button className="text-md font-medium mb-2 poppins px-3 py-1.5 bg-white text-black rounded-full">Coffee Quiz.</button>
        <h1 className="text-6xl font-medium mb-2 poppins text-neutral-800 alegreya">Find the brew for you</h1>


        {/* Description */}
        <p className="text-md font-extralight mb-4 max-w-md poppins text-black">
        We will set you up with your coffee match based on your palate and preferences. Kind of like a dating app, but for coffee.
        </p>

        {/* Button */}
        <button className="hover:bg-white border hover:text-black text-white bg-black poppins font-medium text-sm px-6 py-2 rounded-lg">
          Take Our Quiz
        </button>
      </div>
    </div>
  );
};

export default OverlayImage;
