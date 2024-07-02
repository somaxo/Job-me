import Link from "next/link";
import { FaRegEye } from "react-icons/fa";
import Image from "next/image";

const Login = () => {
  return (
    <div className="signup-bg">
      <form className=" bg-[#ffffffea] container w-11/12 mx-auto justify-center items-center text-center rounded-lg p-2 py-4 md:w-6/12 ">
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

        <div className="w-full lg:w-8/12 mx-auto">
          <div>
            <input
              className="w-full xl:text-xl m-auto px-2 py-3 lg:py-2 mb-3 text-black bg-white border-[1.4px] border-gray-400 rounded-md lg:rounded-[14px] placeholder:text-gray-400 outline-gray-500"
              type="text"
              placeholder="First name"
              id="firstname"
            />
          </div>
          <div>
            <input
              className="w-full xl:text-xl m-auto px-2 py-3 lg:py-2 mb-3 text-black bg-white border-[1.4px] border-gray-400 rounded-md lg:rounded-[14px] placeholder:text-gray-400 outline-gray-500"
              type="text"
              placeholder="Last name"
              id="lastname"
            />
          </div>
          <div>
            <input
              className="w-full xl:text-xl m-auto px-2 py-3 lg:py-2 mb-3 text-black bg-white border-[1.4px] border-gray-400 rounded-md lg:rounded-[14px] placeholder:text-gray-400 outline-gray-500"
              type="email"
              placeholder="Email Address"
              id="email"
            />
          </div>
          <div className="relative flex">
            <input
              className="w-full xl:text-xl m-auto px-2 py-3 lg:py-2 mb-3 text-black bg-white border-[1.4px] border-gray-400 rounded-md lg:rounded-[14px] placeholder:text-gray-400 outline-gray-500"
              type="password"
              placeholder="Password"
              id="password"
            />
            <button className="text-gray-400 absolute right-3 translate-y-[18px] lg:translate-y-[15px]">
              <FaRegEye />
            </button>
          </div>
          <div className="relative flex">
            <input
              className="w-full xl:text-xl m-auto px-2 py-3 lg:py-2 mb-1 text-black bg-white border-[1.4px] border-gray-400 rounded-md lg:rounded-[14px] placeholder:text-gray-400 outline-gray-500"
              type="password"
              placeholder="Confirm password"
              id="password"
            />
            <button className="text-gray-400 absolute right-3 translate-y-[18px] lg:translate-y-[15px]">
              <FaRegEye />
            </button>
          </div>
          <div className="grid grid-cols-2 text-sm xl:text-base mb-6 justify-between mx-auto">
            <div className="flex justify-start">
              <input type="checkbox" id="agree" />
              <label htmlFor="agree" className="ml-1">
                Remember me
              </label>
            </div>
            <div className="text-[#0dcaf0] text-right">
              <p>Forgot Password</p>
            </div>
          </div>
        </div>

        <Link
          href="/signup"
          className="container justify-center items-center btn flex w-full lg:w-8/12 py-1 lg:py-2 text-sm mb-4 font-light bg-[#0dcaf0] mx-auto rounded-md lg:rounded-[14px] p-2 text-white lg:text-lg "
        >
          Sign Up
        </Link>

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
