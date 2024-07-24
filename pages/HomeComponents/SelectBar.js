import React from 'react'
import Link from 'next/link'

const SelectBar = () => {
  return (
    <div className="bg-[rgb(13,202,240,0.5)] mx-auto">
      <div className="container lg:flex lg:flex-row justify-between py-6 lg:py-7 lg:w-11/12 items-center mx-auto lg:gap-5 xl:gap-6">
        {/* ONE */}

        <div className="container flex justify-center mx-auto gap-4 w-10/12">
          <div className=" p-2  bg-white rounded-md text-center md:text-start w-6/12 ">
            <select
              name=""
              id=""
              className="bg-transparent lg:text-[20px] w-full"
            >
              <option value="" id="">
                Select job Type
              </option>
            </select>
          </div>
          {/* TWO */}
          <div className=" p-2 bg-white rounded-md text-center md:text-start w-6/12 ">
            <select
              name=""
              id=""
              className="bg-transparent lg:text-[20px] w-full"
            >
              <option value="" id="">
                Select job Type
              </option>
            </select>
          </div>
        </div>

        {/* THREE */}
        <div className="container flex justify-center mx-auto gap-4 my-3 w-10/12">
          <div className=" p-2 bg-white rounded-md text-center md:text-start w-6/12 ">
            <select
              name=""
              id=""
              className="bg-transparent lg:text-[20px] w-full"
            >
              <option value="" id="">
                Select job Type
              </option>
            </select>
          </div>
          {/* FOUR */}
          <div className=" p-2 bg-white rounded-md text-center md:text-start w-6/12 ">
            <select
              name=""
              id=""
              className="bg-transparent lg:text-[20px] w-full"
            >
              <option value="" id="">
                Select job Type
              </option>
            </select>
          </div>
        </div>
        <Link
          href="/joblisting"
          className="hidden lg:block btn bg-[#0dcaf0] hover:bg-cyan-400 rounded-md p-2 text-white text-[20px] w-3/12 text-center"
        >
          Find Jobs
        </Link>
      </div>
      <Link
        href="/joblisting"
        className=" lg:hidden btn flex justify-center mx-auto bg-[#0dcaf0] hover:bg-cyan-400 rounded-md p-2 text-white text-center lg:text-[20px] w-10/12 "
      >
        Find Jobs
      </Link>
    </div>
  );
}

export default SelectBar