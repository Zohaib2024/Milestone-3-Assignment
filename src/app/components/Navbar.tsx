import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className=" bg-gray-800 text-white lg:w-1/2 md:w-1/2 rounded-3xl p-3">
          <div className=" flex justify-center list-none gap-10 font-sans text-sm">
            <Link href="/">
              <li className="transition-transform duration-300 transform hover:scale-110 hover:text-gray-500">
                Home
              </li>
            </Link>
            <Link href="/blogs">
              <li className="transition-transform duration-300 transform hover:scale-110 hover:text-gray-500">
                Blogs
              </li>
            </Link>
            <Link href="/Contact">
              <li className="transition-transform duration-300 transform hover:scale-110 hover:text-gray-500">
                Contact
              </li>
            </Link>
            <Link href="About">
              <li className="transition-transform duration-300 transform hover:scale-110 hover:text-gray-500">
                About us
              </li>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
