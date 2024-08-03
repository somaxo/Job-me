import { IoChevronForwardOutline } from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
import { GoClock } from "react-icons/go";
import { SlLocationPin } from "react-icons/sl";
import { useRef } from "react";
import { formatDistanceToNow } from "date-fns";

const JobCardSwiper = ({ recentJobs }) => {
  console.log(recentJobs);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Remove default arrows
  };

  const sliderRef = useRef(null);

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="py-10 ">
      <Slider ref={sliderRef} {...settings}>
        {recentJobs.map((recent) => (
          <div key={recent._id} className="px-2 relative">
            {/* <div className="rounded-t-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-6 py-8 mx-auto mt-5">
              <h1 className="text-xl font-semibold">{job.title}</h1>
              <div className="flex gap-2 items-center mt-4">
                <GoClock className="icon-color" size={20} />
                <p className="text-gray-600">Posted 24 hours ago</p>
              </div>
              <div className="flex justify-between mt-4 pr-5">
                <div className="rounded px-1 py-1 bg-[#0DCAF01F]">
                  <p className="text-[#0dcaf0] text-xs">{job.employmentType}</p>
                </div>
                <div>
                  <p>{job.salary}</p>
                </div>
              </div>
              <hr className="mt-4" />
              <div className="flex items-center gap-4 mt-4">
                <div className="flex justify-center items-center p-2 rounded shadow-md">
                  <Image
                    src={job.logoUrl}
                    width={35}
                    height={55}
                    alt="Company logo"
                  />
                </div>
                <div>
                  <h1 className="text-lg font-semibold">{job.company}</h1>
                  <div className="flex items-center gap-2">
                    <SlLocationPin className="text-gray-600" />
                    <p className="text-gray-600">{job.location}</p>
                  </div>
                </div>
              </div>
              <div className="mt-7">
                <Link
                  href={`/joblist/${job._id}`}
                  className="btn-color text-white p-2 px-6 rounded-lg hover:bg-[#01c0e6] ease-in-out duration-500"
                >
                  Apply Now
                </Link>
              </div>
            </div> */}
            <div className=" rounded-t-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-6 py-8 mx-auto mt-5">
              <h3 className="font-semibold mb-2 text-xl md:text-[22px]">
                {recent.title}
              </h3>
              <p className="flex justify-start items-center">
                <Image
                  src="/black-clock.png"
                  width={15}
                  height={15}
                  alt="clock"
                  className="mr-1"
                />
                Posted {""}
                {formatDistanceToNow(new Date(recent.createdAt), {
                  addSuffix: true,
                })}
              </p>
              <div className="flex justify-between mt-3 mb-3">
                <span className="bg-[#0dcaf0af] mb-1 text-white w-18 rounded-md p-1 ">
                  {recent.employmentType}
                </span>
                <p className="font-medium">{recent.salary}</p>
              </div>
              <hr className="" />
              <div className=" flex mb-7">
                <Image
                  src={recent.logoUrl}
                  width={60}
                  height={60}
                  alt="google icon"
                  className=" shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-2 rounded-md mt-4"
                />
                <div className="ml-3 mt-3">
                  <h4>{recent.company}</h4>
                  <p className="flex justify-start items-center">
                    <Image
                      src="/location.png"
                      width={18}
                      height={13}
                      alt="location icon"
                    />
                    {recent.location}
                  </p>
                </div>
              </div>
              <div>
                <Link
                  href={`/joblisting/${recent._id}`}
                  className="btn w-20 bg-[#0dcaf0] mx-auto rounded-md p-2 text-white md:w-[100px] lg:text-xl"
                >
                  Apply Now
                </Link>
              </div>
              {/* Next button */}
              {/* <div className="absolute top-6/12 right-0 transform -translate-y-">
                <button
                  onClick={goToNext}
                  className=" bg-white rounded-full p-2 shadow-md"
                >
                  <IoChevronForwardOutline size={24} />
                </button>
              </div> */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default JobCardSwiper;
