import Link from "next/link";
import Image from "next/image";
import SelectBar from "../HomeComponents/SelectBar";
import withAuth from "@/component/hoc/withAuth";



const Joblisting = () => {
  return (
    <>
      <div className="gradiant-bg"></div>
      <div>
        <SelectBar />
      </div>
      <div>
        <Link href="/joblisting/details-1">Apply</Link>
        <Link href="/joblisting/details-2">Apply</Link>
        <Link href="/joblisting/details-3">Apply</Link>
      </div>
    </>
  );
};

export default withAuth(Joblisting);
