// pages/JobApplicationPage.js

import React from "react";
import Loading from "@/component/loader/Loading";
import withAuth from "@/component/hoc/withAuth";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
// import { useUser } from "@/context/UserContext"




const JobApplicationPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const userId = Cookies.get("userId")
  const jobId = Cookies.get("jobId")
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  // const { userId } = useUser()
  // const { jobId } = router.query

  console.log(userId);
  console.log(jobId);

   useEffect(() => {
     if (!jobId) {
       console.error("Job Id is missing from query parameters");
     }
   }, [jobId]);

  const onSubmit = async (data) => {
console.log(data);
    // if (!userId || !jobId) {
    //   console.error("User or job ID not available");
    //   return;
    // }

    // console.log(data);
    // setLoading(true);
    // try {
    //   const formData = new FormData();
    //   formData.append("userId", userId); 
    //   formData.append("jobId", jobId);
    //   formData.append("firstName", data.firstname);
    //   formData.append("lastName", data.lastname);
    //   formData.append("email", data.email);
    //   formData.append("phoneNumber", data.phone);
    //   formData.append("coverLetter", data.coverLetter);
    //   formData.append("resume", data.resume[0]);



    //   const res = await fetch("/api/jobs/submitapplication", {
    //     method: "POST",
    //     body: new FormData(formData),
    //   });

    //   console.log(res);

    //   const responseData = await res.json();

    //   console.log(responseData);

    //   if (res.ok) {
    //     setLoading(false);
    //     // add toaster here
    //     console.log("Message sent successfully:", responseData);
    //     reset();
    //     router.push("/joblisting");
    //   }
    // } catch (error) {
    //   setLoading(false);
    //   console.error("Something went wrong:", error);
    // }
  };

  return (
    <div className="mt-1 mb-20">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" bg-[#DBF7FD] container lg:w-8/12 mx-auto justify-center items-center  text-gray-500 text-left rounded-lg p-2 py-4"
      >
        <div className="w-11/12 lg:w-11/12 lg:mt-5 mx-auto">
          {/* BREAKPOINT ONE */}
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:justify-between lg:items-center lg:gap-8 md:mt-4">
            <div>
              <p>First name*</p>
              <input
                {...register("firstname", {
                  required: " Firstname is required",
                })}
                className="w-full lg:text-sm m-auto px-2 py-2 lg:py-[6px] mb-3 text-black bg-white border border-gray-400 rounded-md lg:rounded-lg placeholder:text-gray-400 outline-gray-500"
                type="text"
                placeholder=""
                id="firstname"
                autoComplete="given-name"
              />
              {errors.firstname && (
                <p className="text-red-500 text-end -mt-3">
                  {errors.firstname.message}
                </p>
              )}
            </div>

            <div>
              <p>Last name*</p>
              <input
                {...register("lastname", {
                  required: " Lastname is required",
                })}
                className="w-full lg:text-sm m-auto px-2 py-2 lg:py-[6px] mb-3 text-black bg-white border border-gray-400 rounded-md lg:rounded-lg placeholder:text-gray-400 outline-gray-500"
                type="text"
                placeholder=""
                id="lastname"
                autoComplete="family-name"
              />
              {errors.lastname && (
                <p className="text-red-500 text-end -mt-3">
                  {errors.lastname.message}
                </p>
              )}
            </div>
          </div>
          {/* BREAKPOINT TWO */}
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:justify-between lg:items-center lg:gap-8 lg:mt-5">
            <div>
              <p>Email address*</p>
              <input
                {...register("email", {
                  required: "Email Address is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                className="w-full lg:text-sm m-auto px-2 py-2 lg:py-[6px] mb-3 text-black bg-white border border-gray-400 rounded-md lg:rounded-lg placeholder:text-gray-400 outline-gray-500"
                type="email"
                placeholder=""
                id="email"
                autoComplete="email"
              />
              {errors.email && (
                <p className="text-red-500 text-end -mt-3">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <p>Phone number*</p>
              <input
                {...register("phone", {
                  required: "Your phone number is required",
                })}
                className="w-full lg:text-sm m-auto px-2 py-2 lg:py-[6px] mb-3 text-black bg-white border border-gray-400 rounded-md lg:rounded-lg placeholder:text-gray-400 outline-gray-500"
                type="tel"
                placeholder=""
                id="phone"
                autoComplete="tel"
              />
              {errors.phone && (
                <p className="text-red-500 text-end -mt-3">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>
          {/* TEXT AREA */}
          <p>Cover letter*</p>
          <div className="w-full lg:text-sm m-auto px-2 py-3 lg:py-2 mb-3 text-black bg-white border border-gray-400 rounded-md lg:rounded-lg placeholder:text-gray-400 outline-gray-500">
            <textarea
              {...register("coverLetter", {
                required: "Your cover letter is required",
              })}
              name="coverLetter"
              id="coverLetter"
              className="w-full h-32 lg:h-24 outline-none"
              placeholder=""
              autoComplete="off"
            ></textarea>
            {errors.coverLetter && (
              <p className="text-red-500 text-end -mt-3">
                {errors.coverLetter.message}
              </p>
            )}
          </div>
          {/* AGREE & UPLOAD DOC */}
          <div className="container mt-6">
            <p className="">Upload CV/Resume*</p>
            <input
              {...register("resume", {
                required: "Please upload a file",
              })}
              type="file"
              id="resume"
              placeholder="No file chosen"
              className="container mt-2 bg-white lg:w-7/12 "
            />
            {errors.resume && (
              <p className="text-red-500 text-start ">
                {errors.resume.message}
              </p>
            )}
            <div className="font-semibold text-black mt-2 ">
              <p className="">File type should not be larger than 12MB.</p>
              <p className="">Supported file types: doc, docx, pdf.</p>
            </div>
          </div>
          <div className="container mb-4">
            <input defaultChecked type="checkbox" id="checkbox" />
            <label htmlFor="checkbox" className="ml-1">
              I agree to the
              <span className="text-[#0dcaf0]"> Terms & Conditions</span>
            </label>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="container justify-center items-center btn w-28 font-light bg-[#0dcaf0] mx-auto rounded-md text-center lg:rounded-lg p-2 text-white lg:text-lg "
            disabled={loading}
          >
            {loading ? <Loading /> : <span>Apply Now</span>}
          </button>
        </div>
      </form>
    </div>
  );
};

export default withAuth(JobApplicationPage);
