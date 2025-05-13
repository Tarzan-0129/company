import React, { useEffect } from "react";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { CiCirclePlus } from "react-icons/ci";
import Nabbar from "./Nabbar";
import Footer from "./Footer";

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div>
      <div>
        <Nabbar />
      </div>

      <div className=" h-80  flex relative  ">
        <img src="/assets/img/about/About.JPG" className=" w-full object-cover" />
        <div className="absolute text-white text-2xl sm:text-5xl font-semibold flex flex-col h-full justify-center text-center items-center w-full">
          <p>About Us</p>
        </div>
      </div>

      <div className="py-12 sm:px-24 ">
        <div className="px-4 py-8 flex gap-3 flex-col">
          <p className="text-3xl font-normal sm:py-10 border-b-2 border-orange-400 ">
            Who we are
          </p>
          <p className="text-3xl font-semibold">
            We are a team of innovators and problem solvers dedicated to transforming how digital products are built. Through consulting-led strategies, we accelerate innovation using data-driven insights, emerging technologies like AI, and world-class user experience design — all powered by global digital talent.
          </p>
          <p className="text-3xl font-sans sm:pt-4">
            Build Software Right, First Time.
          </p>

          <p className="text-lg text-gray-500">
            TechsavyPool  is US-based digital innovation & enterprise AI studio that
            empowers ambitious early-stage startups, growth businesses &
            enterprises to design and develop innovative, impactful digital
            products using talented Agile product team PODs.
          </p>

          <p className="text-lg text-gray-500">
            Our clients realize real business returns from new technology
            initiatives because we arm them with our proprietary innovation &
            data/AI acceleration process and a best-in-class, experienced
            digital-first teams.
          </p>

          <p className="text-gray-500 text-lg">
            Working with us, our clients move faster, align their stakeholders
            early, reduce their project risk, with fewer costly rework, improve
            time-to-market and increase the impact of bringing new digital
            products to life.
          </p>
        </div>

        <div className="flex justify-center  items-center  flex-wrap gap-4 m-1 sm:m-o">
          <div className="border-2 border-orange-500 flex flex-col items-center sm:h-56 sm:w-44 w-11/12 h-36 justify-center   rounded-tl-xl rounded-br-xl hover:scale-110 transition-all duration-200 hover:bg-orange-500 hover:text-white">
            <p className="font-bold">2022</p>
            <p className="font-thin">Established</p>
          </div>

          <div className="border-2 border-orange-500 flex flex-col items-center sm:h-56 sm:w-44 w-11/12 h-36 justify-center   rounded-tl-xl rounded-br-xl hover:scale-110 transition-all duration-200 hover:bg-orange-500 hover:text-white">
            <p className="font-bold">21</p>
            <p className="font-thin">Team Members</p>
          </div>

          <div className="border-2 border-orange-500 flex flex-col items-center sm:h-56 sm:w-44 w-11/12 h-36 justify-center  text-center  rounded-tl-xl rounded-br-xl hover:scale-110 transition-all duration-200 hover:bg-orange-500 hover:text-white">
            <p className="font-bold">8</p>
            <p className="font-thin">Countries Talent Represented</p>
          </div>

          <div className="border-2 border-orange-500 flex flex-col items-center sm:h-56 sm:w-44 w-11/12 h-36 justify-center   rounded-tl-xl rounded-br-xl hover:scale-110 transition-all duration-200 hover:bg-orange-500 hover:text-white">
            <p className="font-bold">9.13</p>
            <p className="font-thin">Employee Satisfaction</p>
          </div>

          <div className="border-2 border-orange-500 flex flex-col items-center sm:h-56 sm:w-44 w-11/12 h-36 justify-center   rounded-tl-xl rounded-br-xl hover:scale-110 transition-all duration-200 hover:bg-orange-500 hover:text-white">
            <p className="font-bold">8.99</p>
            <p className="font-thin">Client NPS</p>
          </div>

          <div className="border-2 border-orange-500 flex flex-col items-center sm:h-56 sm:w-44 w-11/12 h-36 justify-center   rounded-tl-xl rounded-br-xl hover:scale-110 transition-all duration-200 hover:bg-orange-500 hover:text-white">
            <p className="font-bold">98%</p>
            <p className="font-thin">Remote Teams</p>
          </div>

          <div className="border-2 border-orange-500 flex flex-col items-center sm:h-56 sm:w-44 w-11/12 h-36 justify-center   rounded-tl-xl rounded-br-xl hover:scale-110 transition-all duration-200 hover:bg-orange-500 hover:text-white">
            <p className="font-bold">43%</p>
            <p className="font-thin">Women Team Members</p>
          </div>

          <div className="border-2 border-orange-500 flex flex-col items-center sm:h-56 sm:w-44 w-11/12 h-36 justify-center text-center  rounded-tl-xl rounded-br-xl hover:scale-110 transition-all duration-200 hover:bg-orange-500 hover:text-white">
            <p className="font-bold">8+</p>
            <p className="font-thin">Average Team Members Tenure</p>
          </div>

          <div className="border-2 border-orange-500 flex flex-col items-center sm:h-56 sm:w-44 w-11/12 h-36 justify-center   rounded-tl-xl rounded-br-xl hover:scale-110 transition-all duration-200 hover:bg-orange-500 hover:text-white">
            <p className="font-bold">$0</p>
            <p className="font-thin">Debt</p>
          </div>
        </div>

        <div className="px-16  text-3xl">
          <p className="py-8">
            Our partners are leaders in their space and share the same passion
            as TechsavyPool.
            as TechsavyPool.
          </p>
          <p className="text-gray-500 text-base">
            TechsavyPool has partnered with System Integrators, Interactive/Digital
            Agencies and Software Consulting firms to leverage our strengths in
            offshore development and digital production outsourcing services.
            Learn about our Partner Program.
          </p>

          <div>
            <div className="flex justify-center pt-12  ">
              <div className="border-gray-300  border-1 hover:bg-orange-300 transition-all duration-300 p-3">
                <img src="/assets/img/about/amazon-web-services-logo.jpg.webp" />
              </div>
              <div className="border-gray-300 border-1 hover:bg-orange-300 transition-all duration-300 p-3">
                <img src="/assets/img/about/Apple-1.png.webp" alt="" />
              </div>
              <div className="border-gray-300 border-1 hover:bg-orange-300 transition-all duration-300 p-3">
                <img src="/assets/img/about/Automation-Anywhere.png.webp" alt="" />
              </div>
              <div className="border-gray-300 border-1 hover:bg-orange-300 transition-all duration-300 p-3">
                <img src="/assets/img/about/Bing-Partner.png.webp" alt="" />
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-center  ">
              <div className="border-gray-300 border-1 hover:bg-orange-300 transition-all duration-300 p-3">
                <img src="/assets/img/about/Blue-Prism-Delivery-Partner.png.webp" />
              </div>
              <div className="border-gray-300 border-1 hover:bg-orange-300 transition-all duration-300 p-3">
                <img src="/assets/img/about/cloud-migarator-logo.jpg.webp" />
              </div>
              <div className="border-gray-300 border-1 hover:bg-orange-300 transition-all duration-300 p-3">
                <img src="/assets/img/about/Google-Partner.png.webp" />
              </div>
              <div className="border-gray-300 border-1 hover:bg-orange-300 transition-all duration-300 p-3">
                <img src="/assets/img/about/Group-19-1.png.webp" />
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-center  ">
              <div className="border-gray-300 border-1 hover:bg-orange-300 transition-all duration-300 p-3">
                <img src="/assets/img/about/Group-19.png.webp" />
              </div>
              <div className="border-gray-300 border-1 hover:bg-orange-300 transition-all duration-300 p-3">
                <img src="/assets/img/about/microsoft-goldlogo-small.jpg.webp" />
              </div>
              <div className="border-gray-300 border-1 hover:bg-orange-300 transition-all duration-300 p-3">
                <img src="/assets/img/about/UI-Path-Partner.png.webp" />
              </div>
              <div className="border-gray-300 border-1 hover:bg-orange-300 transition-all duration-300 p-3">
                <img src="/assets/img/about/vm-wave-logo.jpg.webp" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col py-8 px-16 gap-4">
          <p className="font-semibold text-2xl">
            We are your team to count on.
          </p>

          <p className="text-gray-500 text-base">
            TechsavyPool is headquartered in South Carolina, US, with global team
            members from 8+ countries. Our global back-office located in
            South Carolina supporting our organization worldwide.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
