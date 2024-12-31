import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="text-center border-t-2 flex justify-around items-center h-14 mt-3  bg-black text-white rounded-xl">
      <h1>Copyright 2024</h1>
      <h1 className="">
        Created By <b>Zohaib</b>
      </h1>

      <div className="grid grid-cols-3 h-[30px]">
        <Link className=" hover:opacity-70" href="">
          <Image
            src="/Facebook logo.png"
            width={20}
            height={500}
            alt="Background img"
            className="ml-2 w-[30px]"
          />
        </Link>
        <Link className=" hover:opacity-70" href="">
          <Image
            src="/insta logo.png"
            width={30}
            height={500}
            alt="Background img"
            className="w-[38px]"
          />
        </Link>
        <Link className=" hover:opacity-70" href="">
          <Image
            src="/Twitter logo.png"
            width={30}
            height={500}
            alt="Background img"
            className="w-[30px]"
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
