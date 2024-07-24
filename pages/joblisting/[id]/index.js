import Image from "next/image";
import Link from "next/link";
import Card from "@/pages/HomeComponents/Card";
import SuccessModal from "@/component/modals/SuccessModal";

const JobDetailPage = () => {
  return (
    <>
    <SuccessModal/>
      <div className="container justify-center items-center mx-auto w-11/12 mt-1 mb-6 lg:grid lg:grid-cols-2 lg:gap-16 lg:justify-between lg:items-start">
        <div className="">
          <div className="bg-[#DBF7FD] rounded-lg p-5 lg:p-6">
            <Image
              src="/google.png"
              width={50}
              height={50}
              alt="google icon"
              className="lg:w-16 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md p-2 bg-white"
            />
            <h4 className="font-semibold lg:mt-1 lg:text-lg">
              Digital Marketer
            </h4>
            <p className="my-5 ">
              Lorem ipsum dolor sit amet consectetur. Et ultrices tellus
              convallis quam. Sed opi commodo proin gravida magnis pretium
              senectus aliquet.
            </p>
            <h5 className="font-semibold mb-2">Job Information:</h5>
            <div className="bg-white rounded-lg px-2 lg:px-3 py-3 lg:py-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:w-5/12 lg:w-9/12">
              <p className="flex justify-start items-center gap-1 font-semibold ">
                <Image
                  src="/employee.png"
                  width={15}
                  height={20}
                  alt="person"
                  className=""
                />
                Employment Type:
                <span className="text-[#0dcaf0] font-normal">Full Time</span>
              </p>
              <p className="flex justify-start items-center gap-1 font-semibold my-2 lg:my-4">
                <Image
                  src="/black-location.png"
                  width={15}
                  height={20}
                  alt="location pin"
                  className=""
                />
                Location:
                <span className="text-[#0dcaf0] font-normal">
                  United Kingdom
                </span>
              </p>
              <p className="flex justify-start items-center gap-1 font-semibold">
                <Image
                  src="/black-clock.png"
                  width={15}
                  height={20}
                  alt="clock"
                  className=""
                />
                Date Posted:
                <span className="text-[#0dcaf0] font-normal">
                  13th April, 2024.
                </span>
              </p>
              <p className="flex justify-start items-center gap-1 font-semibold my-2 lg:my-4">
                <Image
                  src="/suit-case.png"
                  width={15}
                  height={20}
                  alt="suitcase"
                  className=""
                />
                Experience:
                <span className="text-[#0dcaf0] font-normal">5+ Years</span>
              </p>
              <p className="flex justify-start items-center gap-1 font-semibold">
                <Image
                  src="/dollar.png"
                  width={15}
                  height={20}
                  alt="dollar"
                  className=""
                />
                Sarary:
                <span className="text-[#0dcaf0] font-normal">
                  30 - 35k per annum
                </span>
              </p>
            </div>
          </div>
          {/* MAP */}

          <Image
            src="/map.png"
            width={50}
            height={50}
            alt="map"
            className="hidden lg:block lg:my-8 lg:w-full lg:h-80"
          />
        </div>

        {/* BULLET POINT CONTENT */}
        <div className="text-left">
          <h3 className="mt-8 lg:mt-1 mb-2 font-semibold">Job Description:</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Arcu in amet pellentesque
            magna integer turpis. Tortor ut sollicitudin varius vitae lectus ac
            elementum vel. Viverra pellentesque risus tristique mauris metus.
            Imperdiet purus nulla mi consequat nulla.
          </p>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur. Arcu in amet pellentesque
            magna integer turpis. Tortor ut sollicitudin varius vitae lectus ac
            elementum vel. Viverra pellentesque risus tristique mauris metus.
            Imperdiet purus nulla mi consequat nulla.
          </p>

          <h3 className="mt-4 mb-2 font-semibold lg:mt-8">
            Duties & Responsibilities:
          </h3>

          <p className="flex justify-start items-center">
            <Image src="/tick.png" width={20} height={20} alt="tick" /> Lorem
            ipsum dolor sit amet consectetur.
          </p>
          <p className="flex justify-start items-center my-1 lg:my-3">
            <Image src="/tick.png" width={20} height={20} alt="tick" /> Lorem
            ipsum dolor sit amet consectetur.
          </p>
          <p className="flex justify-start items-center">
            <Image src="/tick.png" width={20} height={20} alt="tick" /> Lorem
            ipsum dolor sit amet consectetur.
          </p>
          <p className="flex justify-start items-center my-1 lg:my-3">
            <Image src="/tick.png" width={20} height={20} alt="tick" /> Lorem
            ipsum dolor sit amet consectetur.
          </p>
          <p className="flex justify-start items-center">
            <Image src="/tick.png" width={20} height={20} alt="tick" /> Lorem
            ipsum dolor sit amet consectetur.
          </p>
          <p className="flex justify-start items-center my-1 lg:my-3">
            <Image src="/tick.png" width={20} height={20} alt="tick" /> Lorem
            ipsum dolor sit amet consectetur.
          </p>

          <h3 className=" mt-4 mb-2 font-semibold lg:mt-8">
            Skills & Qualifications:
          </h3>

          <p className="flex justify-start items-center">
            <Image src="/tick.png" width={20} height={20} alt="tick" /> Lorem
            ipsum dolor sit amet consectetur.
          </p>
          <p className="flex justify-start items-center my-1 lg:my-3">
            <Image src="/tick.png" width={20} height={20} alt="tick" /> Lorem
            ipsum dolor sit amet consectetur.
          </p>
          <p className="flex justify-start items-center">
            <Image src="/tick.png" width={20} height={20} alt="tick" /> Lorem
            ipsum dolor sit amet consectetur.
          </p>
          <p className="flex justify-start items-center my-1 lg:my-3">
            <Image src="/tick.png" width={20} height={20} alt="tick" /> Lorem
            ipsum dolor sit amet consectetur.
          </p>
          <p className="flex justify-start items-center">
            <Image src="/tick.png" width={20} height={20} alt="tick" /> Lorem
            ipsum dolor sit amet consectetur.
          </p>
          <p className="flex justify-start items-center my-1 lg:my-3">
            <Image src="/tick.png" width={20} height={20} alt="tick" /> Lorem
            ipsum dolor sit amet consectetur.
          </p>

          <div className="my-6">
            <Link
              href="/jobapplication"
              className="btn bg-[#0dcaf0] rounded-lg text-white p-2 my-5"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
        <div className="text-left lg:mb-10 lg:text-center">
          <h3 className="mt-10 font-semibold ">Related Jobs</h3>
          <p className="my-2">
            Lorem ipsum dolor sit amet consectetur. Arcu in amet pellentesque
            magna integer turpis. Tortor sollicitudin varius lectus ac .
          </p>
        </div>
      <Card />
    </>
  );
};

export default JobDetailPage;
