import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const SectionFour = () => {
  return (
    <div className="section-four-bg grid grid-cols-1 lg:grid-cols-2 lg:w-full lg:justify-between lg:items-center lg:gap-14 mx-auto lg:h-[400px]">
      <div className=" w-10/12 mx-auto h-64 md:h-56 lg:pl-6 lg:h-[550px]">
        <h2 className="font-semibold w-10/12 mt-4 mb-2 md:text-2xl md:mt-7 lg:mt-20 lg:text-2xl">
          Get Jobs that match your Qualifications and Skill Set
        </h2>
        <p className="mb-4 md:text-lg lg:text-xl">
          Lorem ipsum dolor sit amet consectetur. Dolor euismod mattis nulla
          aliquam a. In ac in ornare donec consectetur. Nam semper gravida enim
          dolor velit aliquam ut ac.
        </p>

        <Link
          href="/joblisting"
          className="btn w-20 bg-[#0dcaf0] mx-auto rounded-md p-2 text-white md:w-[100px] md:text-lg lg:text-xl 2xl:text-3xl"
        >
          Discover More
        </Link>
      </div>

      <div className="hidden lg:block lg:w-[495px] lg:mb-24">
        <Image
          src="/man.png"
          width={400}
          height={400}
          alt="pointing man"
          className="lg:w-full lg:h-full"
        />
      </div>
    </div>
  );
}

export default SectionFour