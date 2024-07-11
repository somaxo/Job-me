"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import ErrorLayout from "@/component/ErrorLayout";


const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
   setTimeout(() => {
      router.replace("/");
    }, 4000000);
  }, [router]);
  return (
    <ErrorLayout>
      <div className="grid grid-cols-1 lg:grid-cols-2 container m-auto w-11/12 mb-14 mt-10 ">
        <div className=" order-2 lg:order-1 justify-center items-center text-center lg:text-left m-auto">
          <h1 className="font-semibold text-4xl lg:text-8xl mt-10 lg:mt-0 mb-2">OOOps!</h1>
          <h4 className="font-semibold text-2xl lg:text-3xl">Page not found</h4>
          <p>The page doesn&apos;t exist, we suggest you go back to home</p>
          <Link href="/">
            <button className="bg-[#0dcaf0] text-white rounded-2xl lg:rounded-md px-4 py-3 mt-5  hover:bg-blue-400">
              Back to home
            </button>
          </Link>
        </div>
        <div className="order-1 lg:order-2 flex justify-center items-center mx-auto">
          <Image
            src="/rafiki.png"
            width={500}
            height={500}
            alt="mountain img"
          />
        </div>
      </div>
    </ErrorLayout>
  );
};

export default NotFound;
