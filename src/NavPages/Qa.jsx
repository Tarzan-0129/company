import React from "react";
import Nabbar from "../Components/Nabbar";

const Qa = () => {
  return (
    <>
      <Nabbar />
      <div className=" h-56  flex relative ">
        <img
          src="public/QA_Pics/QA-Banner.png"
          className=" w-full object-cover"
        />
        <div className="absolute text-white pl-2 sm:text-2xl font-semibold flex flex-col h-full justify-start w-full">
          <div className="absolute bg-gray-400 top-2/4 sm:ml-10 py-2 px-4 rounded-md">
            <span>QA Consultancy</span>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="sm:px-12 flex sm:flex-row flex-col justify-evenly  ">
          <div className="  sm:w-1/3 mx-1 flex items-center">
            <div className="p-1    border-1 border-gray-300  rounded-md">
              <img
                src="public/QA_Pics/download-23.jpg"
                alt=""
                className=" object-contain"
              />
            </div>
          </div>

          <div className="sm:w-1/3 px-2 flex flex-col  justify-evenly gap-4 sm:gap-0">
            <span className="text-2xl text-indigo-700 font-semibold">
              Benefits
            </span>
            <p className="text-gray-500">
              In today's fast-paced business environment, companies must adopt
              new technologies and transform their operational frameworks to
              maintain competitiveness. This scenario might resonate with your
              current challenges.
            </p>
            <div>
              <button className="bg-blue-600 text-white px-4 rounded-md py-1">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="sm:px-12 py-12 flex sm:flex-row flex-col justify-evenly ">
          <div className="  sm:w-1/3 mx-1 flex items-center">
            <div className="p-1    border-1 border-gray-300  rounded-md">
              <img
                src="public/QA_Pics/download-242.jpg"
                alt=""
                className=" object-contain"
              />
            </div>
          </div>

          <div className="sm:w-1/3 px-2 flex flex-col  justify-evenly gap-4 sm:gap-0">
            <span className="text-2xl text-indigo-700 font-semibold">
              Portfolio
            </span>
            <p className="text-gray-500">
              We offer a comprehensive range of consultancy services:
              Establishing QA Process, QA Process Assessment, QA Process
              Improvement, Introducing Test Automation, Providing Consultation
              for Testing Specialized Software & Custom QA Training.
            </p>
            <div>
              <button className="bg-blue-600 text-white px-4 rounded-md py-1">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="sm:px-12 py-12 flex sm:flex-row flex-col justify-evenly  ">
          <div className="  sm:w-1/3 mx-1 flex items-center">
            <div className="p-1    border-1 border-gray-300  rounded-md">
              <img
                src="public/QA_Pics/download-35.jpg"
                alt=""
                className=" object-contain"
              />
            </div>
          </div>

          <div className="sm:w-1/3 px-2 flex flex-col  justify-evenly gap-4 sm:gap-0">
            <span className="text-2xl text-indigo-700 font-semibold">
              Workflow
            </span>
            <p className="text-gray-500">
              Forming the right management and technical teams is a solid
              foundation, yet achieving outstanding results and superior quality
              demands more. Creating a seamless and efficient workflow between
              these teams is pivotal. This is where Quality House's QA
              consultancy services excel.
            </p>
            <div>
              <button className="bg-blue-600 text-white px-4 rounded-md py-1">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Qa;
