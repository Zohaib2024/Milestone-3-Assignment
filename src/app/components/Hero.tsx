import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative mt-6  ">
      <title>Home</title>
      {/* Background Image */}
      <div className="relative shadow-2xl">
        <Image
          src="/bg.jpg"
          width={500}
          height={500}
          alt="Background img"
          className="w-full h-[450px] object-cover opacity-60 " // Adjust opacity
        />
      </div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
        <h1 className="text-black text-4xl md:text-6xl font-bold mb-4 ">
          Welcome to Our Platform
        </h1>
        <p className="text-black text-lg md:text-xl">
          Discover, Learn, and Explore with Us
        </p>
      </div>
    </div>
  );
};

export default Hero;
