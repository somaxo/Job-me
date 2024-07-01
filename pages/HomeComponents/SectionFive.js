import React from 'react'
import Image from 'next/image';

const SectionFive = () => {
  return (
    <div className="container w-11/12 justify-center items-center mx-auto text-center mt-10 mb-10 2xl:mb-14">
      <div className="">
        <p className=" text-[#0DCAF0] md:text-xl">Testimonials</p>
        <h2 className="text-lg font-semibold md:text-2xl">
          Feedbacks from Clients
        </h2>
      </div>
      {/* BOXES */}
      <div className="grid grid-cols-1 lg:grid-cols-3 ">
        {/* ONE */}
        <div className="bg-[rgb(245,243,243,0.6)] text-[rgb(84,82,82)] rounded-xl h-80 mt-8 p-1 md:w-6/12 mx-auto md:h-96 md:text-lg lg:w-11/12 xl:text-xl 2xl:text-2xl">
          <div className="">
            <Image
              src="/img1.png"
              width={80}
              height={80}
              alt="image1"
              className="mx-auto mt-8 mb-3 lg:mt-6"
            />
            <p className="mb-3 mx-auto w-10/12 ">
              “Lorem ipsum dolor sit amet consectetur. Etiam elit nisl aliquam
              tempor purus ac. Vestibulum eu euismod enim elit. Nunc phasellus
              aliquet eu gravida massa vel.”
            </p>
            <span className="text-[#0DCAF0] italic">Alice Shata</span>
            <p className="">South Africa</p>
          </div>
        </div>

        {/* TWO */}
        <div className="hidden lg:block bg-[rgb(245,243,243,0.6)] text-[rgb(84,82,82)] rounded-xl h-80 mt-8 p-1 md:w-6/12 mx-auto md:h-96 md:text-lg lg:w-11/12 xl:text-xl 2xl:text-2xl">
          <div className="">
            <Image
              src="/img1.png"
              width={80}
              height={80}
              alt="image1"
              className="mx-auto mt-8 mb-3 lg:mt-6"
            />
            <p className="mb-3 mx-auto w-10/12 ">
              “Lorem ipsum dolor sit amet consectetur. Etiam elit nisl aliquam
              tempor purus ac. Vestibulum eu euismod enim elit. Nunc phasellus
              aliquet eu gravida massa vel.”
            </p>
            <span className="text-[#0DCAF0] italic">Alice Shata</span>
            <p className="">South Africa</p>
          </div>
        </div>
        {/* THREE */}
        <div className="hidden lg:block bg-[rgb(245,243,243,0.6)] text-[rgb(84,82,82)] rounded-xl h-80 mt-8 p-1 md:w-6/12 mx-auto md:h-96 md:text-lg lg:w-11/12 xl:text-xl 2xl:text-2xl">
          <div className="">
            <Image
              src="/img1.png"
              width={80}
              height={80}
              alt="image1"
              className="mx-auto mt-8 mb-3 lg:mt-6"
            />
            <p className="mb-3 mx-auto w-10/12 ">
              “Lorem ipsum dolor sit amet consectetur. Etiam elit nisl aliquam
              tempor purus ac. Vestibulum eu euismod enim elit. Nunc phasellus
              aliquet eu gravida massa vel.”
            </p>
            <span className="text-[#0DCAF0] italic">Alice Shata</span>
            <p className="">South Africa</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFive