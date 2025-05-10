import React, { useEffect } from "react";
import GetInTouch from "./GetInTouch";
import Footer from "../Components/Footer";
import Nabbar from "../Components/Nabbar";

const FrontEndDev = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  return (
    <div>
      <Nabbar />

      <div className=" h-56 flex relative ">
        <img
          src="/Front-End-Dev-jpg/dowffnload.webp"
          className=" w-full object-cover"
          alt=""
        />

        <div className="absolute text-white text-2xl font-semibold flex flex-col h-full justify-center text-center items-center w-full">
          <span className=" font-bold text-2xl text-white ">
            Front End Development Services
          </span>
        </div>
      </div>

      <div className="  flex justify-center text-xl font-thin py-8">
        <span className="border-b-2 py-3 border-orange-300">
          Platform and technologies
        </span>
      </div>



















      <div className=" flex flex-wrap">
        <div className="border  px-8  py-10 flex flex-col text-center sm:w-1/3 ">
          <div className="flex justify-center pb-1">
            <img
              src="/Front-End-Dev-jpg/vuejs.png.webp"
              className=""
              alt=""
            />
          </div>

          <span className="py-4">
            Build high-performing real time applications with ISHIR’s Vue.JS
            Development Services There can be leakages in your software
            applications, security breaches
          </span>
          <div className="flex justify-center">
            <button className="rounded-3xl hover:bg-yellow-400 duration-500 border-gray-800 hover:text-white du border flex justify-center items-center py-2.5 w-3/5 ">
              EXPLORE MORE
            </button>
          </div>
        </div>

        <div className="border   px-8  py-10 flex flex-col text-center  sm:w-1/3 ">
          <div className="flex justify-center pb-1">
            <img src="/Front-End-Dev-jpg/bootstrap.png.webp" alt="" />
          </div>

          <span className="py-4">
            Get responsive website and applications ready with ISHIR’s Bootstrap
            Development Services The Bootstrap technology can offer several
            features in your
          </span>
          <div className="flex justify-center">
            <button className="rounded-3xl hover:bg-yellow-400 duration-500 border-gray-800 hover:text-white du border flex justify-center items-center py-2.5 w-3/5 ">
              EXPLORE MORE
            </button>
          </div>
        </div>

        <div className="border  px-8  py-10 flex flex-col text-center sm:w-1/3 ">
          <div className="flex justify-center pb-1">
            <img src="/Front-End-Dev-jpg/reactjs.png.webp" alt="" />
          </div>

          <span className="py-4">
            Build extensive and user-friendly web apps with ISHIR’s dedicated
            ReactJS Development team Irrespective of your industry, a powerful
            web app
          </span>
          <div className="flex justify-center">
            <button className="rounded-3xl hover:bg-yellow-400 duration-500 border-gray-800 hover:text-white du border flex justify-center items-center py-2.5 w-3/5 ">
              EXPLORE MORE
            </button>
          </div>
        </div>

        <div className="border  px-8  py-10 flex flex-col text-center sm:w-1/3 ">
          <div className="flex justify-center pb-1">
            <img
              src="/Front-End-Dev-jpg/angular-logo.png.webp"
              alt=""
            />
          </div>

          <span className="py-4">
            We help our clients develop scalable, customizable and simply
            powerful Angular web and mobile app solutions In an extremely
            competitive
          </span>
          <div className="flex justify-center">
            <button className="rounded-3xl hover:bg-yellow-400 duration-500 border-gray-800 hover:text-white du border flex justify-center items-center py-2.5 w-3/5 ">
              EXPLORE MORE
            </button>
          </div>
        </div>

        <div className="border  px-8  py-10 flex flex-col text-center sm:w-1/3 ">
          <div className="flex justify-center pb-1">
            <img
              src="/Front-End-Dev-jpg/angular-logo.jpg.webp"
              alt=""
            />
          </div>

          <span className="py-4">
            We help our clients develop scalable, customizable and simply
            powerful Angular web and mobile app solutions In an extremely
            competitive
          </span>
          <div className="flex justify-center">
            <button className="rounded-3xl hover:bg-yellow-400 duration-500 border-gray-800 hover:text-white du border flex justify-center items-center py-2.5 w-3/5 ">
              EXPLORE MORE
            </button>
          </div>
        </div>

        <div className="border  px-8  py-10 flex flex-col text-center sm:w-1/3 ">
          <div className="flex justify-center pb-1">
            <img
              src="/Front-End-Dev-jpg/rails-logo.jpg.webp"
              alt=""
            />
          </div>

          <span className="py-4">
            Ruby On Rails Development At ISHIR, our developers are ardent about
            Rails; and Ruby on Rails programmers of our
          </span>
          <div className="flex justify-center">
            <button className="rounded-3xl hover:bg-yellow-400 duration-500 border-gray-800 hover:text-white du border flex justify-center items-center py-2.5 w-3/5 ">
              EXPLORE MORE
            </button>
          </div>
        </div>
      </div>




























      

      <div className="flex items-center  flex-col py-14 px-2 ">
        <span className="text-2xl">WANT TO START DISCUSSION?</span>
        <div className="my-8 px-12 py-6  font-semibold text-lg bg-amber-500  flex justify-center rounded-3xl sm:w-3/12 border-2 border-amber-500 hover:bg-white duration-200 hover:text-amber-500">
          <button>CONTACT US NOW</button>
        </div>
        <span className="text-lg">Related Case Studies</span>
      </div>

      <GetInTouch />
      <Footer />

    </div>
  );
};

export default FrontEndDev;
