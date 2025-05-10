import React from "react";
import { MdHomeWork } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { FaFolderOpen } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";
import { BsStars } from "react-icons/bs";
import { FaUsers } from "react-icons/fa6";






function WhyArisezen() {
  return (
    <div className="py-12 ">
      <div className="text-black flex flex-col justify-center items-center md:px-48 mx-3 ">
        <p className="text-4xl font-extrabold pb-4 bg-gradient-to-r from-teal-200 to-blue-500 text-transparent bg-clip-text">
          Why Arisezen
        </p>
        <p className="text-center text-xl font-light">
          We are an outcome-focused and result-conscious organization that
          offers a complete portfolio of custom software development, digital
          transformation services, cloud optimization and automation solutions.
        </p>
      </div>

      <div className="flex flex-wrap relative flex-row justify-center items-center">
        <div className="relative cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2 flex justify-center  px-8 flex-col mt-5 mx-10 h-60 w-60 shadow-[0_10px_60px_5px_rgba(0.3,0.3,0.3,0.3)]">
          <div
            className="flex
          justify-start "
          >
            <FaUserFriends  size={45}/>
          </div>

          <div>
            Seasoned Digital Transformation & Best Technology Professionals
          </div>
        </div>

        <div className="relative transition-all hover:-translate-y-2 flex justify-center  px-8 flex-col mt-5 mx-10 h-60 w-60 shadow-[0_10px_60px_5px_rgba(0.3,0.3,0.3,0.3)]">
          <div
            className="flex
          justify-start "
          >
            <MdHomeWork size={45} />
          </div>

          <div>Extensive Experience in Remote IT Services</div>
        </div>

        <div className="relative cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2 flex justify-center  px-8 flex-col mt-5 mx-10 h-60 w-60 shadow-[0_10px_60px_5px_rgba(0.3,0.3,0.3,0.3)]">
          <div
            className="flex
          justify-start "
          
          ><FaHandHoldingHeart size={45} />
          
          </div>

          <div>Build Trust and value long-term Relationships</div>
        </div>

        <div className="relative cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2 flex justify-center  px-8 flex-col mt-5 mx-10 h-60 w-60 shadow-[0_10px_60px_5px_rgba(0.3,0.3,0.3,0.3)]">
          <div
            className="flex
          justify-start "
          >
            <BiSolidLike  size={45}/>
          </div>

          <div>
            High-Quality of Service and Track record of successful Outcomes
          </div>
        </div>

        <div className="relative cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2 flex justify-center  px-8 flex-col mt-5 mx-10 h-60 w-60 shadow-[0_10px_60px_5px_rgba(0.3,0.3,0.3,0.3)]">
          <div
            className="flex
          justify-start "
          >
            <FaFolderOpen size={45} />
          </div>

          <div>Strong Project Management</div>
        </div>

        <div className="relative cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2 flex justify-center  px-8 flex-col mt-5 mx-10 h-60 w-60 shadow-[0_10px_60px_5px_rgba(0.3,0.3,0.3,0.3)]">
          <div
            className="flex
          justify-start "
          >
            <HiLightBulb  size={45}/>
          </div>

          <div>Continuous Innovation</div>
        </div>

        <div className="relative cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2 flex justify-center  px-8 flex-col mt-5 mx-10 h-60 w-60 shadow-[0_10px_60px_5px_rgba(0.3,0.3,0.3,0.3)]">
          <div
            className="flex
          justify-start "
          >
            <BsStars size={45}/>
          </div>

          <div>Focus on Excellence in everything we do</div>
        </div>

        <div className="relative cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2 flex justify-center  px-8 flex-col mt-5 mx-10 h-60 w-60 shadow-[0_10px_60px_5px_rgba(0.3,0.3,0.3,0.3)]">
          <div
            className="flex
          justify-start "
          >
            <FaUsers size={45}/>
          </div>

          <div>Our Culture sets us apart.</div>
        </div>
      </div>
    </div>
  );
}

export default WhyArisezen;
