import React from "react";
import Card from "./Card";

const SectionThree = () => {
  return (
    <div className="">
      <div className="container w-11/12 mx-auto h-full text-center mt-10">
        <h2 className="font-semibold text-xl lg:text-2xl ">Latest Job Listings</h2>
        <p className="mt-3 lg:p-3 mb-10 ">
          Lorem ipsum dolor sit amet consectetur. Augue lacus senectus at amet
          viverra ultrices eget. Tincidunt tristique viverra facilisis arcu non
          nulla. Adipiscing blandit nunc lobortis pretium. Tempus
          viverra vitae nisl imperdiet auctor mattis viverra egestas mattis.
        </p>
      </div>
      <div className="container justify-center items-center mx-auto w-11/12">
        <Card />
      </div>
    </div>
  );
};

export default SectionThree;
