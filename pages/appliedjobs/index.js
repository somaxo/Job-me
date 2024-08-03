import { useState, useEffect } from "react";
import { fetchAppliedJobs } from "@/services/allJobsApplications";
import Cookies from "js-cookie";
import { format } from "date-fns";
import UpdateStatusModal from "@/component/modals/UpdateStatusModal";
import PageLoading from "@/component/pageloader/PageLoading";



const AppliedJobs = () => {
  const userId = Cookies.get("userId");
  console.log(userId);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    const [show, setShow] = useState(false);

 const showStatusUpdate = () => {
   setShow(true);
 };

  useEffect(() => {
    const loadAppliedJobs = async () => {
      try {
        const data = await fetchAppliedJobs(userId);
        setAppliedJobs(data.appliedJobs);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadAppliedJobs();
  }, [userId]);

  if (error)
    return (
      <div className="w-11/12 mx-auto container flex justify-center py-14">
        Error: {error}
      </div>
    );
  if (loading)
    return (
      <div className="w-11/12 mx-auto container flex justify-center py-14">
        <PageLoading/>
      </div>
    );
  if (!appliedJobs)
    return (
      <div className="w-11/12 mx-auto container flex justify-center py-14">
        No Data
      </div>
    );

  return (
    <div className="container mx-auto w-11/12  py-6">
      <UpdateStatusModal show={show} setShow={setShow} />
      <h2 className="text-lg md:text-2xl font-semibold mb-6 p-3 rounded-lg w-8/12 md:w-4/12 text-center self-center lg:w-[30%] border-2 border-[#0dcaf0]">
        My Job Applications
      </h2>
      <p className="mb-8 font-semibold text-xl">
        View and manage your job status
      </p>
      <div className="space-y-14">
        {appliedJobs.map((job) => (
          <div
            key={job.applicationId}
            className="bg-white border-t border-b border-black p-4  grid grid-cols-1  md:grid-cols-2"
          >
            <div>
              <h3 className="text-xl font-semibold">{job.jobTitle}</h3>
              <p className=" font-semibold">{job.company}</p>
              <p className=" font-semibold">{job.location}</p>
              <p className="font-semibold">
                Date of application:{" "}
                {format(new Date(job.appliedAt), "MMMM d, yyyy")}
              </p>
            </div>
            <div className="flex items-start md:items-center pt-5 md:pt-0 justify-start md:justify-end gap-3">
              <button
              onClick={showStatusUpdate}
              className=" text-[#0DCAF0] border border-gray-200 rounded-lg p-2">
                Update Status
              </button>
              <p
                className={`  rounded-md px-3 py-2  font-semibold ${
                  job.status === "Applied"
                    ? "bg-green-100 text-green-700"
                    : job.status === "Not hired"
                    ? "bg-red-100 text-red-700"
                    : job.status === "Interviewing"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {job.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
