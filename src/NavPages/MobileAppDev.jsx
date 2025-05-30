import React, { useEffect } from "react";
import GetInTouch from "./GetInTouch";
import Footer from "../Components/Footer";
import Nabbar from "../Components/Nabbar";
import { useNavigate } from "react-router-dom";
const MobileAppDev = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div>
      <Nabbar />
      <div className=" h-56  bg-red-400 flex relative ">
        <img src="/assets/img/mobile/dowffnload.webp " className=" w-full object-cover" />

        <div className="absolute text-white text-2xl font-semibold flex flex-col h-full justify-center text-center items-center w-full">
          <span className=" font-bold text-3xl text-white ">
            Mobile App Development
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
            <img src="/assets/img/mobile/downloggtad.webp" />
          </div>
          <span className="py-4">
            Get innovative mobile apps with ISHIR’s Apache Cordova Development
            Services Apache Cordova is a popular platform for cross-platform
            mobile apps
          </span>
        </div>

        <div className="border   px-8  py-10 flex flex-col text-center  sm:w-1/3 ">
          <div className="flex justify-center pb-1">
            <img src="/assets/img/mobile/downlerggoad.webp" />
          </div>

          <span className="py-4">
            Create rich and high-performing UI with ISHIR’s NativeScript App Development Services When it comes to mobile development, we always prefer
          </span>
        </div>

        <div className="border  px-8  py-10 flex flex-col text-center sm:w-1/3 ">
          <div className="flex justify-center pb-1">
            <img src="/assets/img/mobile/dogghwnload.webp" />
          </div>

          <span className="py-4">
            Develop innovative hybrid mobile app development with ISHIR’s Ionic Development Services Ionic is one of the most successful cross-platform mobile          </span>
        </div>

        <div className="border  px-8  py-10 flex flex-col text-center sm:w-1/3 ">
          <div className="flex justify-center pb-1">
            <img src="/assets/img/mobile/downlththoad.webp" />
          </div>

          <span className="py-4">
            ISHIR’s Flutter Application Development Services assure amazing and flawless native apps for your business requirements Flutter is a cross-platform app          </span>
        </div>

        <div className="border  px-8  py-10 flex flex-col text-center sm:w-1/3 ">
          <div className="flex justify-center pb-1">
            <img src="/assets/img/mobile/dowhthnload.webp" />
          </div>
          <span className="py-4">
            Engage with the ISHIR for faster and cutting-edge Progressive Web App (PWA) Development Services The Progressive Web App (PWA) Framework       </span>
        </div>

        <div className="border  px-8  py-10 flex flex-col text-center sm:w-1/3 ">
          <div className="flex justify-center pb-1">
            <img src="/assets/img/mobile/dorrwnload.webp" />
          </div>
          <span className="py-4">
            Get high-quality and feature enriched mobile apps with React Native Development capabilities React Native is the next big word in
          </span>
        </div>
      </div>

      <div className="flex items-center  flex-col py-14 px-2 ">
        <span className="text-2xl">WANT TO START DISCUSSION?</span>
        <div className="my-8 px-12 py-6  font-semibold text-lg bg-amber-500  flex justify-center rounded-3xl sm:w-3/12 border-2 border-amber-500 hover:bg-white duration-200 hover:text-amber-500" onClick={() => navigate("/contactus")}>
          <button>CONTACT US NOW</button>
        </div>
        <span className="text-lg">Related Case Studies</span>
      </div>

      <GetInTouch />
      <Footer />
    </div>
  );
};

export default MobileAppDev;
