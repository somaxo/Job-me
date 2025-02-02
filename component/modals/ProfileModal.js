"use client";
import Image from "next/image";
import { useState } from "react";
import {Dialog, DialogBackdrop, DialogPanel, DialogTitle,
} from "@headlessui/react";


export default function ProfileModal({show, setShow}) {
  // const [open, setOpen] = useState(false);

  return (
    <Dialog open={show} onClose={setShow} className="relative z-10">
      <DialogBackdrop
        transition
        className=" data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10  overflow-y-auto">
        <div className="flex relative items-end justify-center text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="absolute right-14 top-20 transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 lg:w-full lg:max-w-60 h-64 "
          >
            <div className=" bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className=" sm:flex sm:items-start w-full">
                <div className="w-full mt-3 text-left sm:mt-0 sm:text-left">
                  <DialogTitle
                    as="h3"
                    className=" text-base font-semibold leading-6 text-gray-900"
                  >
                    Account Information
                  </DialogTitle>
                  <div className="my-3">
                    <p className=" flex justify-start items-center gap-2">
                      <Image
                        src="/myprofile.png"
                        alt="my profile icon"
                        width={20}
                        height={30}
                      />
                      My profile
                    </p>
                  </div>
                  <div className="my-3">
                    <p className="flex justify-start items-center gap-2">
                      <Image
                        src="/settings.png"
                        alt="settings icon"
                        width={20}
                        height={30}
                      />
                      Settings
                    </p>
                  </div>
                  <div className="my-3">
                    <p className="flex justify-start items-center gap-2">
                      <Image
                        src="/help.png"
                        alt="help icon"
                        width={20}
                        height={20}
                      />
                      My profile
                    </p>
                  </div>
                  <hr className="border-y-[1px] border-black mb-1" />
                  <div className="flex justify-start items-center gap-2">
                    <div>
                      <Image
                        src="/kayla.png"
                        alt="kayla icon"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-base">Alicia Kayla</h4>
                      <p>aliciakayla5@gmail.com</p>
                    </div>
                  </div>
                  <hr className="border-y-[1px] border-black mt-1"/>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
