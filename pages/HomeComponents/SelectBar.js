import React from 'react'
import Link from 'next/link'

const SelectBar = () => {
  return (
    <div className="bg-[rgb(13,202,240,0.5)] h-24 2xl:h-32 lg:w-11/12 mx-auto">
      <div className="container flex justify-center mx-auto mt-3 lg:gap-5 h-10 text-xl xl:gap-16 2xl:gap-20 ">
        {/* ONE */}

        <div className=" mt-7 2xl:mt-8 ">
          <select
            name=""
            id=""
            className="h-11 2xl:h-16 2xl:w-60 2xl:text-3xl rounded-md pl-2 text-[23px]"
          >
            <option value="" id="">
              Select job Type
            </option>
          </select>
        </div>
        {/* TWO */}
        <div className=" mt-7 2xl:mt-8">
          <select
            name=""
            id=""
            className="h-11 2xl:h-16 2xl:w-60 2xl:text-3xl rounded-md pl-2 text-[23px]"
          >
            <option value="" id="home-option-job">
              Select Industry
            </option>
          </select>
        </div>

        {/* THREE */}

        <div className=" mt-7 2xl:mt-8">
          <select
            name=""
            id=""
            className="h-11 2xl:h-16 2xl:w-60 2xl:text-3xl rounded-md pl-2 text-[23px]"
          >
            <option value="" id="home-option-job">
              Select Mode of Work
            </option>
          </select>
        </div>

        {/* FOUR */}
        <div className=" mt-7 2xl:mt-8">
          <select
            name=""
            id=""
            className="h-11 2xl:h-16 2xl:w-60 2xl:text-3xl rounded-md pl-2 text-[23px]"
          >
            <option value="" id="home-option-job">
              Select Location
            </option>
          </select>
        </div>

        <div className=" mt-7 text-center 2xl:mt-8 2xl:h-16 2xl:w-60 ">
          <Link
            href="/joblisting"
            className="btn w-20 bg-[#0dcaf0] mx-auto rounded-md p-2 text-white lg:block h-11 md:w-[120px] text-[23px] 2xl:h-16 2xl:w-60 2xl:text-3xl 2xl:p-3"
          >
            Find Jobs
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SelectBar