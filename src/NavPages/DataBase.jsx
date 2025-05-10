import React, { useEffect } from "react";
import GetInTouch from "./GetInTouch";
import Footer from "../Components/Footer";
import Nabbar from "../Components/Nabbar";

const DataBase = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  return (
    <div>
      <Nabbar />

      <div className=" h-56 flex relative ">
        <img
          src=" /DataBase-Pics/dowgeggnload.webp"
          className=" w-full object-cover"
          alt=""
        />

        <div className="absolute text-white text-2xl font-semibold flex flex-col h-full justify-center text-center items-center w-full">
          <span className=" font-bold text-2xl text-white ">
            Database Management Services
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
              src="/DataBase-Pics/oracle-logo.jpg.webp"
              className=""
              alt=""
            />
          </div>

          <span className="py-4">
            Oracle Database The system is built around a relational database
            framework in which data objects may be directly accessed by.
          </span>
          <div className="flex justify-center">
            <button className="rounded-3xl hover:bg-yellow-400 duration-500 border-gray-800 hover:text-white du border flex justify-center items-center py-2.5 w-3/5 ">
              EXPLORE MORE
            </button>
          </div>
        </div>

        <div className="border   px-8  py-10 flex flex-col text-center  sm:w-1/3 ">
          <div className="flex justify-center pb-1">
            <img src="/DataBase-Pics/mongo-bg-logo.jpg.webp" alt="" />
          </div>

          <span className="py-4">
            MongoDB Development MongoDB is a free and open-source, no-SQL
            database program exercising JSON-like files with schemas. MongoDB or
            NoSQL
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
              src="/DataBase-Pics/azure-sql-logo.jpg.webp"
              alt=""
            />
          </div>

          <span className="py-4">
            Microsoft Azure SQL Database Azure SQL Database is the intelligent,
            scalable, cloud database service that provides the broadest SQL
          </span>
          <div className="flex justify-center">
            <button className="rounded-3xl hover:bg-yellow-400 duration-500 border-gray-800 hover:text-white du border flex justify-center items-center py-2.5 w-3/5 ">
              EXPLORE MORE
            </button>
          </div>
        </div>

        <div className="border  px-8  py-10 flex flex-col text-center sm:w-1/3 ">
          <div className="flex justify-center pb-1">
            <img src="/DataBase-Pics/my-sql-logo.jpg.webp" alt="" />
          </div>

          <span className="py-4">
            MySQL Development MySQL is one of the most widely-used relational
            database management systems. MySQL is an open-source, fast reliable,
            and flexible relational.
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
              src="/DataBase-Pics/sql-server-logo.jpg.webp"
              alt=""
            />
          </div>

          <span className="py-4">
            Microsoft SQL Database Microsoft SQL is a relational database
            management system originally developed by Microsoft. MSSQL being a
            popular
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

export default DataBase;
