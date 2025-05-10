import React, { useState } from "react";

import FaqAccordion from "./FaqAccordion";

const Faq = () => {
  return (
    <div>
      <div className=" h-44  bg-red-400 flex relative ">
        <img src="/parallax-5.jpg" className=" w-full object-cover" />
        <div className="absolute text-white text-2xl font-semibold flex flex-col h-full justify-center text-center items-center w-full">
          <p>India's Leading Consultancy In Delhi</p>
          <p>FAQ</p>
        </div>
      </div>

      

      <div className="gap-4 flex sm:flex-row flex-col  sm:px-10">
        <div className=" py-4  sm:w-1/2">
          <FaqAccordion
            title={"DIFFERENCE BETWEEN CONSULTANCY AND STAFFING?"}
            anss={
              " Consulting involves working with the client organization - across its hierarchy, across its function; to solve a particular problem or towards a said objective. Often times, the consultants help organisations define these objectives & goals. Staffing involves deploying resources towards already set objectives / goals at the client location. The role of the people who are deployed in an organisation is to deliver the KPIs of the particular role alone."
            }
          />

          <FaqAccordion
            title={"HOW DO I FIND WHETHER CONSULTANCY IS FAKE OR NOT?"}
            anss={
              "Its very true there are lot of fake consultancies these days. Be very careful before approaching any consultancy in terms of money mainly. First check the consultancy online through facebook , website or google. Later on just take a note of address of any consultancy and visit that consultancy or if you living far ask your friends to visit that address of consultancy. WSNE Consulting gives you a better opportunity to make your career with us, we are connected with PAN India reputed companies and International MNC. We provide best services to our clients and candidates."
            }
          />

          <FaqAccordion
            title={
              "HOW DO I KNOW THAT WSNE Consulting Pvt. Ltd. IS THE RIGHT CONSULTING AGENCY FOR ME?"
            }
            anss={
              "Knowing how to choose a recruitment agency is important for employers and job seekers alike. Companies that prefer to outsource the employment search and screening process must consider the reputation, policies, practices and costs of employment agencies. These same factors are important for job seekers, who must select employment agencies that will understand their unique skills and actively promote their services. A great recruitment agency will help match the most qualified job seeker with the job opening best suited for their skills. By clarifying your needs and learning the key traits of the agency, you can find the right recruitment agency for you."
            }
          />
        </div>

        <div className=" sm:w-1/2 flex flex-col items-start  justify-center gap-8 px-2 py-8">
          <p className="font-bold flex w-full justify-center  text-xl">
            Ask us question
          </p>

          <input
            type="text"
            placeholder="Your Name"
            className="outline-none p-3 rounded-sm w-full border-b border-gray-300"
          />
          <div className="flex flex-row  w-full justify-center gap-6">
            <input
              type="text"
              placeholder="Email Adderss"
              className="outline-none p-3 rounded-sm w-1/2 border-b border-gray-300"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="outline-none p-3 rounded-sm w-1/2 border-b border-gray-300 "
            />
          </div>
          <textarea
            name=""
            id=""
            placeholder="Your Message"
            cols="30"
            className="outline-none w-full h-36 border-b border-gray-300 p-3"
            rows="10"
          ></textarea>
          <div className=" flex w-full justify-end">
            <button className="bg-indigo-500 py-3 px-12 rounded-lg hover:bg-purple-500 duration-300 text-white text-2xl font-semibold">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
