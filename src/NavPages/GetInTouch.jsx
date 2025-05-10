import React from "react";
import Nabbar from "../Components/Nabbar";

const GetInTouch = () => {
  return (
    <div>
      <Nabbar />
      <div className="flex gap-8 px-10 justify-center sm:flex-row flex-col bg-white py-20">
        <div className="flex relative justify-center items-center text-2xl  group">
          <img src="/Get-In-Touch-Pics/doiiiknload.webp" alt="" />
          <p className="absolute text-white px-4 text-center group-hover:-translate-y-2 duration-1000">
            Let's Talk
          </p>
        </div>

        <div className="flex relative   justify-center items-center group text-2xl  ">
          <img src="/Get-In-Touch-Pics/dokikiwnload.webp" alt="" />
          <p className="absolute text-white px-4 text-center group-hover:-translate-y-2 duration-1000">
            We're Hiring
          </p>
        </div>

        <div className="flex relative  justify-center items-center text-2xl group ">
          <img src="/Get-In-Touch-Pics/doiiiknload.webp" alt="" />
          <p className="absolute text-white px-4 text-center group-hover:-translate-y-2 duration-1000 ">
            Technology Blog The formula for IT - Digital Transformation Projects
            success is here!
          </p>
        </div>
      </div>
      <div className=" bg-gray-100">
        <div className="flex flex-col text-center gap-2 py-8  ">
          <span className="text-3xl"> Get in touch with us</span>
          <p className="text-lg px-3">
            Either by phone or e-mail we would love to answer any questions you
            may have.
          </p>
        </div>

        <div className="flex justify-center sm:gap-10 py-10 sm:flex-row flex-col">
          <div className="hover:text-red-400  bg-white hover:shadow-xl sm:w-3/12 flex flex-col gap-2 justify-center items-center py-10 hover:-translate-y-2 duration-500 ">
            <img src="/Get-In-Touch-Pics/jyukuk.webp" alt="" />
            <span className="">+91 9024833455</span>
          </div>
          <div className="hover:text-red-400  bg-white hover:shadow-xl sm:w-3/12 flex flex-col gap-2 justify-center items-center py-10 hover:-translate-y-2 duration-500">
            <img src="/Get-In-Touch-Pics/download.webp" alt="" />
            <span>Request for Quote</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
