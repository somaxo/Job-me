import React from 'react'
import Image from 'next/image';

const ContactCard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 container justify-between items-center w-full mx-auto text-center my-12 lg:w-11/12">
      <div className="flex flex-col justify-center items-center mx-auto w-11/12 border-2 border-gray-200 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_3px] p-4 rounded-xl md:w-9/12 lg:w-[280px] lg:py-6 lg:px-5 ">
        <Image
          src="/tel-icon.png"
          width={70}
          height={60}
          alt="telephone icon"
          className=""
        />
        <h5 className="font-semibold text-lg my-1">Call Us</h5>
        <p className="mb-1">Lorem ipsum dolor sit amet.</p>
        <span className="text-[#0dcaf0]">+44567890239</span>
      </div>
      <div className="flex flex-col justify-center items-center mx-auto w-11/12 mt-4 lg:mt-0 border-2 border-gray-200 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_3px] p-4 rounded-xl md:w-9/12 lg:w-[280px] lg:py-6 lg:px-5">
        <Image
          src="/msg-icon.png"
          width={70}
          height={60}
          alt="telephone icon"
        />
        <h5 className="font-semibold text-lg my-1">Email Us</h5>
        <p className="mb-1">Lorem ipsum dolor sit amet.</p>
        <span className="text-[#0dcaf0]">comando22@gmail.com</span>
      </div>
      <div className="flex flex-col justify-center items-center mx-auto w-11/12 mt-4 lg:mt-0 border-2 border-gray-200 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_3px] p-4 rounded-xl md:w-9/12 lg:w-[280px] lg:py-6 lg:px-4">
        <Image
          src="/location-icon.png"
          width={70}
          height={60}
          alt="location icon"
        />
        <h5 className="font-semibold text-lg my-1">Location</h5>
        <p className="mb-1">Lorem ipsum dolor sit amet.</p>
        <span className="text-[#0dcaf0]">
          23 shinghai street Lagos, Nigeria
        </span>
      </div>
    </div>
  );
}

export default ContactCard