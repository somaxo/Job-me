import Link from "next/link";
// import { FaRegEye } from "react-icons/fa";
import Image from "next/image";

const Login = () => {
  return (
    <div className="login-bg">
      <form className=" bg-[#ffffffea] container w-11/12 mx-auto justify-center items-center text-center rounded-lg p-2 md:w-7/12 lg:h-[510px] 2xl:h-[620px]">
        <div>
          <Link href="/">
            <Image
              src="/jobme.png"
              alt="logo"
              className="mx-auto my-3 md:w-[100px] lg:w-[110px] 2xl:w-[130px]"
              width={70}
              height={70}
            />
          </Link>
        </div>
        <div className="">
          <h2 className="font-semibold md:text-xl 2xl:text-2xl">
            Welcome back!
          </h2>
          <p className="mb-2 md:text-lg lg:font-medium 2xl:text-xl">
            Log in to hit your dream job!
          </p>
        </div>
        <input
          className="w-full 2xl:h-16 xl:h-14 2xl:w-9/12 lg:w-10/12 xl:text-xl 2xl:text-2xl m-auto px-4 py-3 my-4 text-black bg-white border border-gray-700 rounded-md placeholder:text-gray-400 outline-gray-500"
          type="email"
          placeholder="Email Address"
          id="email"
        />
        <div>
          <input
            className="w-full 2xl:h-16 xl:h-14 2xl:w-9/12 lg:w-10/12 xl:text-xl 2xl:text-2xl m-auto px-4 py-3 my-2 text-black bg-white border border-gray-700 rounded-md placeholder:text-gray-400 outline-gray-500"
            type="password"
            placeholder="Password"
            id="password"
          />
          {/* <button className="eye">
              <FaRegEye />
            </button> */}
        </div>
        <div className="grid grid-cols-2 mb-6 gap-48 lg:gap-36 xl:gap-[220px] 2xl:gap-[400px] xl:text-lg 2xl:text-2xl">
          <div className="">
            <input type="checkbox" id="agree" />
            <label htmlFor="agree" className="ml-1">
              Remember me
            </label>
          </div>
          <div className="text-[#0dcaf0]">
            <p>Forgot Password</p>
          </div>
        </div>
        <Link
          href="/login"
          className="container justify-center items-center btn flex w-full 2xl:h-16 xl:h-14 2xl:w-9/12 lg:w-10/12 xl:text-xl bg-[#0dcaf0] mx-auto rounded-md p-2 text-white lg:text-xl 2xl:text-3xl"
        >
          Log In
        </Link>

        <p className="my-2 md:text-lg 2xl:my-4 lg:text-xl 2xl:text-2xl">
          Or continue with
        </p>
        <div className="grid grid-cols-3 w-5/12 md:w-3/12 xl:w-2/12 2xl:w-1/12 mx-auto mb-2">
          <Image
            src="/facebook.png"
            width={20}
            height={20}
            alt="facebook"
            className="mx-auto 2xl:w-7"
          />
          <Image
            src="/google.png"
            width={20}
            height={20}
            alt="google"
            className="mx-auto 2xl:w-7"
          />
          <Image
            src="/linkedinn.png"
            width={20}
            height={20}
            alt="linkedin"
            className="mx-auto 2xl:w-7"
          />
        </div>
        <p className="2xl:text-2xl">
          Don&apost have an account?
          <Link
            href="/signup"
            className="btn w-20 text-[#0dcaf0] mx-auto rounded-md p-2 md:w-[100px] lg:text-xl 2xl:text-2xl "
          >
            <span>Sign Up</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
