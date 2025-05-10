import { FaFacebookSquare, FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";

import React, { useEffect } from "react";
import { IoLocationSharp } from "react-icons/io5";

import { IoMdPerson } from "react-icons/io";
import Nabbar from "./Nabbar";

import Footer from "./Footer";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="w-full">
        <Nabbar />
      </div>

      <div className=" h-80 flex relative">
        <img
          src="/About-pics/About-Main.webp"
          className=" w-full object-cover"
        />
        <div className="absolute text-white text-2xl sm:text-5xl font-semibold flex flex-col h-full justify-center text-center items-center w-full">
          <p>Contact us</p>
        </div>
      </div>

      <div className="bg-gradient-to-b from-blue-950 to-white  px-3">
        <div className="py-8 text-center text-white text-xl">
          <p>
            We have professional alliance's with leading Universities and
            Colleges around the world.
          </p>
        </div>

        <div className="bg-white sm:p-14 p-8  rounded-3xl flex flex-col sm:flex-row  ">
          <div className="bg-blue-950 text-white sm:w-2/5  rounded-3xl p-10  flex flex-col gap-3  ">
            <div>
              <p className="font-bold text-xl"> Get in touch</p>
            </div>

            <div className="flex gap-3 items-center justify-start">
              <IoLocationSharp size={40} className="text-purple-700" />
              <p>
                Forum, DLF Cyber City Rd, DLF Phase 3, Gurugram, Haryana 122002.
              </p>
            </div>

            <div className="flex gap-3 items-center justify-start">
              <MdCall size={27} className="text-yellow-500" />
              <p>9024833455</p>
            </div>

            <div className="flex gap-3 items-center justify-start">
              <HiOutlineMailOpen size={28} className="text-orange-500" />
              <p>thenawalorghrd@gmail.com</p>
            </div>

            <div className="flex gap-3 py-6 text-orange-600 ">
              <FaFacebookSquare size={40} />

              <div>
                <a
                  href="https://www.instagram.com/arisezen2024/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={40} />
                </a>
              </div>
              <FaYoutube size={40} />
              <div>
                <a
                  href="https://www.linkedin.com/showcase/arisezen/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoLinkedin size={40} />
                </a>
              </div>
            </div>
          </div>

          <div className=" sm:w-2/3 sm:px-4 pt-4 pb-10 ">
            <div>
              <p className="font-bold text-xl">Primary Information</p>
            </div>

            <div className="flex flex-wrap  justify-center gap-5 py-3 ">
              <div className="py-4 border rounded-xl  outline-none flex justify-start items-center w-80 ">
                <IoMdPerson className=" w-1/6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Frist name"
                  className="outline-none w-5/6 px-1"
                />
              </div>

              <div className="py-4 border rounded-xl  outline-none flex justify-start items-center w-80  ">
                <IoMdPerson className=" w-1/6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Last name"
                  className="outline-none w-5/6 px-1"
                />
              </div>
              <div className="py-4 border rounded-xl  outline-none flex justify-start items-center w-80 ">
                <HiOutlineMailOpen className=" w-1/6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Email address"
                  className="outline-none w-5/6 px-1"
                />
              </div>
              <div className="py-4 border rounded-xl  outline-none flex justify-start items-center w-80 ">
                <FaPhoneAlt className=" w-1/6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Phone number"
                  className="outline-none w-5/6 px-1"
                />
              </div>
            </div>

            <div className=" border rounded-xl  outline-none  h-52  w-full">
              <textarea
                name=""
                id=""
                cols="30"
                placeholder="Write description..."
                rows="10"
                className="rounded-xl px-4 outline-none py-2 w-full h-full"
              />
            </div>
          </div>
        </div>

        <div className="flex sm:justify-end py-3 gap-4 justify-center sm:text-lg text-sm">
          <button className="bg-red-600 sm:px-12 hover:bg-red-900 transition-all duration-500 rounded-xl text-white font-bold py-4 sm:w-60 w-1/2 ">
            Submit Message
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
