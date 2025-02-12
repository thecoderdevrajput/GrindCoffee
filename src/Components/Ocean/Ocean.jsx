import React from "react";

const OverlayVideo = () => {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      {/* Background Image */}
      <video className="h-full w-full object-cover" loop autoPlay muted playsInline>
      <source src="ocean.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  


      {/* Overlay Content */}
      <div className="absolute inset-0 right-0 bg-opacity-50 flex flex-row items-center justify-center text-white p-6 rounded-2xl">

        {/* Title Text */}
        <div className="justify-center justify-items-center">
        <div className="flex gap-1">
            <h1 className="py-3 px-2 bg-white text-black poppins text-4xl font-semibold">6</h1>
            <h1 className="py-3 px-2 bg-white text-black poppins text-4xl font-semibold">,</h1>
            <h1 className="py-3 px-2 bg-white text-black poppins text-4xl font-semibold">8</h1>
            <h1 className="py-3 px-2 bg-white text-black poppins text-4xl font-semibold">2</h1>
            <h1 className="py-3 px-2 bg-white text-black poppins text-4xl font-semibold">5</h1>
        </div>
        <div className="">
        <h1 className="text-md text-white font-semibold mb-2 poppins mt-5 mr-5 shadow-inner">kg of ocean-bound plastic recovered so far in 2024.</h1>
        </div>
        </div>


            <div className="bg-white poppins h-[400px] w-96 p-8">
        <h1 className="text-5xl font-semibold text-black alegreya">
        Better Coffee Foundation®
        </h1>
        
        <p className="text-md font-extralight mb-4 max-w-md poppins text-black pt-2">
        In 2023, we set up our own charitable foundation, the Better Coffee Foundation®, as a commitment to undoing the damage caused by the global coffee industry. Now in 2024, we are doing more—recovering ocean-bound plastic for every pod, can, and cup we sell.
        </p>

        {/* Button */}
        <button className="hover:bg-white border hover:text-black text-white bg-black poppins font-medium text-sm px-6 py-2 rounded-lg pt-1">
          Find out more.
        </button>
        </div>
      </div>
    </div>
  );
};

export default OverlayVideo;
