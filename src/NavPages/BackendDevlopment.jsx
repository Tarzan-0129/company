import React, { useEffect } from "react";
import GetInTouch from "./GetInTouch";
import Footer from "../Components/Footer";
import Nabbar from "../Components/Nabbar";
import { useNavigate } from "react-router-dom";


const BackendDevlopment = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Nabbar />
      <div className=" h-56 flex relative ">
        <img src="/assets/img/frontend/dowffnload.webp" className=" w-full object-cover" />

        <div className="absolute text-white text-2xl font-semibold flex flex-col h-full justify-center text-center items-center w-full">
          <span className=" font-bold text-2xl text-white ">
            Backend Devlopment
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
          <div className="flex justify-center pb-1  h-44">
            <img className="object-contain" src="/assets/img/backend/215px-Go_Logo_Blue.svg.png" />
          </div>

          <span className="py-4">
            A compiled programming language developed by Google. Go is known for
            its speed, simplicity, and concurrency features. Golang is a good
            choice for building web services, microservices, and cloud-native
            applications.
          </span>
        </div>

        <div className="border   px-8  py-10 flex flex-col text-center  sm:w-1/3 ">
          <div className="flex justify-center pb-1  h-44">
            <img className=" object-contain" src="/assets/img/backend/c-sharp-programming-language-icon.webp" />
          </div>

          <span className="py-4">
            A general-purpose programming language developed by Microsoft. C# is
            a popular choice for building Windows applications, games, and web
            services. pen_spark
          </span>
        </div>

        <div className="border  px-8  py-10 flex flex-col text-center sm:w-1/3 ">
          <div className="flex justify-center pb-1 h-44">
            <img className=" object-contain" src="/assets/img/backend/Java_programming_language_logo.svg.png" />
          </div>

          <span className="py-4">
            While traditionally used for front-end development, JavaScript with
            Node.js allows you to build scalable server-side applications.
            Node.js is popular for real-time applications, single-page
            applications (SPAs) and I/O bound tasks.
          </span>
        </div>

        <div className="border  px-8  py-10 flex flex-col text-center sm:w-1/3 ">
          <div className="flex justify-center pb-1 h-44">
            <img src="/assets/img/backend/JavaScript-logo.png" alt="" className=" object-contain" />
          </div>

          <span className="py-4">
            While traditionally used for front-end development, JavaScript with
            Node.js allows you to build scalable server-side applications.
            Node.js is popular for real-time applications, single-page
            applications (SPAs) and I/O bound tasks. pen_spark
          </span>
        </div>

        <div className="border  px-8  py-10 flex flex-col text-center sm:w-1/3 ">
          <div className="flex justify-center pb-1 h-44">
            <img src="/assets/img/backend/PHP-logo.svg.png" alt="" className=" object-contain" />
          </div>

          <span className="py-4">
            An open-source scripting language specifically designed for web
            development. PHP is a mature technology that powers a significant
            portion of the web including popular CMS systems like Wordpress.
            pen_spark
          </span>
        </div>

        <div className="border  px-8  py-10 flex flex-col text-center sm:w-1/3 ">
          <div className="flex justify-center pb-1 h-44">
            <img src="/assets/img/backend/Python-logo-notext.svg.png" alt="" className=" object-contain" />
          </div>

          <span className="py-4">
            A general-purpose programming language known for its readability and
            vast array of libraries. Python is widely used in web development,
            data science, and machine learning.
          </span>
        </div>
      </div>

      <div className="flex items-center  flex-col py-14 px-2 ">
        <span className="text-2xl">WANT TO START DISCUSSION?</span>
        <div className="my-8 px-12 py-6  font-semibold text-lg bg-amber-500  flex justify-center rounded-3xl sm:w-3/12 border-2 border-amber-500 hover:bg-white duration-200 hover:text-amber-500" onClick={() => navigate("/contactus")}>
          <button >CONTACT US NOW</button>
        </div>
        <span className="text-lg">Related Case Studies</span>
      </div>
      <GetInTouch />
      <Footer />
    </>
  );
};

export default BackendDevlopment;
