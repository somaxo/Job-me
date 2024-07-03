import Link from "next/link";
import Image from "next/image";
import ContactCard from "./component/ContactCard";

const Contact = () => {
  return (
    <div>
      <div className="contactus-bg text-center py-7 lg:pb-20 text-white">
        <h1 className="text-lg lg:text-[30px]">Get In Touch With Us</h1>
        <p className="text-sm lg:text-xl lg:font-light lg:mt-2">
          We want to hear from you
        </p>
      </div>
      <div>
        <form className=" bg-[#DBF7FD] container w-9/12 mx-auto justify-center items-center text-center -mt-8 rounded-lg p-2 py-4 md:w-7/12 ">
          <div className="w-11/12 lg:w-11/12 lg:mt-5 mx-auto">
            {/* BREAKPOINT ONE */}
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:justify-between lg:items-center lg:gap-8 md:mt-4">
              <div>
                <input
                  className="w-full lg:text-sm m-auto px-2 py-2 lg:py-[6px] mb-3 text-black bg-white border border-gray-400 rounded-md lg:rounded-lg placeholder:text-gray-400 outline-gray-500"
                  type="text"
                  placeholder="Name*"
                  id="name"
                />
              </div>

              <div>
                <input
                  className="w-full lg:text-sm m-auto px-2 py-2 lg:py-[6px] mb-3 text-black bg-white border border-gray-400 rounded-md lg:rounded-lg placeholder:text-gray-400 outline-gray-500"
                  type="email"
                  placeholder="Email*"
                  id="email"
                />
              </div>
            </div>
            {/* BREAKPOINT TWO */}
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:justify-between lg:items-center lg:gap-8 lg:mt-5">
              <div>
                <input
                  className="w-full lg:text-sm m-auto px-2 py-2 lg:py-[6px] mb-3 text-black bg-white border border-gray-400 rounded-md lg:rounded-lg placeholder:text-gray-400 outline-gray-500"
                  type="tel"
                  placeholder="Phone number*"
                  id="phone"
                />
              </div>
              <div>
                <input
                  className="w-full lg:text-sm m-auto px-2 py-2 lg:py-[6px] mb-3 text-black bg-white border border-gray-400 rounded-md lg:rounded-lg placeholder:text-gray-400 outline-gray-500"
                  type="text"
                  placeholder="Subject*"
                  id="subject"
                />
              </div>
            </div>
            {/* TEXT AREA */}
            <div className="w-full lg:text-sm m-auto px-2 py-3 lg:mt-5 lg:py-2 mb-3 text-black bg-white border border-gray-400 rounded-md lg:rounded-lg placeholder:text-gray-400 outline-gray-500">
              <textarea
                name=""
                id="message"
                className="w-full h-32 lg:h-24 outline-none"
                placeholder="Message*"
              ></textarea>
            </div>
            {/* SUBMIT BUTTON */}
            <Link
              href="/"
              className="container justify-center items-center btn flex w-full py-2 lg:py-2 lg:mt-8 text-sm mb-4 font-light bg-[#0dcaf0] mx-auto rounded-md lg:rounded-lg p-2 text-white lg:text-lg "
            >
              Send Message
            </Link>
          </div>
        </form>
      </div>
      <div>
        <ContactCard />
      </div>
    </div>
  );
};

export default Contact;
