import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "./HomeComponents/Hero";
import SectionOne from "./HomeComponents/SectionOne";
import SectionTwo from "./HomeComponents/SectionTwo";
import SectionThree from "./HomeComponents/SectionThree";
import SectionFour from "./HomeComponents/SectionFour";
import SectionFive from "./HomeComponents/SectionFive";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={""}>
      <Hero />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </main>
  );
}
