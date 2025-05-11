import React, { useState } from "react";

import { CiFacebook } from "react-icons/ci";
import { RiInstagramLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

const Nabbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [isService, setIsService] = useState(false);
  const [isTECHNOLOGIES, setIsTECHNOLOGIES] = useState(false);
  const [isPRODUCTS, setIsPRODUCTS] = useState(false);
  // console.log(isHamTrue.service);

  const changeBackground = () => {
    if (window.scrollY >= 2) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function HandleHamTrue() {
    setIsService((perv) => !perv);
  }

  function HandleisTECHNOLOGIES() {
    setIsTECHNOLOGIES((perv) => !perv);
  }

  function HandleisPRODUCTS() {
    setIsPRODUCTS((perv) => !perv);
  }

  return (
    <div>
      {isOpenMenu && (
        <div className="sm:hidden fixed z-20 inset-0 bg-slate-800">
          <div className="relative text-end mr-4 mt-4 ">
            <button className="" onClick={() => setIsOpenMenu(false)}>
              <ImCross color="white" size={40} />
            </button>
          </div>

          <div className="flex flex-col pt-8 text-white text-2xl font-semibold  text-center gap-4 ">
            <Link to={"/"}>HOME</Link>

            <div className="">
              <span onClick={HandleHamTrue} className="px-2 ">
                SERVICES
              </span>

              <div
                className={`transition-all duration-500 bg-white text-xs px-2 text-black gap-2.5 flex flex-col w-full overflow-hidden   ${
                  isService ? "max-h-60 py-3 " : "max-h-0 py-0"
                }`}
              >
                <span className="">
                  <Link to={"/softwaredevelopment"}>SoftwareDevelopment</Link>
                </span>
                <span className="">Consultansy</span>
                <span className="">Testing</span>
                <span className="">Emerging</span>
                <span className="">Cloud</span>
                <span className="">Data Analytics</span>
                <span className="">Staff Augmentation</span>
                <span className="">Projct Management Services</span>
              </div>
            </div>

            <p>
              <Link to={"/about"}> ABOUT </Link>
            </p>

            <div className="">
              <span onClick={HandleisTECHNOLOGIES}>TECHNOLOGIES</span>
              <div
                className={`transition-all duration-500 bg-white text-xs px-2 text-black gap-2.5 flex flex-col w-full overflow-hidden   ${
                  isTECHNOLOGIES ? "max-h-96 py-3" : "max-h-0 py-0"
                }`}
              >
                <span className="hover:cursor-pointer">
                  <Link to={"/InternshipAndTraining"}>
                    {" "}
                    Internship & Training{" "}
                  </Link>
                </span>
                <span className="hover:cursor-pointer">
                  <Link to={"/frontenddev"}> Front End Development </Link>
                </span>
                <span className="hover:cursor-pointer">Backend Devlopment</span>
                <span className="hover:cursor-pointer">
                  Fullstack Development
                </span>
                <span className="hover:cursor-pointer">
                  <Link to={"/database"}> Database Management Services </Link>
                </span>
                <span className="hover:cursor-pointer">
                  <Link to={"/mobileappdev"}> Mobile App Development </Link>
                </span>
                <span className="hover:cursor-pointer">Cloud and Infra</span>
                <span className="hover:cursor-pointer">
                  Data Analytics and Reporting
                </span>
                <span className="hover:cursor-pointer">Ecommerce</span>
                <span className="hover:cursor-pointer">QA</span>
              </div>
            </div>

            <div>
              <span onClick={HandleisPRODUCTS}>PRODUCTS</span>
              <div
                className={`transition-all duration-500 bg-white text-xs px-2 text-black gap-2.5 flex flex-col w-full overflow-hidden  ${
                  isPRODUCTS ? "max-h-60 py-3 " : "max-h-0 py-0"
                }`}
              >
                <span className="">Clients</span>
                <span className="">Success Stories</span>
                <span className="">Testimonials</span>
                <span className="">More Case Studies</span>
              </div>
            </div>
            <p>
              <Link to={"/blog"}> BLOG </Link>
            </p>
            <p>
              <Link to={"/contactus"}> CONTACT US </Link>
            </p>
          </div>
        </div>
      )}

      <div
        className={
          navbar
            ? "bg-blue-400 duration-300 fixed top-0 flex w-full  z-10 items-center py-2"
            : "   duration-300 fixed top-0 flex w-full  z-10 items-center py-2 "
        }
        // className=" z-10 flex fixed justify-between sm:justify-start items-center w-full pt-3 bg-red-300 "
      >
        <div className="">
          <div className=" sm:pl-12">
            <img
              src="/Main-Logo.png"
              alt=""
              className="w-40 sm:w-auto max-h-16"
            />
          </div>
        </div>

        <div className=" sm:hidden mr-4 flex justify-end w-full">
          <button className="" onClick={() => setIsOpenMenu(true)}>
            <GiHamburgerMenu size={40} color="white" />
          </button>
        </div>

        <div className="hidden   text-white text-[8px] sm:text-sm  sm:flex justify-end gap-3 pr-8 w-full  ">
          <p className="hover:cursor-pointer">
            <Link to={"/"}>HOME</Link>
          </p>

          <div className=" relative group   ">
            <p className="hover:cursor-pointer relative group hover:bg-white hover:text-black transition-all duration-200 px-2 group-hover:bg-white group-hover:text-black ">
              SERVICES
            </p>

            <div className="text-xs pt-1 px-2 pb-1 text-black group-hover:bg-white gap-2.5 absolute transition-all duration-200 flex flex-col group  max-h-0 overflow-hidden group-hover:max-h-72 w-44 ">
              <span className="hover:cursor-pointer">
                <Link to={"/softwaredevelopment"}>SoftwareDevelopment</Link>
              </span>
              <span className="hover:cursor-pointer">Consultansy</span>
              <span className="hover:cursor-pointer">Testing</span>
              <span className="hover:cursor-pointer">Emerging</span>
              <span className="hover:cursor-pointer">Cloud</span>
              <span className="hover:cursor-pointer">Data Analytics</span>
              <span className="hover:cursor-pointer">Staff Augmentation</span>
              <span className="hover:cursor-pointer">
                Projct Management Services
              </span>
            </div>
          </div>

          <div className=" relative group  ">
            <p className="hover:cursor-pointer relative group hover:bg-white hover:text-black transition-all duration-100 px-2 group-hover:bg-white group-hover:text-black  ">
              TECHNOLOGIES
            </p>

            <div className="text-xs pt-1 px-2 pb-1 text-black group-hover:bg-white gap-2.5 absolute transition-all duration-200 flex flex-col group  max-h-0 overflow-hidden group-hover:max-h-72 w-44 ">
              <span className="hover:cursor-pointer">
                <Link to={"/InternshipAndTraining"}>
                  {" "}
                  Internship & Training{" "}
                </Link>
              </span>

              <span className="hover:cursor-pointer">
                <Link to={"/frontenddev"}> Front End Development </Link>
              </span>
              <span className="hover:cursor-pointer">
                <Link to={"/backendDevlopment"}> Backend Devlopment </Link>
              </span>
              {/* <span className="hover:cursor-pointer">
                Fullstack Development
              </span> */}
              <span className="hover:cursor-pointer">
                <Link to={"/database"}> Database Management Services </Link>
              </span>
              <span className="hover:cursor-pointer">
                <Link to={"/mobileappdev"}> Mobile App Development </Link>
              </span>
              {/* <span className="hover:cursor-pointer">Cloud and Infra</span> */}
              {/* <span className="hover:cursor-pointer">
                Data Analytics and Reporting
              </span> */}
              {/* <span className="hover:cursor-pointer">Ecommerce</span> */}
              <span className="hover:cursor-pointer">
                <Link to={"/qa"}>QA</Link>
              </span>
            </div>
          </div>

          <p>
            <Link to={"/about"}> ABOUT </Link>
          </p>

          <div className=" relative group  ">
            <p className="hover:cursor-pointer relative group hover:bg-white hover:text-black transition-all duration-300 px-2 group-hover:bg-white group-hover:text-black  ">
              PRODUCTS
            </p>

            <div className="text-xs pt-1 px-2 pb-1 text-black group-hover:bg-white gap-2.5 absolute transition-all duration-700 flex flex-col group  max-h-0 overflow-hidden group-hover:max-h-72 w-44   ">
              <span className="hover:cursor-pointer">Clients</span>
              <span className="hover:cursor-pointer">Success Stories</span>
              <span className="hover:cursor-pointer">Testimonials</span>
              <span className="hover:cursor-pointer">More Case Studies</span>
            </div>
          </div>

          <p>
            <Link to={"/blog"}> BLOG </Link>
          </p>
          <p>
            <Link to={"/contactus"}> CONTACT US </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nabbar;
