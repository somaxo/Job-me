import React from 'react'
import Image from 'next/image'
import Link from 'next/link';


const LargeCard = () => {
  return (
    <div className="container grid lg:grid-cols-4 justify-evenly items-center mx-auto w-11/12 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] mt-24 mb-12 p-7 lg:gap-36 ">
     
      <div className="flex justify-start items-center gap-3 w-60 ">
        <Image
          src="/google.png"
          width={65}
          height={65}
          alt="google icon"
          className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md p-2"
        />

        <div className="text-lg">
          <h4 className="font-semibold">Digital Marketer</h4>
          <p>Google</p>
        </div>
      </div>
      {/* FULL TIME DIV */}
      <div className="flex flex-col justify-start items-start gap-1 w-60">
        <span className="rounded-md bg-[#0dcaf024] text-[#0dcaf0] px-3 py-1.5">
          Full Time
        </span>
        <p className="flex justify-start items-center gap-1 text-gray-600 ">
          <Image src="/time.png" width={20} height={20} alt="clock" />
          Posted 24 hours ago
        </p>
      </div>
      {/* LOCATION DIV */}
      <div className="flex flex-col justify-start items-start gap-4 w-60">
        <p className="flex justify-start items-center gap-1 text-gray-600">
          <Image src="/location.png" width={20} height={20} alt="location" />
          United Kingdom
        </p>
        <p className="font-medium ml-1">$ 30k - 35k</p>
      </div>
      {/* BUTTON DIV */}

      <Link
        href="/joblisting/details-1"
        className=" btn bg-[#0dcaf0] mx-auto rounded-xl px-3 py-3 text-white text-lg text-center "
      >
        Apply Now
      </Link>
    </div>
  );
}

export default LargeCard