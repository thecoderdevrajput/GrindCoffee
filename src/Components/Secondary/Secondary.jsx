import React from "react";

const OverlayImage = () => {
  return (
    <div className="relative w-full h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <img
        src="secondary.png"
        alt="Background"
        className="w-full h-full object-cover rounded-2xl shadow-lg"
      />


      {/* Overlay Content */}
      <div className="absolute inset-y-0 right-0 bg-opacity-50 flex flex-col items-center justify-center text-center text-white p-6 rounded-2xl">

        {/* Title Text */}
        <h1 className="text-3xl font-medium mb-2 poppins">Limited Edition</h1>

        {/* Logo */}
        <img src="grindx.png" alt="Logo" className=" h-12 mb-4" />

        

        {/* Description */}
        <p className="text-lg mb-4 max-w-md poppins">
        A limited edition collaboration that celebrates the light we find in the dark, bringing Sophy Hollingtons magical moonlit illustrations to Grind.
        </p>

        {/* Button */}
        <button className="bg-white hover:bg-[#F5DADF] border hover:text-pink-800 text-black poppins font-medium px-6 py-2 rounded-lg">
          Shop the Collab
        </button>
      </div>
    </div>
  );
};

export default OverlayImage;
