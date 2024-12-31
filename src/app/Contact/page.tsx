import React from "react";
import Image from "next/image";

const ContactPage = () => {
  return (
    <>
      <title>Contact</title>
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen gap-8 p-5">
        {/* Left Column: Image */}
        <div className="flex justify-center items-center">
          <Image
            className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
            src="/Aboutimg.jpg"
            width={400}
            height={600}
            alt="Contact Us Image"
          />
        </div>

        {/* Right Column: Contact Form */}
        <div className="flex flex-col justify-center items-center px-5 md:px-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-center">
            Contact Us
          </h1>
          <div className="w-full max-w-md bg-white shadow-lg border-4 border-gray-300 rounded-2xl p-5 space-y-4">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-lg font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Write your message"
                rows={5}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button className="w-full bg-blue-600 text-white text-lg font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
