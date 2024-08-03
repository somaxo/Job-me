import React from "react";
import Image from "next/image";
import Link from "next/link";
import useFetch from "@/hooks/useFetch";
import HomeLoader from "../../component/loader/HomeLoader";
import { GoClock } from "react-icons/go";
import { SlLocationPin } from "react-icons/sl";
import JobCardSwiper from "@/JobCardSwiper";
import { formatDistanceToNow } from "date-fns";


const Card = () => {
  const { recentJobs, error, loading } = useFetch("/api/jobs/jobupload");
  
  if (loading) {
    return <HomeLoader />;
  }

  if (error) {
    return (
      <div>
        <p>Error fetching jobs</p>
      </div>
    );
  }

  return (
    <>
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 pt-11 pb-14 ">
        {/* map over it with the recent jobs from jobupload */}

        {recentJobs.map((recent) => (
          <div
            key={recent._id}
            className="md:flex md:w-11/12 md:gap-0 mx-auto justify-center h-[350px]"
          >
            <div className="border rounded-t-lg w-72 h-80 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5 mx-auto lg:mx-0  lg:min-w-[300px] md:w-80">
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
                Posted {" "}
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
              <div className="flex mb-7">
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
              <Link
                href={`/joblisting/${recent._id}`}
                className="btn w-20 bg-[#0dcaf0] mx-auto rounded-md p-2 text-white md:w-[100px] lg:text-xl"
              >
                Apply Now
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="block md:hidden">
        <JobCardSwiper recentJobs={recentJobs} />
      </div>
    </>
  );
};

export default Card;

// const Card = () => {
//   const { recentJobs, loading, error } = useFetch("/api/jobs/jobuploads");

//   if (loading) {
//     return (
//       <div className="w-11/12 py-10 mx-auto container text-center grid gap-10 grid-col-1 lg:grid-cols-3">
//         <HomeLoader />
//         <HomeLoader />
//         <HomeLoader />
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="w-11/12 mx-auto container text-center">
//         Error: {error}
//       </div>
//     );
//   }

//   return (
//     <>
//       <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 pt-11 pb-16">
//         {recentJobs.map((recent) => (
//           <div key={recent._id} className=" ">
//             <div className="rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]  px-6 py-8 mx-auto mt-5 ">
//               <div className="">
//                 <div>
//                   <h1 className="text-xl font-semibold">{recent.title}</h1>
//                 </div>
//                 <div className="flex gap-2 items-center mt-4">
//                   <GoClock className="icon-color" size={20} />
//                   <p className="text-gray-600">
//                     Posted
//                     {formatDistanceToNow(new Date(recent.createdAt), {
//                       addSuffix: true,
//                     })}
//                   </p>
//                 </div>
//                 <div className="flex justify-between mt-4">
//                   <div className="rounded  px-1 py-1 bg-[#0DCAF01F]">
//                     <p className="text-[#0dcaf0] text-xs">
//                       {recent.employmentType}
//                     </p>
//                   </div>
//                   <div>
//                     <p>{recent.salary}</p>
//                   </div>
//                 </div>
//                 <hr className="mt-4" />
//                 <div className="flex items-center gap-4 mt-4">
//                   <div className="flex justify-center items-center p-2 rounded shadow-md">
//                     <Image
//                       src={recent.logoUrl}
//                       width={35}
//                       height={55}
//                       alt="company logo"
//                     />
//                   </div>
//                   <div>
//                     <div>
//                       <h1 className="text-lg font-semibold">
//                         {recent.company}
//                       </h1>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <SlLocationPin className="text-gray-600" />
//                       <p className="text-gray-600">{recent.location}</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="mt-7">
//                   <Link
//                     href={`/joblisting/${recent._id}`}
//                     className="btn-color text-white p-2 px-6 rounded-lg hover:bg-[#01c0e6] ease-in-out duration-500"
//                   >
//                     Apply Now
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="block md:hidden">
//         <JobCardSwiper recentJobs={recentJobs} />
//       </div>
//     </>
//   );
// };

// export default Card;