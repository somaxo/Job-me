import Link from "next/link";
import Image from "next/image";
import SelectBar from "../HomeComponents/SelectBar";
import withAuth from "@/component/hoc/withAuth";
import LargeCard from "./component/LargeCard";
import SmallCard from "./component/SmallCard";



const Joblisting = () => {
  return (
    <>
      <div className="gradiant-bg"></div>
      <div>
        <SelectBar />
      </div>
      <div className="hidden lg:block">
        <LargeCard />
      </div>
      <div className=":block lg:hidden">
        <SmallCard />
      </div>
    </>
  );
};

export default withAuth(Joblisting);
