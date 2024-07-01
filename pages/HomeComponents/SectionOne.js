import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const SectionOne = () => {
  return (
    <div className="section-one-bg-color ">
      <div className="container w-11/12  h-[770px] mx-auto pt-5 md:h-[580px] lg:h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:justify-between lg:items-center lg:gap-14 lg:mt-8 2xl:gap-20">
          <Image
            src="/four-people.png"
            alt=""
            className=" hidden lg:block 2xl:w-[600px]"
            width={450}
            height={450}
          />
          <div className=" mb-10 ">
            <h2 className="text-xl font-semibold mb-3 md:text-2xl lg:mt-7 lg:text-3xl 2xl:text-6xl 2xl:mb-10">
              Find Millions of job Opportunities Right for You!
            </h2>
            <p className="mb-6 md:text-lg lg:text-xl lg:mb-9 2xl:text-3xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In eius
              corrupti atque error, recusandae quidem esse voluptates nihil ea
              dignissimos quae et voluptatibus tempora natus ad possimus amet
              officia sed! Nulla amet beatae cum natus fuga illum accusantium
              voluptatibus, officiis deserunt atque repellat, ipsa nobis itaque
              obcaecati, repellendus consequatur quod.
            </p>

            <Link
              href="/joblisting"
              className="btn w-20 bg-[#0dcaf0] mx-auto rounded-md p-2 text-white md:w-[100px] lg:text-xl 2xl:text-3xl"
            >
              Discover More
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2  lg:w-full lg:justify-between lg:items-center lg:gap-14 2xl:gap-20">
          <div className="">
            <h2 className="text-xl font-semibold mb-3 md:text-2xl lg:mt-1 lg:text-3xl 2xl:text-6xl 2xl:mb-10">
              Find Millions of job Opportunities Right for You!
            </h2>
            <p className="mb-6 md:text-lg lg:text-xl lg:mb-9 2xl:text-3xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In eius
              corrupti atque error, recusandae quidem esse voluptates nihil ea
              dignissimos quae et voluptatibus tempora natus ad possimus amet
              officia sed! Nulla amet beatae cum natus fuga illum accusantium
              voluptatibus, officiis deserunt atque repellat, ipsa nobis itaque
              obcaecati, repellendus consequatur quod.
            </p>
            <Link
              href="/joblisting"
              className="btn w-20 bg-[#0dcaf0] mx-auto rounded-md p-2 text-white md:w-[100px] lg:text-xl 2xl:text-3xl"
            >
              Discover More
            </Link>
          </div>
          <Image
            src="/glasses-lady.png"
            alt=""
            className="hidden lg:block lg:mb-20 2xl:w-[600px]"
            width={450}
            height={450}
          />
        </div>
      </div>
    </div>
  );
}

export default SectionOne