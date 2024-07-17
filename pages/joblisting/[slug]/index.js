import Image from "next/image";
import Link from "next/link";

const JobDetailPage = () => {
  return (
    <>
      <div className="">
        <div className="">
          <div className="">
            <Image
              src="/google.png"
              width={50}
              height={50}
              alt="google icon"
              className=""
            />
            <h4>Digital Marketer</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Et ultrices tellus
              convallis quam. Sed opi commodo proin gravida magnis pretium
              senectus aliquet.
            </p>
            <h5>Job Information</h5>
            <div className="jobdetails-info-card">
              <p className="card-detail">
                <Image
                  src="/profile.png"
                  width={50}
                  height={50}
                  alt="person"
                  className=""
                />
                Employment Type:
                <span>Full Time</span>
              </p>
              <p>
                <Image
                  src="/black-location.png"
                  width={50}
                  height={50}
                  alt="location pin"
                  className=""
                />
                Location:
                <span>United Kingdom</span>
              </p>
              <p>
                <Image
                  src="/black-clock.png"
                  width={50}
                  height={50}
                  alt="clock"
                  className=""
                />
                Date Posted:
                <span>13th April, 2024.</span>
              </p>
              <p>
                <Image
                  src="/suit-case.png"
                  width={50}
                  height={50}
                  alt="suitcase"
                  className=""
                />
                Experience:
                <span>5+ Years</span>
              </p>
              <p>
                <Image
                  src="/dollar.png"
                  width={50}
                  height={50}
                  alt="dollar"
                  className=""
                />{" "}
                Sarary:
                <span>30 - 35k per annum</span>
              </p>
            </div>
          </div>
          {/* MAP */}

          <Image src="/map.png" width={50} height={50} alt="map" className="" />
        </div>

        {/* BULLET POINT CONTENT */}
        <div className="">
          <div>
            <h3>Job Description:</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Arcu in amet pellentesque
              magna integer turpis. Tortor ut sollicitudin varius vitae lectus
              ac elementum vel. Viverra pellentesque risus tristique mauris
              metus. Imperdiet purus nulla mi consequat nulla.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Arcu in amet pellentesque
              magna integer turpis. Tortor ut sollicitudin varius vitae lectus
              ac elementum vel. Viverra pellentesque risus tristique mauris
              metus. Imperdiet purus nulla mi consequat nulla.
            </p>

            <h3>Duties & Responsibilities:</h3>
            <p>
              <Image src="/tick.png" width={20} height={20} alt="tick" /> Lorem
              ipsum dolor sit amet consectetur.
            </p>
            <p>
              <Image src="/tick.png" width={20} height={20} alt="tick" /> Lorem
              ipsum dolor sit amet consectetur.
            </p>
            <p>
              <Image src="/tick.png" width={20} height={20} alt="tick" /> Lorem
              ipsum dolor sit amet consectetur.
            </p>
            <p>
              <Image src="/tick.png" width={20} height={20} alt="tick" /> Lorem
              ipsum dolor sit amet consectetur.
            </p>
            <p>
              <Image src="/tick.png" width={20} height={20} alt="tick" /> Lorem
              ipsum dolor sit amet consectetur.
            </p>
            <p>
              <Image src="/tick.png" width={20} height={20} alt="tick" /> Lorem
              ipsum dolor sit amet consectetur.
            </p>
            <h3>Skills & Qualifications:</h3>
            <p>
              <Image src="/tick.png" width={20} height={20} alt="tick" /> Lorem
              ipsum dolor sit amet consectetur.
            </p>
            <p>
              <Image src="/tick.png" width={20} height={20} alt="tick" /> Lorem
              ipsum dolor sit amet consectetur.
            </p>
            <p>
              <Image src="/tick.png" width={20} height={20} alt="tick" /> Lorem
              ipsum dolor sit amet consectetur.
            </p>
            <p>
              <Image src="/tick.png" width={20} height={20} alt="tick" /> Lorem
              ipsum dolor sit amet consectetur.
            </p>
            <p>
              <Image src="/tick.png" width={20} height={20} alt="tick" /> Lorem
              ipsum dolor sit amet consectetur.
            </p>
            <p>
              <Image src="/tick.png" width={20} height={20} alt="tick" /> Lorem
              ipsum dolor sit amet consectetur.
            </p>

            <div>
              <Link className="btn w-20 bg-[#0dcaf0] mx-auto rounded-md p-2 text-white md:w-[100px] lg:text-xl">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetailPage;
