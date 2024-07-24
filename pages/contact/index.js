// "use client"

// import Link from "next/link";
// import ContactCard from "./component/ContactCard";
// import { useForm } from "react-hook-form";
// import { useState } from "react";
// import Cookies from "js-cookie";
// import { useRouter } from "next/router";
// import Loading from "@/component/loader/Loading";

// const Contact = () => {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const [loading, setLoading] = useState(false);

//   const router = useRouter();

//   const onSubmit = async (data) => {
//     setLoading(true);
//     console.log(data);
//     try {
//       const formData = {
//         name: data.name,
//         email: data.email,
//         phoneNumber: data.phoneNumber,
//         subject: data.subject,
//         message: data.message
//       };
//       const res = await fetch("api/auth/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       console.log(res);

//       const responseData = await res.json();
//       console.log(responseData);

//        if (res.ok) {
//          setLoading(false);
//          reset();
//          router.push("/");
//          // you can add additional logic like toast,redirect etc here
//        } else {
//          const responseData = await res.json();
//          console.error("Message failed to send", responseData);
//          // setFormError(responseData.message)
//        }
//     } catch (error) {
//        console.log(error, "Something went wrong");
//     }
//   };

//   return (
//     <div>
//       <div className="contactus-bg text-center py-7 lg:pb-20 text-white">
//         <h1 className="text-lg lg:text-[30px]">Get In Touch With Us</h1>
//         <p className="text-sm lg:text-xl lg:font-light lg:mt-2">
//           We want to hear from you
//         </p>
//       </div>
//       <div>
//         <form
//           onSubmit={handleSubmit(onSubmit)}
//           className=" bg-[#DBF7FD] container w-9/12 mx-auto justify-center items-center text-center -mt-8 rounded-lg p-2 py-4 md:w-7/12 "
//         >
//           <div className="w-11/12 lg:w-11/12 lg:mt-5 mx-auto">
//             {/* BREAKPOINT ONE */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 lg:justify-between lg:items-center lg:gap-8 md:mt-4">
//               <div>
//                 <input
//                   {...register("name", {
//                     required: " Your fullname is required",
//                   })}
//                   className="w-full lg:text-sm m-auto px-2 py-2 lg:py-[6px] mb-3 text-black bg-white border border-gray-400 rounded-md lg:rounded-lg placeholder:text-gray-400 outline-gray-500"
//                   type="text"
//                   placeholder="Name*"
//                   id="name"
//                 />
//                 {errors.name && (
//                   <p className="text-red-500 text-end -mt-2">
//                     {errors.name.message}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <input
//                   {...register("email", {
//                     required: "Email Address is required",
//                     pattern: {
//                       value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//                       messsage: " Invalid email address ",
//                     },
//                   })}
//                   className="w-full lg:text-sm m-auto px-2 py-2 lg:py-[6px] mb-3 text-black bg-white border border-gray-400 rounded-md lg:rounded-lg placeholder:text-gray-400 outline-gray-500"
//                   type="email"
//                   placeholder="Email*"
//                   id="email"
//                 />
//                 {errors.email && (
//                   <p className="text-red-500 text-end -mt-2">
//                     {errors.email.message}
//                   </p>
//                 )}
//               </div>
//             </div>
//             {/* BREAKPOINT TWO */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 lg:justify-between lg:items-center lg:gap-8 lg:mt-5">
//               <div>
//                 <input
//                   {...register("phone", {
//                     required: " Your phone number is required",
//                   })}
//                   className="w-full lg:text-sm m-auto px-2 py-2 lg:py-[6px] mb-3 text-black bg-white border border-gray-400 rounded-md lg:rounded-lg placeholder:text-gray-400 outline-gray-500"
//                   type="tel"
//                   placeholder="Phone number*"
//                   id="phone"
//                 />
//                 {errors.phone && (
//                   <p className="text-red-500 text-end -mt-2">
//                     {errors.phone.message}
//                   </p>
//                 )}
//               </div>
//               <div>
//                 <input
//                   {...register("subject", {
//                     required: " A subject is required",
//                   })}
//                   className="w-full lg:text-sm m-auto px-2 py-2 lg:py-[6px] mb-3 text-black bg-white border border-gray-400 rounded-md lg:rounded-lg placeholder:text-gray-400 outline-gray-500"
//                   type="text"
//                   placeholder="Subject*"
//                   id="subject"
//                 />
//                 {errors.subject && (
//                   <p className="text-red-500 text-end -mt-2">
//                     {errors.subject.message}
//                   </p>
//                 )}
//               </div>
//             </div>
//             {/* TEXT AREA */}
//             <div className="w-full lg:text-sm m-auto px-2 py-3 lg:mt-5 lg:py-2 mb-3 text-black bg-white border border-gray-400 rounded-md lg:rounded-lg placeholder:text-gray-400 outline-gray-500">
//               <textarea
//                 {...register("message", {
//                   required: " please write what is on your mind",
//                 })}
//                 name="message"
//                 id="message"
//                 className="w-full h-32 lg:h-24 outline-none"
//                 placeholder="Message*"
//               ></textarea>
//             </div>
//             {errors.Message && (
//               <p className="text-red-500 text-end -mt-2">
//                 {errors.message.message}
//               </p>
//             )}
//             {/* SUBMIT BUTTON */}
//             <button
//               type="submit"
//               className="container justify-center items-center btn flex w-full py-2 lg:py-2 lg:mt-8 text-sm mb-4 font-light bg-[#0dcaf0] mx-auto rounded-md lg:rounded-lg p-2 text-white lg:text-lg "
//             >
//               {loading ? <Loading /> : <span>Send Message</span>}
//             </button>
//           </div>
//         </form>
//       </div>
//       <div>
//         <ContactCard />
//       </div>
//     </div>
//   );
// };

// export default Contact;

















"use client";

import Link from "next/link";
import ContactCard from "./component/ContactCard";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Loading from "@/component/loader/Loading";
import MessageSentModal from "@/component/modals/MessageSentModal";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  // const router = useRouter();

const [showStatus, setShowStatus] = useState(false);

  const showMessageStatus = () => {
    setShowStatus(true);
  };
  
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const formData = {
        name: data.name,
        email: data.email,
        phoneNumber: data.phone,
        subject: data.subject,
        message: data.message,
      };

      const res = await fetch("api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Parse the response body once
      const responseData = await res.json();


      if (res.ok) {
        console.log("Message sent successfully:", responseData);
        reset();
        showMessageStatus();
        // router.push("/");
        // Optionally handle successful form submission, e.g., show a toast
      } else {
        console.error("Message failed to send:", responseData);
        // Optionally handle errors from the response
        // setFormError(responseData.message); // Uncomment if you have formError state
      }
    } catch (error) {
      console.error("Something went wrong:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <MessageSentModal show={showStatus} setShow={setShowStatus} />
      <div className="contactus-bg text-center py-7 lg:pb-20 text-white">
        <h1 className="text-lg lg:text-[30px]">Get In Touch With Us</h1>
        <p className="text-sm lg:text-xl lg:font-light lg:mt-2">
          We want to hear from you
        </p>
      </div>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-[#DBF7FD] container w-9/12 mx-auto justify-center items-center text-center -mt-8 rounded-lg p-2 py-4 md:w-7/12"
        >
          <div className="w-11/12 lg:w-11/12 lg:mt-5 mx-auto">
            {/* BREAKPOINT ONE */}
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:justify-between lg:items-center lg:gap-8 md:mt-4">
              <div>
                <input
                  {...register("name", {
                    required: "Your full name is required",
                  })}
                  className="w-full lg:text-sm m-auto px-2 py-2 lg:py-[6px] mb-3 text-black bg-white border border-gray-400 rounded-md lg:rounded-lg placeholder:text-gray-400 outline-gray-500"
                  type="text"
                  placeholder="Name*"
                  id="name"
                />
                {errors.name && (
                  <p className="text-red-500 text-end -mt-2">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  {...register("email", {
                    required: "Email Address is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full lg:text-sm m-auto px-2 py-2 lg:py-[6px] mb-3 text-black bg-white border border-gray-400 rounded-md lg:rounded-lg placeholder:text-gray-400 outline-gray-500"
                  type="email"
                  placeholder="Email*"
                  id="email"
                />
                {errors.email && (
                  <p className="text-red-500 text-end -mt-2">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
            {/* BREAKPOINT TWO */}
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:justify-between lg:items-center lg:gap-8 lg:mt-5">
              <div>
                <input
                  {...register("phone", {
                    required: "Your phone number is required",
                  })}
                  className="w-full lg:text-sm m-auto px-2 py-2 lg:py-[6px] mb-3 text-black bg-white border border-gray-400 rounded-md lg:rounded-lg placeholder:text-gray-400 outline-gray-500"
                  type="tel"
                  placeholder="Phone number*"
                  id="phone"
                />
                {errors.phone && (
                  <p className="text-red-500 text-end -mt-2">
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  {...register("subject", {
                    required: "A subject is required",
                  })}
                  className="w-full lg:text-sm m-auto px-2 py-2 lg:py-[6px] mb-3 text-black bg-white border border-gray-400 rounded-md lg:rounded-lg placeholder:text-gray-400 outline-gray-500"
                  type="text"
                  placeholder="Subject*"
                  id="subject"
                />
                {errors.subject && (
                  <p className="text-red-500 text-end -mt-2">
                    {errors.subject.message}
                  </p>
                )}
              </div>
            </div>
            {/* TEXT AREA */}
            <div className="w-full lg:text-sm m-auto px-2 py-3 lg:mt-5 lg:py-2 mb-3 text-black bg-white border border-gray-400 rounded-md lg:rounded-lg placeholder:text-gray-400 outline-gray-500">
              <textarea
                {...register("message", {
                  required: "Please write what is on your mind",
                })}
                name="message"
                id="message"
                className="w-full h-32 lg:h-24 outline-none"
                placeholder="Message*"
              ></textarea>
            </div>
            {errors.message && (
              <p className="text-red-500 text-end -mt-2">
                {errors.message.message}
              </p>
            )}
            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="container justify-center items-center btn flex w-full py-2 lg:py-2 lg:mt-8 text-sm mb-4 font-light bg-[#0dcaf0] mx-auto rounded-md lg:rounded-lg p-2 text-white lg:text-lg"
              disabled={loading} // Disable button when loading
            >
              {loading ? <Loading /> : <span>Send Message</span>}

            </button>
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

