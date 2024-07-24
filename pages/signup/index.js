"use client"

import Link from "next/link";
import { FaRegEye } from "react-icons/fa";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Loading from "@/component/loader/Loading";
import { useRouter } from "next/router";

const Login = () => {
   const {register, handleSubmit, formState:{errors}, reset, watch} = useForm()

   const [loading, setLoading] = useState(false);

const password = watch ("password")

// const [formError, setFormError ] = useState("")
 const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

   const router = useRouter();

const onSubmit = async (data) => {
   setLoading(true);
  console.log(data);
  try {
    const formData = {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      password: data.password
    };
    const res = await fetch("api/auth/signup", {
      method: "POST",
      headers:{"Content-Type": "application/json"},
      body:JSON.stringify(formData)
    })
 
    console.log(res);

const responseData = await res.json();
console.log(responseData);

    if(res.ok){
      setLoading(false);
      reset()
         router.push("/login");
      // you can add additional logic like toast,redirect etc here
    }else {
      const responseData = await res.json()
      console.error('user registration failed', responseData)
      // setFormError(responseData.message)
    }
  } catch (error) {
    console.log(error, "Something went wrong");
  }
}
// first eye
 const toggleEye = () => {
   setShow(!show);
 };
 const toggleShow = show ? "text" : "password";

// second eye
const toggleEye2 = () => {
  setShow2(!show2);
};
const toggleShow2 = show2 ? "text" : "password";


  return (
    <div className="signup-bg py-7">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" bg-[#ffffffea] container w-11/12 mx-auto justify-center items-center text-center rounded-lg p-2 py-4 md:w-6/12 "
      >
        <div>
          <Link href="/">
            <Image
              src="/jobme.png"
              alt="logo"
              className="mx-auto my-3 md:w-[80px] xl:w-[90px]"
              width={60}
              height={60}
            />
          </Link>
        </div>
        <div className="xl:text-lg">
          <h2 className="font-semibold">Sign Up!</h2>
          <p className="mb-2 lg:font-medium">Register to hit your dream job!</p>
        </div>

        {/* {formError && <p className="text-red-500 font-bold">{formError}</p>} */}

        <div className="w-full lg:w-8/12 mx-auto">
          <div>
            <input
              {...register("firstname", {
                required: " Firstname is required",
              })}
              className="w-full xl:text-xl m-auto px-2 py-3 lg:py-2 mb-3 text-black bg-white border-[1.4px] border-gray-400 rounded-md lg:rounded-[14px] placeholder:text-gray-400 outline-gray-500"
              type="text"
              placeholder="First name"
              id=""
            />
          </div>
          {errors.firstname && (
            <p className="text-red-500 text-end pb-2">
              {errors.firstname.message}
            </p>
          )}
          <div>
            <input
              {...register("lastname", {
                required: " Lastname is required",
              })}
              className="w-full xl:text-xl m-auto px-2 py-3 lg:py-2 mb-3 text-black bg-white border-[1.4px] border-gray-400 rounded-md lg:rounded-[14px] placeholder:text-gray-400 outline-gray-500"
              type="text"
              placeholder="Last name"
              id=""
            />
          </div>
          {errors.lastname && (
            <p className="text-red-500 text-end pb-2">
              {errors.lastname.message}
            </p>
          )}
          <div>
            <input
              {...register("email", {
                required: "Email Address is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  messsage: " Invalid email address ",
                },
              })}
              className="w-full xl:text-xl m-auto px-2 py-3 lg:py-2 mb-3 text-black bg-white border-[1.4px] border-gray-400 rounded-md lg:rounded-[14px] placeholder:text-gray-400 outline-gray-500"
              type="email"
              placeholder="Email Address"
              id=""
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-end  pb-2">
              {errors.email.message}
            </p>
          )}
          <div className="relative flex">
            <input
              {...register("password", {
                required: " Password is required",
                minLength: {
                  value: 8,
                  message: "password must be at least 8 characters long",
                },
              })}
              className="w-full xl:text-xl m-auto px-2 py-3 lg:py-2 mb-3 text-black bg-white border-[1.4px] border-gray-400 rounded-md lg:rounded-[14px] placeholder:text-gray-400 outline-gray-500"
              type={`${toggleShow}`}
              placeholder="********"
              id=""
            />
            <button className="text-gray-400 absolute right-3 translate-y-[18px] lg:translate-y-[15px]">
              <FaRegEye onClick={toggleEye} />
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-end pb-2">
              {errors.password.message}
            </p>
          )}
          <div className="relative flex">
            <input
              {...register("confirmPassword", {
                required: "Confirm password is required",
                validate: (value) =>
                  value === password || "The passwords do not match",
              })}
              className="w-full xl:text-xl m-auto px-2 py-3 lg:py-2 mb-1 text-black bg-white border-[1.4px] border-gray-400 rounded-md lg:rounded-[14px] placeholder:text-gray-400 outline-gray-500"
              type={`${toggleShow2}`}
              placeholder="Confirm password"
              id=""
            />
            <button className="text-gray-400 absolute right-3 translate-y-[18px] lg:translate-y-[15px]">
              <FaRegEye onClick={toggleEye2} />
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500 text-end pb-4">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="container justify-center items-center btn flex w-full lg:w-8/12 py-1 lg:py-2 text-sm mb-4 font-light bg-[#0dcaf0] mx-auto rounded-md mt-3 lg:rounded-[14px] p-2 text-white lg:text-lg "
        >
          {loading ? <Loading /> : <span>Sign Up</span>}
        </button>

        <p className="my-1 text-sm xl:text-base ">Or continue with</p>
        <div className="grid grid-cols-3 w-4/12 md:w-3/12 xl:w-2/12 mx-auto mb-1">
          <Image
            src="/facebook.png"
            width={20}
            height={20}
            alt="facebook"
            className="mx-auto"
          />
          <Image
            src="/google.png"
            width={20}
            height={20}
            alt="google"
            className="mx-auto"
          />
          <Image
            src="/linkedinn.png"
            width={20}
            height={20}
            alt="linkedin"
            className="mx-auto"
          />
        </div>
        <p className="text-sm xl:text-base">
          Don&apos;t have an account?
          <Link
            href="/login"
            className="btn w-20 text-[#0dcaf0] text-sm xl:text-base mx-auto ml-1"
          >
            <span>Log In</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
