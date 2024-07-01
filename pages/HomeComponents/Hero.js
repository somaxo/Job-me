import Image from "next/image";
import React from "react";
import Link from "next/link";
import SelectBar from "./SelectBar";

const Hero = () => {
  return (
    <>
      <div className="bg-img">
        <div>
          <h1 className="text-white text-2xl lg:text-4xl m-auto lg:w-[600px] container text-center pt-6 md:p-6 md:w-7/12 md:h-24 lg:pt-36 lg:pb-28 2xl:text-6xl 2xl:w-5/12 2xl:pt-12 2xl:mb-20 2xl:leading-tight ">
            SECURE JOBS AS AN AMAZING TALENT!
          </h1>
        </div>
        <div className="flex justify-center items-center pt-2 md:pt-0 md:text-lg text-center ">
          <Link
            href="/joblisting"
            className="btn w-20 bg-[#0dcaf0] mx-auto rounded-md p-2 text-white lg:hidden md:w-[100px] "
          >
            Find Jobs
          </Link>
        </div>
        <div className="hidden lg:block">
          <SelectBar />
        </div>
      </div>
    </>
  );
};

export default Hero;
