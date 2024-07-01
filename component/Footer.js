import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <div>
        <hr />
      </div>

      <div className=" w-11/12 mx-auto container flex flex-row  justify-between lg:justify-items-end items-center ">
        <div className="">
          <Link href="/" className="py-4 px-2 ">
            <Image src="/jobme.png" width={100} height={100} alt="logo"/>
          </Link>

          {/* FOOTER ICONS */}
          <div className=" flex flex-col lg:flex-row ">
            <span>
              <p className="mt-1">Find Us On:</p>
            </span>

            <div className="flex flex-row gap-2 ">
              <img src="/facebook.png" alt="facebook" />
              <img src="/linkedinn.png" alt="linkedin" />
              <img src="/insta.png" alt="insta" />
              <img src="/twitterr.png" alt="twitter" />
            </div>
          </div>
        </div>
        {/* BOTTOM LINKS */}
        <div>
          <ul className="  flex flex-col lg:flex-row gap-3 lg:gap-8 justify-between mt-5 footer-link list-disc ">
            <li>
              <Link href="/joblisting">Find Jobs</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li>
              <Link href="/signup">Sign Up</Link>
            </li>
            <li>
              <Link href="/login">Log In</Link>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
      </div>
    </div>
  );
};

export default Footer;
