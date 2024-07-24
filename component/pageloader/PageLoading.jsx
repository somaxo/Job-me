import React from 'react'


const PageLoading = () => {
  return (
    <>
      <div class="flex flex-col md:flex-row md:items-start md:justify-start items-center justify-center mx-auto my-10 bg-neutral-200 w-64 md:w-10/12 md:h-36 h-80 animate-pulse rounded-xl p-4 gap-4">
        <div class="bg-neutral-300 w-full md:w-4/12 h-32 md:h-28 animate-pulse rounded-md"></div>
        <div class="flex flex-col gap-2">
          <div class="bg-neutral-400 w-full h-4 animate-pulse rounded-md"></div>
          <div class="bg-neutral-400/50 w-4/5 h-4 animate-pulse rounded-md"></div>
          <div class="bg-neutral-400 w-full h-4 animate-pulse rounded-md"></div>
          <div class="bg-neutral-400/50 w-2/4 h-4 animate-pulse rounded-md"></div>
        </div>
      </div>
    </>
  );
}

export default PageLoading