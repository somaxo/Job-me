import React from "react";
import Image from "next/image";

const SectionTwo = () => {
  return (
    <div className="container w-11/12 h-full mx-auto justify-center items-center text-center text-xl font-semibold mt-7 lg:mt-10 2xl:mt-14">
      <h1 className="md:text-2xl lg:text-4xl 2xl:text-5xl">How It Works?</h1>
      <Image
        src="/works.png"
        alt=""
        className="mt-4 lg:mx-auto lg:w-[1000px] 2xl:mt-7"
        width={700}
        height={700}
      />
    </div>
  );
};

export default SectionTwo;
