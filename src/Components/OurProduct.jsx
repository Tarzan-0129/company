import React, { useEffect, useState } from "react";

function OurProduct() {
  const [objects, setObjects] = useState([]);

  const tab = [
    <div className="pt-14 px-2 flex items-center justify-center flex-row flex-wrap gap-2">
      <div class="h-28 w-96 rounded-lg border  bg-gradient-to-r from-teal-400 to-indigo-600">
        <div className="flex flex-row">
          <div className="h-28 w-24  flex justify-center items-center  p-3">
            <img src="/OurProducts/Business/book.png" alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">Edutask</p>
            <p>Online Course Selling Marketplace</p>
          </div>
        </div>
      </div>

      <div class="h-28 w-96 rounded-lg border bg-gradient-to-r from-gray-200 to-blue-300">
        <div className="flex flex-row">
          <div className="h-28 w-24  flex justify-center items-center  p-3">
            <img src="/OurProducts/Business/bus.png" alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">Bus365</p>
            <p>Bus Reservation System</p>
          </div>
        </div>
      </div>

      <div class="h-28 w-96 rounded-lg border  bg-gradient-to-r from-teal-400 to-indigo-600">
        <div className="flex flex-row">
          <div className="h-28 w-24  flex justify-center items-center  p-3">
            <img src="/OurProducts/Business/chat.png" alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">Tradebox</p>
            <p>Tradebox CryptoCurrency Buy Sell and Trading Software</p>
          </div>
        </div>
      </div>

      <div class="h-28 w-96 rounded-lg border bg-gradient-to-r from-gray-200 to-blue-300">
        <div className="flex flex-row">
          <div className="h-28 w-24  flex justify-center items-center  p-3">
            <img src="/OurProducts/Business/erp.png" alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold"> ERP</p>
            <p> Business ERP Solution / Product / Shop / Company Management</p>
          </div>
        </div>
      </div>
      <div class="h-28 w-96 rounded-lg border  bg-gradient-to-r from-teal-400 to-indigo-600">
        <div className="flex flex-row">
          <div className="h-28 w-24  flex justify-center items-center  p-3">
            <img src="/OurProducts/Business/flight.png" alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">Flight Booking</p>
            <p>Flight Booking Software</p>
          </div>
        </div>
      </div>
      <div class="h-28 w-96 rounded-lg border bg-gradient-to-r from-gray-200 to-blue-300">
        <div className="flex flex-row">
          <div className="h-28 w-24  flex justify-center items-center  p-3">
            <img src="/OurProducts/Business/garage.png" alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold"> GMS</p>
            <p>Garage Management Software </p>
          </div>
        </div>
      </div>
      <div class="h-28 w-96 rounded-lg border  bg-gradient-to-r from-teal-400 to-indigo-600">
        <div className="flex flex-row">
          <div className="h-28 w-24  flex justify-center items-center  p-3">
            <img src="/OurProducts/Business/hr4.png" alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">HR Manager</p>
            <p>Human Resource Management System HR Software (HRMS)</p>
          </div>
        </div>
      </div>
      <div class="h-28 w-96 rounded-lg border bg-gradient-to-r from-gray-200 to-blue-300">
        <div className="flex flex-row">
          <div className="h-28 w-24  flex justify-center items-center  p-3">
            <img src="/OurProducts/Business/inventory.png" alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold"> Wholesale</p>
            <p> Inventory Control and Inventory Management System</p>
          </div>
        </div>
      </div>

      <div class="h-28 w-96 rounded-lg border  bg-gradient-to-r from-teal-400 to-indigo-600">
        <div className="flex flex-row">
          <div className="h-28 w-24  flex justify-center items-center  p-3">
            <img src="/OurProducts/Business/vms.png" alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold"> VSG </p>
            <p> Vehicle Management System</p>
          </div>
        </div>
      </div>
    </div>,

    <div className="pt-14 px-2 flex items-center justify-center flex-row flex-wrap gap-2">
      <div class="h-28 w-96 rounded-lg border bg-gradient-to-r from-gray-200 to-blue-300">
        <div className="flex flex-row">
          <div className="h-28 w-24  flex justify-center items-center  p-3">
            <img src="/OurProducts/BlockChain/crypto.png" alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">Nishue</p>
            <p>CryptoCurrency Buy Sell Exchange and Lending with MLM System</p>
          </div>
        </div>
      </div>

      <div class="h-28 w-96 rounded-lg border bg-gradient-to-r from-gray-200 to-blue-300">
        <div className="flex flex-row">
          <div className="h-28 w-24  flex justify-center items-center  p-3">
            <img src="/OurProducts/BlockChain/cryptoW.png" alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">ICO Wallet</p>
            <p>
              ICO Script | Complete ICO Software and Token Launching Solution
            </p>
          </div>
        </div>
      </div>
      <div class="h-28 w-96 rounded-lg border bg-gradient-to-r from-gray-200 to-blue-300">
        <div className="flex flex-row">
          <div className="h-28 w-24  flex justify-center items-center  p-3">
            <img src="/OurProducts/BlockChain/exchange.png" alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold"></p>
            <p>Tradebox CryptoCurrency Buy Sell and Trading Software</p>
          </div>
        </div>
      </div>
      <div class="h-28 w-96 rounded-lg border bg-gradient-to-r from-gray-200 to-blue-300">
        <div className="flex flex-row">
          <div className="h-28 w-24  flex justify-center items-center  p-3">
            <img src="/OurProducts/BlockChain/token.png" alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">Tokenbox</p>
            <p>Best Security Token Offering Platform (STO)</p>
          </div>
        </div>
      </div>
    </div>,

    <div className="pt-14 px-2 flex items-center justify-center flex-row flex-wrap gap-2">
      <div class="h-28 w-96 rounded-lg border bg-gradient-to-r from-gray-200 to-blue-300">
        <div className="flex flex-row">
          <div className="h-28 w-24  flex justify-center items-center  p-3">
            <img src="/OurProducts/Hospitality/flight.png" alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">Flight Booking</p>
            <p>Flight Booking Software</p>
          </div>
        </div>
      </div>
      <div class="h-28 w-96 rounded-lg border bg-gradient-to-r from-gray-200 to-blue-300">
        <div className="flex flex-row">
          <div className="h-28 w-24  flex justify-center items-center  p-3">
            <img src="/OurProducts/Hospitality/manager.png" alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">Bhojan</p>
            <p>Restaurant Management Software with Restaurant Website</p>
          </div>
        </div>
      </div>
      <div class="h-28 w-96 rounded-lg border bg-gradient-to-r from-gray-200 to-blue-300">
        <div className="flex flex-row">
          <div className="h-28 w-24  flex justify-center items-center  p-3">
            <img src="/OurProducts/Hospitality/managerH.png" alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">Xain</p>
            <p>Hotel Management System & Booking Software</p>
          </div>
        </div>
      </div>
    </div>,

    <div className="px-2 pt-14 flex items-center justify-center flex-row flex-wrap gap-2">
      <div class="h-28 w-96 rounded-lg border bg-gradient-to-r from-gray-200 to-blue-300">
        <div className="flex flex-row">
          <div className="h-28 w-24  flex justify-center items-center  p-3">
            <img src="/OurProducts/E-Commerce/cashier.png" alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">Isshue</p>
            <p>Multi Store eCommerce Shopping Cart Solution</p>
          </div>
        </div>
      </div>
      <div class="h-28 w-96 rounded-lg border bg-gradient-to-r from-gray-200 to-blue-300">
        <div className="flex flex-row">
          <div className="h-28 w-24  flex justify-center items-center  p-3">
            <img
              src="/OurProducts/E-Commerce/shopping-cart.png"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">Storefex</p>
            <p>Multi Vendor Marketplace Platform</p>
          </div>
        </div>
      </div>
    </div>,

    <div className="pt-14 flex px-2 items-center justify-center flex-row flex-wrap gap-2">
      <div class="h-28 w-96 rounded-lg border bg-gradient-to-r from-gray-200 to-blue-300">
        <div className="flex flex-row">
          <div className="h-28 w-24  flex justify-center items-center  p-3">
            <img src="/OurProducts/Healthcare/clinic.png" alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">Hospital Automanager</p>
            <p>Advance Hospital Management System Software</p>
          </div>
        </div>
      </div>
      <div class="h-28 w-96 rounded-lg border bg-gradient-to-r from-gray-200 to-blue-300">
        <div className="flex flex-row">
          <div className="h-28 w-24  flex justify-center items-center  p-3">
            <img src="/OurProducts/Healthcare/doctor.png" alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">Hospital</p>
            <p>Hospital Management System with Website</p>
          </div>
        </div>
      </div>
      <div class="h-28 w-96 rounded-lg border bg-gradient-to-r from-gray-200 to-blue-300">
        <div className="flex flex-row">
          <div className="h-28 w-24  flex justify-center items-center  p-3">
            <img
              src="/OurProducts/Healthcare/domain-registration.png"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">Pharma Care</p>
            <p>Pharmacy Software Made Easy</p>
          </div>
        </div>
      </div>
      <div class="h-28 w-96 rounded-lg border bg-gradient-to-r from-gray-200 to-blue-300">
        <div className="flex flex-row">
          <div className="h-28 w-24  flex justify-center items-center  p-3">
            <img
              src="/OurProducts/Healthcare/healthcare1.png"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">Multi-Hospital</p>
            <p>Best Hospital Management System (SaaS App)</p>
          </div>
        </div>
      </div>
      <div class="h-28 w-96 rounded-lg border bg-gradient-to-r from-gray-200 to-blue-300">
        <div className="flex flex-row">
          <div className="h-28 w-24  flex justify-center items-center  p-3">
            <img
              src="/OurProducts/Healthcare/management-service.png"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">Clinic365</p>
            <p>Clinic Management System</p>
          </div>
        </div>
      </div>
      <div class="h-28 w-96 rounded-lg border bg-gradient-to-r from-gray-200 to-blue-300">
        <div className="flex flex-row">
          <div className="h-28 w-24  flex justify-center items-center  p-3">
            <img src="/OurProducts/Healthcare/payment.png" alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">Doctors</p>
            <p>Doctor Appointment and Prescription System with Website</p>
          </div>
        </div>
      </div>
      <div class="h-28 w-96 rounded-lg border bg-gradient-to-r from-gray-200 to-blue-300">
        <div className="flex flex-row">
          <div className="h-28 w-24  flex justify-center items-center  p-3">
            <img src="/OurProducts/Healthcare/pharmacy.png" alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">G-Priscription</p>
            <p>Gynaecology & OBS Consultation Software</p>
          </div>
        </div>
      </div>
    </div>,
  ];

  useEffect(() => {
    setObjects(tab[0]);
  }, []);

  return (
    <>
      <div className="my-10">
        <div className="flex text-center flex-col px-4 py-8">
          <p className=" pb-4 text-4xl font-extrabold  ">Our Product</p>
          <p className="text-xl font-light">
            We provide a time-worthy business solution to every type of
            business. Find out your one and level up your success stairs.
          </p>
        </div>

        <div className="flex justify-center items-center flex-wrap text-white font-semibold gap-4 ">
          <button
            class="bg-indigo-900 hover:bg-indigo-600 px-8 py-1.5 rounded-xl"
            onClick={() => setObjects(tab[0])}
          >
            Business
          </button>

          <button
            class="bg-indigo-900 hover:bg-indigo-600 px-8 py-1.5 rounded-xl"
            onClick={() => setObjects(tab[1])}
          >
            Block Chain
          </button>

          <button
            class="bg-indigo-900 hover:bg-indigo-600 px-8 py-1.5 rounded-xl"
            onClick={() => setObjects(tab[2])}
          >
            Hospitality
          </button>

          <button
            class="bg-indigo-900 hover:bg-indigo-600 px-8 py-1.5 rounded-xl"
            onClick={() => setObjects(tab[3])}
          >
            E-Commerce
          </button>

          <button
            class="bg-indigo-900 hover:bg-indigo-600 px-8 py-1.5 rounded-xl "
            onClick={() => setObjects(tab[4])}
          >
            Healthcare
          </button>
        </div>

        <div> {objects}</div>

        <div></div>
      </div>
    </>
  );
}

export default OurProduct;
