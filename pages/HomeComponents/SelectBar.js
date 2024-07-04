import React from 'react'
import Link from 'next/link'

const SelectBar = () => {
  return (
    <div className="bg-[rgb(13,202,240,0.5)]   mx-auto">
      <div className="container flex flex-row justify-between py-7 w-11/12 items-center mx-auto  lg:gap-5  text-xl xl:gap-6 ">
        {/* ONE */}

        <div className=" p-2  bg-white rounded-md">
          <select
            name=""
            id=""
            className="bg-transparent text-[23px]"
          >
            <option value="" id="">
              Select job Type
            </option>
          </select>
        </div>
        {/* TWO */}
        <div className=" p-2 bg-white rounded-md">
          <select
            name=""
            id=""
            className="bg-transparent text-[23px]"
          >
            <option value="" id="">
              Select job Type
            </option>
          </select>
        </div>

        {/* THREE */}

        <div className=" p-2 bg-white rounded-md">
          <select
            name=""
            id=""
            className="bg-transparent text-[23px]"
          >
            <option value="" id="">
              Select job Type
            </option>
          </select>
        </div>
        {/* FOUR */}
       <div className=" p-2 bg-white rounded-md">
          <select
            name=""
            id=""
            className="bg-transparent text-[23px]"
          >
            <option value="" id="">
              Select job Type
            </option>
          </select>
        </div>

        
          <Link
            href="/joblisting"
            className="btn bg-[#0dcaf0] rounded-md p-2 text-white text-[23px]"
          >
            Find Jobs
          </Link>
        
      </div>
    </div>
  );
}

export default SelectBar