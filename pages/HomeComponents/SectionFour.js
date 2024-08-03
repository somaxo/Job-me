import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const SectionFour = () => {
  return (
    <div className="section-four-bg   ">
      <div className="w-11/12 container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center py-6">
        <div className=" flex flex-col gap-3 justify-start items-start">
          <h2 className="font-semibold text-xl lg:text-2xl">
            Get Jobs that match your Qualifications and Skill Set
          </h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur. Dolor euismod mattis nulla
            aliquam a. In ac in ornare donec consectetur. Nam semper gravida
            enim dolor velit aliquam ut ac.
          </p>

          <Link
            href="/joblisting"
            className="btn bg-[#0dcaf0] text-white py-3 px-2 rounded-md  "
          >
            Discover More
          </Link>
        </div>

        <div className="hidden lg:block">
          <Image
            src="/man.png"
            width={400}
            height={400}
            alt="pointing man"
            className="lg:w-full lg:h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default SectionFour