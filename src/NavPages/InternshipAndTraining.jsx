import React, { useEffect } from "react";
import Nabbar from "../Components/Nabbar";
import Footer from "../Components/Footer";
import { TbPointFilled } from "react-icons/tb";

const InternshipAndTraining = () => {
  


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  return (
    <>
      <div className="w-full ">
        <Nabbar />
      </div>

      <div className=" h-80 flex relative ">
        <img src="/Internship-pics/Internship-Traning.jpeg" className=" w-full object-cover " />
        <div className="absolute text-white text-2xl sm:text-5xl font-semibold flex flex-col h-full justify-center text-center items-center w-full">
          <span> Internship & Training </span>
        </div>
      </div>

      <div className="flex text-xl text-gray-500 pt-10 gap-8 flex-col sm:pt-20 sm:px-28 text-start sm:text-center px-3 sm:">
        <span>
          The Arisezen  Foundation has the mission of providing job skills training
          and placement for underprivileged youth into entry-level white-collar
          jobs in India. These types of jobs tend to give these youth higher
          income levels than the regular blue-collar work they are offered,
          which helps to substantially raise the economic position of their
          under-resourced families.
        </span>

        <span>
          The Arisezen  Foundation incorporates an Al-driven EdTech platform to
          develop English Communications, Selling Skills, Problem Solving,
          Collaboration, Professionalism & Industry Knowledge in students within
          a 45-day period.
        </span>

        <span>
          Over the last two years, Arisezen  Foundation has trained 15000+ low-income
          youth to get jobs in the BFSI Sector at average salaries between Rs.
          2.40 Lakh to Rs. 3.00 Lakh per annum.
        </span>

        <span>
        Arisezen  Foundation provides Diploma courses in areas like BFSI, ITES,
          Digital Marketing etc and uses a blended learning platform which
          incorporates behavioural science & data analytics to develop the
          following employability traits which are in high demand by companies:
        </span>
      </div>
      <div className="flex justify-center">
        <img src="/Internship-pics/Internship-Traning-1.jpg" className="w-4/5 object-contain" alt="" />
      </div>

      <div className="bg-[#3D1C38] flex text-xl px-3 text-gray-300 gap-8 flex-col py-16 sm:px-28 text-start sm:text-center ">
        <span>
        Arisezen's employability model is capital efficient, as its technology
          infrastructure and admin costs are subsidised by its sister company
          Smart Institute Pvt. Ltd. More than 90% of funds raised are used for
          implementing its skilling projects. Around 15000+ students in Mumbai
          have been trained to get jobs in the BFSI sector through grant funding
          from JP Morgan and other funders at salaries up to Rs. 450,000/ per
          annum.
        </span>

        <span>
          We aim to expand our reach to train 1 million students in Indian tier
          two cities like Nashik, Pune, Vadodara, Indore, and Ahmedabad. We are
          looking for additional funding partners and NGOs to help us reach this
          goal.
        </span>
      </div>

      <div className="flex flex-col justify-center sm:text-center sm:py-10 py-8 sm:px-16 px-3 gap-6 text-lg bg-gray-200">
        <span className="text-3xl font-semibold text-center">
          Skilling Program
        </span>
        <span>
          We have partnered with Thadomal Shahani Centre for Management (TSCFM)
          for delivering our skills and placement programs. Backed by 60 years
          of experience TSCFM, is a premier business institute ranked at no. 3
          among colleges offering Global Business Courses in India by Outlook
          Magazine.
        </span>
        <span>
          Together, we’re committed to providing accessible, high-quality
          education and training to empower blue-collared children with
          white-collared jobs.
        </span>
      </div>

      <div className="flex sm:flex-row flex-col px-3 gap-6 py-3 sm:px-20 bg-gray-200 sm:pt-16 sm:justify-around sm:w-full ">
        <div className="border shadow-2xl rounded-2xl overflow-hidden sm:w-96  flex flex-col bg-white">
          <img src="/Internship-pics/Internship-Traning-2.jpg" alt="" className="" />

          <div className="flex flex-col items-start justify-center px-4 ">
            <span className="font-bold text-xl py-4">FrontEnd Devlopment</span>
            <div className="pb-6 text-gray-700">
              <span className="flex flex-row items-center gap-2">
                <TbPointFilled /> 3 Months Full Time Program
              </span>
              <span className="flex flex-row items-center gap-2">
                <TbPointFilled />
                UGC Recognised Degree
              </span>
              <span className="flex flex-row items-center gap-2">
                <TbPointFilled />2 qualifications in 1 Management program
              </span>
              <span className="flex flex-row items-center gap-2">
                <TbPointFilled />
                Globally Accepted Certification
              </span>
              <span className="flex flex-row items-center gap-2">
                <TbPointFilled />
                100% Placement Assistance
              </span>
              <span className="flex flex-row items-center gap-2">
                <TbPointFilled />
                International Curriculum
              </span>
            </div>
          </div>

          <div className="flex  justify-center pb-4">
            <button className="bg-indigo-600 hover:bg-indigo-800 transition-all duration-300 text-gray-300 hover:text-white py-2 px-10 rounded-lg text-xl">
              Know More
            </button>
          </div>
        </div>

        <div className="border shadow-2xl rounded-2xl overflow-hidden sm:w-96 flex flex-col bg-white">
          <img src="/Internship-pics/Internship-Traning-3.jpg" alt="" className="" />

          <div className="flex flex-col items-start justify-center px-4 ">
            <span className="font-bold text-xl py-4">Backend Devlopment</span>
            <div className="pb-6 text-gray-700">
              <span className="flex flex-row items-center gap-2">
                <TbPointFilled /> 3 months Online / Offline Lectures
              </span>
              <span className="flex flex-row items-center gap-2">
                <TbPointFilled />
                Guaranteed Interview Opportunity
              </span>
              <span className="flex flex-row items-center gap-2">
                <TbPointFilled />
                Students in the final year of Graduation
              </span>
              <span className="flex flex-row items-center gap-2">
                <TbPointFilled />
                Language & Communication
              </span>
              <span className="flex flex-row items-center gap-2">
                <TbPointFilled />
                Resume Writing
              </span>
              <span className="flex flex-row items-center gap-2">
                <TbPointFilled />
                International Curriculum
              </span>
            </div>
          </div>

          <div className="flex  justify-center pb-4">
            <button className="bg-indigo-600 hover:bg-indigo-800 transition-all duration-300 text-gray-300 hover:text-white py-2 px-10 rounded-lg text-xl">
              Know More
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default InternshipAndTraining;
