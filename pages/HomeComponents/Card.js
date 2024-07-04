import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Card = () => {
  return (
    <div>
      <div className="container mx-auto justify-center w-11/12 h-[400px]">
        <div className="border rounded-t-lg w-72 h-80 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5 mx-auto md:w-80">
          <h3 className="font-semibold mb-2 text-xl md:text-[22px]">Digital Marketer</h3>
          <p className="flex ">
            <Image
              src="/black-clock.png"
              width={15}
              height={15}
              alt="clock"
              className="mr-1"/>
            Posted 24 hours ago
          </p>
          <div className="flex justify-between mt-3 mb-3">
            <span className="bg-[#0dcaf0af] mb-1 text-white w-18 rounded-md p-1 ">
              Full Time
            </span>
            <p className='font-medium'>$ 30k - 35k</p>
          </div>
          <hr className="" />
          <div className="flex mb-7">
            <Image
              src="/google.png"
              width={60}
              height={60}
              alt="google icon"
              className=" shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-2 rounded-md mt-4"
            />
            <div className="ml-3 mt-3">
              <h4>Google</h4>
              <p className="flex">
                <Image
                  src="/location.png"
                  width={18}
                  height={13}
                  alt="location icon"
                />
                United Kingdom
              </p>
            </div>
          </div>
          <Link
            href="/joblisting"
            className="btn w-20 bg-[#0dcaf0] mx-auto rounded-md p-2 text-white md:w-[100px] lg:text-xl"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card