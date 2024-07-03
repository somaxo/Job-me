import React from 'react'
import Link from 'next/link';


const index = () => {
  return (
    <div className="mt-1 mb-20">
      <form className=" bg-[#DBF7FD] container lg:w-9/12 mx-auto justify-center items-center  text-gray-500 text-left rounded-lg p-2 py-4">
        <div className="w-11/12 lg:w-11/12 lg:mt-5 mx-auto">
          {/* BREAKPOINT ONE */}
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:justify-between lg:items-center lg:gap-8 md:mt-4">
            <div>
              <p>First name*</p>
              <input
                className="w-full lg:text-sm m-auto px-2 py-2 lg:py-[6px] mb-3 text-black bg-white border border-gray-400 rounded-md lg:rounded-lg placeholder:text-gray-400 outline-gray-500"
                type="text"
                placeholder=""
                id=""
              />
            </div>

            <div>
              <p>Last name*</p>
              <input
                className="w-full lg:text-sm m-auto px-2 py-2 lg:py-[6px] mb-3 text-black bg-white border border-gray-400 rounded-md lg:rounded-lg placeholder:text-gray-400 outline-gray-500"
                type="text"
                placeholder=""
                id=""
              />
            </div>
          </div>
          {/* BREAKPOINT TWO */}
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:justify-between lg:items-center lg:gap-8 lg:mt-5">
            <div>
              <p>Email address*</p>
              <input
                className="w-full lg:text-sm m-auto px-2 py-2 lg:py-[6px] mb-3 text-black bg-white border border-gray-400 rounded-md lg:rounded-lg placeholder:text-gray-400 outline-gray-500"
                type="email"
                placeholder=""
                id=""
              />
            </div>
            <div>
              <p>Phone number*</p>
              <input
                className="w-full lg:text-sm m-auto px-2 py-2 lg:py-[6px] mb-3 text-black bg-white border border-gray-400 rounded-md lg:rounded-lg placeholder:text-gray-400 outline-gray-500"
                type="tel"
                placeholder=""
                id=""
              />
            </div>
          </div>
          {/* TEXT AREA */}
          <p>Cover letter*</p>
          <div className="w-full lg:text-sm m-auto px-2 py-3 lg:mt-5 lg:py-2 mb-3 text-black bg-white border border-gray-400 rounded-md lg:rounded-lg placeholder:text-gray-400 outline-gray-500">
            <textarea
              name=""
              id=""
              className="w-full h-32 lg:h-24 outline-none"
              placeholder=""
            ></textarea>
          </div>
          {/* AGREE & UPLOAD DOC */}
          <div className="container mt-6">
            <p className="">Upload CV/Resume*</p>
            <input
              type="file"
              placeholder="No file chosen"
              className="container mt-2 bg-white"
            />
            <div className="font-semibold text-black mt-3 ">
              <p className="">File type should not be longer than 12MB.</p>
              <p className="mt-2">Supported file types: doc. docx. pdf.</p>
            </div>
          </div>
          <div className="checkbox-jobapplication container">
            <input type="checkbox" id="agree" />
            <label htmlFor="" className="ml-1 my-4">
              I agree to the <span className='text-[#0dcaf0]'>Terms & Conditions</span>
            </label>
          </div>

          {/* SUBMIT BUTTON */}
          <Link
            href="/"
            className="container justify-center items-center btn w-24 py-2 lg:py-2 lg:mt-8 text-sm my-6 font-light bg-[#0dcaf0] mx-auto rounded-md lg:rounded-lg p-2 text-white lg:text-lg "
          >
            Apply Now
          </Link>
        </div>
      </form>
    </div>
  );
}

export default index