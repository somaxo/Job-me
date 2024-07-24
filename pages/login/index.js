// "use client";

import Link from "next/link";
import { FaRegEye } from "react-icons/fa";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Loading from "@/component/loader/Loading";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

const [loading, setLoading] = useState(false);

  const router = useRouter()
  // const [formError, setFormError] = useState("");
 const [show, setShow] = useState(false);
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      console.log(data);
      const res = await fetch('api/auth/signin',{
        method: 'POST',
        headers: {
          "Content-Type":"application/json",
        },
        body: JSON.stringify(data),
      })
      const responseData = await res.json();
      if(res.ok){
          setLoading(false);
        console.log('login successful:', responseData);
        // localStorage.setItem('token', responseData.token)
        Cookies.set("token", responseData.token, {
          expires:1,
          secure: process.env.NODE_ENV === "production", 
          sameSite:"strict"
        })
        router.push('/joblisting')
         reset();
      }else {
        console.error('login failed:', responseData);
      }
    } catch (error) {
    
      console.error("Somthing went wrong:", error);
    }
    
  };
  const toggleEye = () => {
  setShow(!show);
  }
  const toggleShow = show ? "text" : "password";


  return (
    <div className="login-bg">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" bg-[#ffffffea] container w-11/12 mx-auto justify-center items-center text-center rounded-xl p-2 md:w-7/12 lg:h-[470px]"
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
          <h2 className="font-semibold">Welcome back!</h2>
          <p className="mb-2 lg:font-medium">Log in to hit your dream job!</p>
        </div>

        {/* Top error message */}
        {/* {formError && <p className="text-red-500 font-bold">{formError}</p>} */}

        <div className="w-full lg:w-9/12 mx-auto">
          <input
            {...register("email", {
              required: "Email Address is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                messsage: " Invalid email address ",
              },
            })}
            className="w-full xl:text-xl m-auto px-4 py-3 lg:mb-8 lg:py-2 my-4 text-black bg-white border-[1.4px] border-gray-400 rounded-md lg:rounded-[14px] placeholder:text-gray-400 outline-gray-500"
            type="email"
            placeholder="Email Address"
            id="email"
          />
          {errors.email && (
            <p className="text-red-500 text-end text-sm -mt-4 pb-2">
              {errors.email.message}
            </p>
          )}

          <div className="  relative flex">
            <input
              {...register("password", {
                required: " Password is required",
              })}
              className=" w-full  xl:text-xl m-auto px-4 py-3 lg:py-2 my-2 text-black bg-white border-[1.4px] border-gray-400 rounded-md lg:rounded-[14px] placeholder:text-gray-400 outline-gray-500"
              type={`${toggleShow}`}
              placeholder="Password"
              id="password"
            />
            <button className="text-gray-400 absolute right-3 translate-y-7 lg:translate-y-6">
              <FaRegEye onClick={toggleEye} />
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-end text-sm -mt-2 pb-2">
              {errors.password.message}
            </p>
          )}
          <div className="grid grid-cols-2 text-sm xl:text-base mb-6 justify-between mx-auto">
            <div className=" flex justify-start">
              <input type="checkbox" id="agree" />
              <label htmlFor="agree" className="ml-1">
                Remember me
              </label>
            </div>
            <div className="text-[#0dcaf0] text-right">
              <p>Forgot Password?</p>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="container justify-center items-center btn flex w-full lg:w-9/12 py-1 lg:py-2 text-sm mb-4 font-light bg-[#0dcaf0] mx-auto rounded-md lg:rounded-[14px] p-2 text-white lg:text-lg "
        >
          {loading ? <Loading /> : <span>Log In</span>}
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
            href="/signup"
            className="btn w-20 text-[#0dcaf0] text-sm xl:text-base mx-auto ml-1"
          >
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
