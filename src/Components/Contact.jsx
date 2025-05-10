import React, { useState } from "react";
import { GrNotes } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";

function Contact() {
  const [form, setForm] = useState(false);

  return (
    <div className="absolute z-20">
      <div onClick={() => setForm((perv) => !perv)} className="cursor-pointer">
        <div className="fixed bottom-2/4 right-14 ">
          <div className="  sm:text-2xl font-semibold">
            <div>
              <GrNotes className="sm:h-14 h-8 w-full text-black" />
            </div>
            <div className="text-yellow-600 font-bold ">
              Get In
              <br /> Touch
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${form ? "block" : "hidden"} fixed inset-0 bg-black/70   `}
      >
        <div className="sm:m-32 m-10 flex justify-center items-center rounded-md py-8 ">
          <div className="gap-1 bg-white sm:py-10 py-3 rounded-lg flex flex-col px-3">
            <div
              onClick={() => setForm(false)}
              className="w-full flex cursor-pointer justify-end sm:pb-4"
            >
              <RxCross2 size={25} />
            </div>
            <p className="text-3xl font-semibold pb-10">
              Want to discuss your project ?
            </p>
            <div className="flex gap-4 flex-col sm:flex-row">
              <input
                className="h-12 border-b"
                type="text"
                placeholder=" Your Name * "
              />
              <input
                className="h-12 border-b "
                type="text"
                placeholder=" Your Email * "
              />
            </div>
            <div className="flex gap-4 flex-col sm:flex-row">
              <input
                className="h-12 border-b"
                type="text"
                placeholder=" Phone Number * "
              />
              <input
                className="h-12 border-b"
                type="text"
                placeholder=" Looking For *  "
              />
            </div>
            <input
              className="h-12 border-b"
              type="text"
              placeholder=" Skype ID / WhatsApp No "
            />

            <input
              className="h-12 border-b"
              type="text"
              placeholder=" Your Message "
            />

            <div className="mt-3 w-full text-white flex justify-center gap-4 text-sm ">
              <button className=" bg-red-700  h-10 rounded-md  font-bold w-1/2">
                Enquiry Now
              </button>

              <button className="bg-green-600 h-10  rounded-md  font-bold w-1/2">
                <a
                  href="https://api.whatsapp.com/send/?phone=9024833455&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Whatsapp Us
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
