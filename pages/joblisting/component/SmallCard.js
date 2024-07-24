"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";


const SmallCard = ({ job }) => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  const getJobs = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000//api/jobs/jobupload", {
        method: "GET",
      });

      const resData = await res.json();
      console.log(resData);
      console.log(resData.data);
      if (res.ok) {
        setLoading(false);
        setJobs(resData.data);
      }
    } catch (error) {
      console.error("something went wrong ");
    }
  };

  useEffect(() => {
    getJobs();
  }, []);


  return (
    <div>
      {jobs.map((job) => (
        <div
          key={job.id}
          className="container mx-auto justify-center w-11/12 h-[400px] my-7"
        >
          <div className="border rounded-t-lg w-72 h-80 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5 mx-auto md:w-80">
            <h3 className="font-semibold mb-2 text-xl md:text-[22px]">
              {job.title}
            </h3>
            <p className="flex justify-start items-center ">
              <Image
                src="/time.png"
                width={15}
                height={15}
                alt="clock"
                className="mr-1"
              />
              Posted 24 hours ago
            </p>
            <div className="flex justify-between mt-3 mb-3">
              <span className="bg-[#0dcaf0af] mb-1 text-white w-18 rounded-md p-1 ">
                {job.employmentType}
              </span>
              <p className="font-medium">{job.salary}</p>
            </div>
            <hr className="" />
            <div className="flex mb-7 ">
              <Image
                src={job.logoUrl}
                width={60}
                height={60}
                alt="google icon"
                className=" shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-2 rounded-md mt-4 "
              />
              <div className="ml-3 mt-3">
                <h4>{job.company}</h4>
                <p className="flex justify-start items-center">
                  <Image
                    src={"/location.png"}
                    width={18}
                    height={13}
                    alt="location icon"
                  />
                  {job.location}
                </p>
              </div>
            </div>
            <Link
              href="/joblisting"
              className="btn w-20 bg-[#0dcaf0] hover:bg-cyan-400 mx-auto rounded-md p-2 text-white md:w-[100px] lg:text-xl"
            >
              Apply Now
            </Link>
          </div>
        </div>
        // <div key={job.id}>
        //   <p>{job.title}</p>
        //   <Image src={job.logoUrl} alt="company logo" width={40} height={40} />
        // </div>
      ))}
    </div>
  );
};

export default SmallCard;
