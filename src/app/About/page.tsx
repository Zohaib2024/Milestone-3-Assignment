import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <title>About us</title>
      <div className="relative text-center">
        {/* Header */}
        <h1 className="absolute text-4xl md:text-6xl lg:text-7xl text-black font-extrabold top-5 md:top-10 left-1/2 transform -translate-x-1/2 z-10">
          About Us
        </h1>

        {/* Content Section */}
        <div className="relative bg-pink-400 rounded-xl shadow-2xl m-5 md:m-10 min-h-screen">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Column: Image */}
            <div className="relative">
              <Image
                src="/Handshake.jpg"
                width={500}
                height={500}
                alt="Handshake"
                className="w-full h-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-r-none"
              />
            </div>

            {/* Right Column: Text */}
            <div className="flex flex-col justify-center items-center p-5 md:p-10">
              <p className="text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
                debitis cum, laborum iusto hic magnam eligendi quidem natus aut,
                ullam corporis repudiandae deleniti animi ratione! We are
                dedicated to providing exceptional experiences and fostering
                meaningful connections.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
