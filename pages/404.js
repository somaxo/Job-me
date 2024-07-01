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
      <div className="container m-auto w-11/12 flex mb-14 mt-10 ">
        <div className="justify-center items-center m-auto">
          <h1 className="font-semibold text-8xl mb-3">OOOps!</h1>
          <h4 className="font-semibold text-xl mb-4 ">Page not found</h4>
          <p>The page doesn&apost exist, we suggest you go back to home</p>
          <Link href="/">
            <button className="bg-blue-500 text-white rounded-md px-4 py-3 hover:bg-blue-400">
              Go back home
            </button>
          </Link>
        </div>
        <div>
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
