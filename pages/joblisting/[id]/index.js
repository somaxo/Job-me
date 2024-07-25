import Image from "next/image";
import Link from "next/link";
import Card from "@/pages/HomeComponents/Card";
import SuccessModal from "@/component/modals/SuccessModal";
import {useState, useEffect} from 'react'
import { useRouter } from "next/router";

const JobDetailPage = () => {
  const [job, setJob] = useState(null)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const router = useRouter()
  const {id} = router.query

const fetchJob = async () => {
  try {
    const response = await fetch(`/api/jobs/${id}`, {
      method: "GET",
    });
    if (!response.ok){
      throw new Error('Failed to fetch job')
    }
    const data = await response.json()
    setJob(data.data)
    console.log(job);
  } catch (error) {
    setError(error.message)
  }finally{
    setLoading(false)
  }
}


  useEffect(()=> {
if (id) {
  fetchJob()
}
  }, [id])


  if (loading) return <div>Loading</div>
   if (error) return <div>{error}</div>;
    if (!job) return <div>Job Not found</div>;

  return (
    <>
      {/* <SuccessModal/> */}
      <div className="container justify-center items-center mx-auto w-11/12 mt-1 mb-6 lg:grid lg:grid-cols-2 lg:gap-16 lg:justify-between lg:items-start">
        <div className="">
          <div className="bg-[#DBF7FD] rounded-lg p-5 lg:p-6">
            <Image
              src={job.logoUrl}
              width={50}
              height={50}
              alt="google icon"
              className="lg:w-16 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md p-2 bg-white"
            />
            <h4 className="font-semibold lg:mt-1 lg:text-lg">{job.title}</h4>
            <p className="my-5 ">{job.description}</p>
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
                <span className="text-[#0dcaf0] font-normal">
                  {job.employmentType}
                </span>
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
                  {job.location}
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
                <span className="text-[#0dcaf0] font-normal">
                  {job.experience}
                </span>
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
                <span className="text-[#0dcaf0] font-normal">{job.salary}</span>
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
          <p>{job.description}</p>

          <p className="mt-5">{job.description}</p>

          <h3 className="mt-4 mb-2 font-semibold lg:mt-8">
            Duties & Responsibilities:
          </h3>

          <ul>
            {job.duties.map((duty) => (
              <li key={duty._id} className="flex justify-start items-center">
                <Image src="/tick.png" width={20} height={20} alt="tick" />
                {duty}
              </li>
            ))}
          </ul>

          <h3 className=" mt-4 mb-2 font-semibold lg:mt-8">
            Skills & Qualifications:
          </h3>

          <ul>
            {job.skills.map((skill) => (
              <li key={skill._id} className="flex justify-start items-center">
                <Image src="/tick.png" width={20} height={20} alt="tick" />
                {skill}
              </li>
            ))}
          </ul>

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
      <div className="container justify-center items-center mx-auto w-11/12 text-left lg:mb-10 lg:text-center">
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
