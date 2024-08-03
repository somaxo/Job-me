
import React from 'react'

const HomeLoader = () => {
  return (
    <div className="container justify-center items-center grid md:grid-cols-2 lg:grid-cols-3 mb-12 w-11/12 mx-auto md:gap-14">
      <div className="block flex-col bg-neutral-300 w-60 h-72 animate-pulse rounded-xl p-4 gap-4 justify-center items-center mx-auto  ">
        <div className="flex flex-col gap-2">
          <div className="bg-neutral-200/50 w-full h-32 animate-pulse rounded-md"></div>
          <div className="bg-neutral-200/50 w-full h-4 animate-pulse rounded-md"></div>
          <div className="bg-neutral-200/50 w-4/5 h-4 animate-pulse rounded-md"></div>
          <div className="bg-neutral-200/50 w-full h-4 animate-pulse rounded-md"></div>
          <div className="bg-neutral-200/50 w-2/4 h-4 animate-pulse rounded-md"></div>
        </div>
      </div>
      <div className="hidden md:block flex-col bg-neutral-300 w-60 h-72 animate-pulse rounded-xl p-4 gap-4 justify-center items-center mx-auto ">
        <div className="flex flex-col gap-2">
          <div className="bg-neutral-200/50 w-full h-32 animate-pulse rounded-md"></div>
          <div className="bg-neutral-200/50 w-full h-4 animate-pulse rounded-md"></div>
          <div className="bg-neutral-200/50 w-4/5 h-4 animate-pulse rounded-md"></div>
          <div className="bg-neutral-200/50 w-full h-4 animate-pulse rounded-md"></div>
          <div className="bg-neutral-200/50 w-2/4 h-4 animate-pulse rounded-md"></div>
        </div>
      </div>
      <div className="hidden lg:block flex-col bg-neutral-300 w-60 h-72 animate-pulse rounded-xl p-4 gap-4 justify-center items-center mx-auto ">
        <div className="flex flex-col gap-2">
          <div className="bg-neutral-200/50 w-full h-32 animate-pulse rounded-md"></div>
          <div className="bg-neutral-200/50 w-full h-4 animate-pulse rounded-md"></div>
          <div className="bg-neutral-200/50 w-4/5 h-4 animate-pulse rounded-md"></div>
          <div className="bg-neutral-200/50 w-full h-4 animate-pulse rounded-md"></div>
          <div className="bg-neutral-200/50 w-2/4 h-4 animate-pulse rounded-md"></div>
        </div>
      </div>
    </div>
  );
}

export default HomeLoader


