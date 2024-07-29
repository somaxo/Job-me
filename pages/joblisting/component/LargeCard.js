import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import PageLoading from "@/component/pageloader/PageLoading";
import { formatDistanceToNow } from "date-fns";
import useFetch from "@/hooks/useFetch";


const LargeCard = () => {
  const { allJobs: jobs, error, loading } = useFetch("/api/jobs/jobupload");
  // const [loading, setLoading] = useState(true);
  // const [jobs, setJobs] = useState([]);

  // const getJobs = async () => {
  //   setLoading(true);
  //   try {
  //     const res = await fetch("/api/jobs/jobupload", {
  //       method: "GET",
  //     });
  //     console.log(res);
  //     if(res.status !== 200){
  //       setLoading(false)
  //     }

  //     const resData = await res.json();
  //     console.log(resData);
  //     console.log(resData.data);
  //     if (res.ok) {
  //       setLoading(false);
  //       setJobs(resData.data);
  //     }
  //   } catch (error) {
  //     setLoading(false)
  //     console.error("something went wrong ", error);
  //   }
  // };

  // useEffect(() => {
  //   getJobs();
  // }, []);

if(loading){
  return(
    <PageLoading/>
  )
}

 if(error){
  return(
    <div>
      <p>Error fetching jobs</p>
    </div>
  )
 }
  return (
    <div>
      {jobs &&
        jobs.map((job) => (
          <div
            key={job.id}
            className="container gap-16 grid md:grid-cols-4 justify-between items-center mx-auto w-11/12 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] mt-5 p-5  "
          >
            <div className="flex justify-start items-center gap-3 w-44 ">
              <Image
                src={job.logoUrl}
                width={65}
                height={65}
                alt="google icon"
                className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md p-2"
              />

              <div className="text-lg">
                <h4 className="font-semibold">{job.title}</h4>
                {job.company}
              </div>
            </div>
            {/* FULL TIME DIV */}
            <div className="flex flex-col justify-start items-start gap-1 w-44">
              <span className="rounded-md bg-[#0dcaf024] text-[#0dcaf0] px-3 py-1.5">
                {job.employmentType}
              </span>
              <p className="flex justify-start items-center gap-1 text-gray-600 ">
                <Image src="/time.png" width={20} height={20} alt="clock" />
                Posted {" "}
                {/* {formatDistanceToNow( new Date(job?.createdAt), {
                  addSuffix: true,
                })} */}

                 {job?.createdAt ? (formatDistanceToNow(new Date(job.createdAt), { addSuffix: true })) : ("Invalid date"
  )}
  
  {/* formatDistanceToNow(new Date(job?.createdAt), {addSuffix: true})} : " " */}
              </p>
            </div>
            {/* LOCATION DIV */}
            <div className="flex flex-col justify-start items-start gap-4 w-44">
              <p className="flex justify-start items-center gap-1 text-gray-600">
                <Image
                  src="/location.png"
                  width={20}
                  height={20}
                  alt="location"
                />
                {job.location}
              </p>
              <p className="font-medium ml-1">{job.salary}</p>
            </div>
            {/* BUTTON DIV */}

            <Link
              href={`/joblisting/${job._id}`}
              className=" btn bg-[#0dcaf0] hover:bg-cyan-400 mx-auto rounded-xl px-3 py-3 text-white text-lg text-center "
            >
              Apply Now
            </Link>
          </div>
        ))}
    </div>
  );
};

export default LargeCard;
