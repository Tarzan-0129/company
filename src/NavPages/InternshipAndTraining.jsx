import { useEffect } from "react";
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
      <div className="h-80 flex relative">
        <img
          src="/assets/img/internship/Internship-Traning.jpeg"
          className="w-full object-cover"
        />
        <div className="absolute text-white text-2xl sm:text-5xl font-semibold flex flex-col h-full justify-center text-center items-center w-full">
          <span>Internship & Training</span>
          <span className="text-sm sm:text-lg mt-2 font-light">
            Empowering Youth for a Brighter Future
          </span>
        </div>
      </div>

      <div className="flex text-xl text-gray-500 pt-10 gap-8 flex-col sm:pt-20 sm:px-28 text-start sm:text-center px-3 sm:">
        <div className="text-gray-700">
          <span className="font-semibold text-gray-900">
            The TechsavyPool Foundation
          </span>{" "}
          is dedicated to equipping underprivileged youth with essential job skills and
          placement opportunities in the{" "}
          <span className="font-semibold text-gray-900">IT consultancy industry</span>.
          These roles provide higher income levels compared to traditional blue-collar
          jobs, significantly improving the economic standing of their families.
        </div>
        <div className="text-gray-700">
          Leveraging an{" "}
          <span className="font-semibold text-gray-900">AI-driven EdTech platform</span>
          , the foundation focuses on developing critical skills such as{" "}
          <span className="font-semibold text-gray-900">
            Programming, Analytical Thinking, Problem Solving, Team Collaboration,
            Professionalism, and Industry-Specific Knowledge
          </span>{" "}
          within a{" "}
          <span className="font-semibold text-gray-900">60-day intensive training</span>{" "}
          period.
        </div>
        <div className="text-gray-700">
          Over the past two years, the{" "}
          <span className="font-semibold text-gray-900">TechsavyPool Foundation</span>{" "}
          has successfully trained{" "}
          <span className="font-semibold text-gray-900">10,000+ low-income youth</span>
          , enabling them to secure roles in the{" "}
          <span className="font-semibold text-gray-900">IT consultancy sector</span>{" "}
          with average salaries ranging from{" "}
          <span className="font-semibold text-gray-900">
            $40,000 to $60,000 per annum
          </span>
          .
        </div>
        <div className="text-gray-700">
          The foundation offers specialized{" "}
          <span className="font-semibold text-gray-900">diploma courses</span> in areas
          such as{" "}
          <span className="font-semibold text-gray-900">
            Full Stack Development, Cloud Computing, Data Analytics, and Cybersecurity
          </span>
          . These programs utilize a{" "}
          <span className="font-semibold text-gray-900">blended learning approach</span>
          , integrating{" "}
          <span className="font-semibold text-gray-900">
            behavioral science and data analytics
          </span>{" "}
          to cultivate the following high-demand employability traits sought by{" "}
          <span className="font-semibold text-gray-900">
            IT consultancy firms
          </span>
          :
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src="/assets/img/internship/Internship-Traning-1.jpg"
          className="w-4/5 object-contain"
        />
      </div>

      <div className="bg-[#3D1C38] flex text-xl px-3 text-gray-300 gap-8 flex-col py-16 sm:px-28 text-start sm:text-center">
        <span>
          TechsavyPool's employability model is capital efficient, as its
          technology infrastructure and admin costs are subsidized by its sister
          company Smart Institute Pvt. Ltd. More than 90% of funds raised are
          used for implementing its skilling projects. Around 15,000+ students in
          the US have been trained to get jobs in the BFSI sector through grant
          funding from JP Morgan and other funders at salaries up to $60,000
          per annum.
        </span>

        <span>
          We aim to expand our reach to train 1 million students in US cities like
          Austin, Seattle, San Francisco, Chicago, and Boston. We are
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
          among colleges offering Global Business Courses in United States by Outlook
          Magazine.
        </span>
        <span>
          Together, we’re committed to providing accessible, high-quality
          education and training to empower blue-collared children with
          white-collared jobs.
        </span>
      </div>

      <div className="flex sm:flex-row flex-col px-3 gap-6 py-3 sm:px-20 bg-gray-200 sm:pt-16 sm:justify-around sm:w-full">
        <div className="border shadow-2xl rounded-2xl overflow-hidden sm:w-96 flex flex-col bg-white">
          <img src="/assets/img/internship/Internship-Traning-2.jpg" />

          <div className="flex flex-col items-start justify-center px-4">
            <span className="font-bold text-xl py-4">FrontEnd Development</span>
            <div className="pb-6 text-gray-700">
              <span className="flex flex-row items-center gap-2">
                <TbPointFilled /> 3 Months Full Time Program
              </span>
              <span className="flex flex-row items-center gap-2">
                <TbPointFilled />
                UGC Recognized Degree
              </span>
              <span className="flex flex-row items-center gap-2">
                <TbPointFilled /> 2 qualifications in 1 Management program
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

          <div className="flex justify-center pb-4">
            <a href="/frontenddev">
              <button className="bg-indigo-600 hover:bg-indigo-800 transition-all duration-300 text-gray-300 hover:text-white py-2 px-10 rounded-lg text-xl">
                Learn More
              </button>
            </a>
          </div>
        </div>

        <div className="border shadow-2xl rounded-2xl overflow-hidden sm:w-96 flex flex-col bg-white">
          <img src="/assets/img/internship/Internship-Traning-3.jpg" />

          <div className="flex flex-col items-start justify-center px-4">
            <span className="font-bold text-xl py-4">Backend Development</span>
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

          <div className="flex justify-center pb-4">
            <a href="/backendDevlopment">
              <button className="bg-indigo-600 hover:bg-indigo-800 transition-all duration-300 text-gray-300 hover:text-white py-2 px-10 rounded-lg text-xl">
                Learn More
              </button>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default InternshipAndTraining;
