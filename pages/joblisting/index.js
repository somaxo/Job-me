" use client";
import Link from "next/link";
import Image from "next/image";
import SelectBar from "../HomeComponents/SelectBar";
import withAuth from "@/component/hoc/withAuth";
import LargeCard from "./component/LargeCard";
import SmallCard from "./component/SmallCard";
import { useState, useEffect } from "react";
import PageLoading from "@/component/pageloader/PageLoading";
// export async function getServerSideProps() {
//   const res = await fetch("http://localhost:3000//api/jobs/jobuploads");
//   const data = await res.json();
//   console.log(data);

//   return {
//     props: {
//       jobs: data.data
//     },
//   };
// }

// useEffect((data) => {
//   const fetchData = async () => {
//     const [data, setData] = useState(null);
//     try {
//       const res = await fetch("http://localhost:3000//api/jobs/jobuploads", {
//         method: "GET",
//       });

//       if (!res.ok) {
//         throw new Error("Network response was not ok");
//       }
//       console.log(data);
//       const result = await res.json();
//       setData(result);
//     } catch (error) {
//       setError(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchData();
// }, []);



const Joblisting = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  const getJobs = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000//api/jobs/jobupload", {
        method: "GET",
      });

      const resData = await res.json();
      console.log(resData);
      console.log(resData.data);
      if (res.ok) {
        setLoading(false);
        setJobs(resData.data);
      }
    } catch (error) {
      console.error("something went wrong ");
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  if (loading) {
    return (
      <div>
     <PageLoading/>
      </div>
    );
  }

  return (
    <>
      <div className="gradiant-bg"></div>
      <div>
        <SelectBar />
      </div>
      <div className="hidden md:block">
        <LargeCard />
      </div>
      <div className=":block md:hidden">
        <SmallCard />
      </div>
    </>
  );
};

export default withAuth(Joblisting);
