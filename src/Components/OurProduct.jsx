import { useEffect, useState } from "react";
import WhyTechsavyPool from "./WhyTechsavyPool";
import Nabbar from "./Nabbar";
import Footer from "./Footer";


function OurProduct() {
  const [objects, setObjects] = useState([]);

  const tab = [
    <div className="pt-14 px-2 flex items-center justify-center flex-row flex-wrap gap-2">
      <div className="h-28 w-96 rounded-lg border bg-gray-100">
        <div className="flex flex-row">
          <div className="h-28 w-24 flex justify-center items-center p-3">
            <img src="/assets/img/OurProducts/Business/book.png"/>
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">Edutask</p>
            <p>Online Course Selling Marketplace</p>
          </div>
        </div>
      </div>

      <div className="h-28 w-96 rounded-lg border bg-gray-100">
        <div className="flex flex-row">
          <div className="h-28 w-24 flex justify-center items-center p-3">
            <img src="/assets/img/OurProducts/Business/bus.png"/>
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">Bus365</p>
            <p>Bus Reservation System</p>
          </div>
        </div>
      </div>

      <div className="h-28 w-96 rounded-lg border bg-gray-100">
        <div className="flex flex-row">
          <div className="h-28 w-24 flex justify-center items-center p-3">
            <img src="/assets/img/OurProducts/Business/chat.png"/>
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">Tradebox</p>
            <p>Tradebox CryptoCurrency Buy Sell and Trading Software</p>
          </div>
        </div>
      </div>

      <div className="h-28 w-96 rounded-lg border bg-gray-100">
        <div className="flex flex-row">
          <div className="h-28 w-24 flex justify-center items-center p-3">
            <img src="/assets/img/OurProducts/Business/erp.png"/>
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">ERP</p>
            <p>Business ERP Solution / Product / Shop / Company Management</p>
          </div>
        </div>
      </div>

      <div className="h-28 w-96 rounded-lg border bg-gray-100">
        <div className="flex flex-row">
          <div className="h-28 w-24 flex justify-center items-center p-3">
            <img src="/assets/img/OurProducts/Business/flight.png"/>
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">Flight Booking</p>
            <p>Flight Booking Software</p>
          </div>
        </div>
      </div>

      <div className="h-28 w-96 rounded-lg border bg-gray-100">
        <div className="flex flex-row">
          <div className="h-28 w-24 flex justify-center items-center p-3">
            <img src="/assets/img/OurProducts/Business/garage.png"/>
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">GMS</p>
            <p>Garage Management Software</p>
          </div>
        </div>
      </div>

      <div className="h-28 w-96 rounded-lg border bg-gray-100">
        <div className="flex flex-row">
          <div className="h-28 w-24 flex justify-center items-center p-3">
            <img src="/assets/img/OurProducts/Business/hr4.png"/>
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">HR Manager</p>
            <p>Human Resource Management System HR Software (HRMS)</p>
          </div>
        </div>
      </div>

      <div className="h-28 w-96 rounded-lg border bg-gray-100">
        <div className="flex flex-row">
          <div className="h-28 w-24 flex justify-center items-center p-3">
            <img src="/assets/img/OurProducts/Business/inventory.png"/>
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">Wholesale</p>
            <p>Inventory Control and Inventory Management System</p>
          </div>
        </div>
      </div>

      <div className="h-28 w-96 rounded-lg border bg-gray-100">
        <div className="flex flex-row">
          <div className="h-28 w-24 flex justify-center items-center p-3">
            <img src="/assets/img/OurProducts/Business/vms.png"/>
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">VSG</p>
            <p>Vehicle Management System</p>
          </div>
        </div>
      </div>
    </div>,

    <div className="pt-14 px-2 flex items-center justify-center flex-row flex-wrap gap-2">
      <div className="h-28 w-96 rounded-lg border bg-gray-100">
        <div className="flex flex-row">
          <div className="h-28 w-24 flex justify-center items-center p-3">
            <img src="/assets/img/OurProducts/BlockChain/crypto.png"/>
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">Nishue</p>
            <p>CryptoCurrency Buy Sell Exchange and Lending with MLM System</p>
          </div>
        </div>
      </div>

      <div className="h-28 w-96 rounded-lg border bg-gray-100">
        <div className="flex flex-row">
          <div className="h-28 w-24 flex justify-center items-center p-3">
            <img src="/assets/img/OurProducts/BlockChain/cryptoW.png"/>
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">ICO Wallet</p>
            <p>ICO Script | Complete ICO Software and Token Launching Solution</p>
          </div>
        </div>
      </div>

      <div className="h-28 w-96 rounded-lg border bg-gray-100">
        <div className="flex flex-row">
          <div className="h-28 w-24 flex justify-center items-center p-3">
            <img src="/assets/img/OurProducts/BlockChain/exchange.png"/>
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">Tradebox</p>
            <p>Tradebox CryptoCurrency Buy Sell and Trading Software</p>
          </div>
        </div>
      </div>

      <div className="h-28 w-96 rounded-lg border bg-gray-100">
        <div className="flex flex-row">
          <div className="h-28 w-24 flex justify-center items-center p-3">
            <img src="/assets/img/OurProducts/BlockChain/token.png"/>
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">Tokenbox</p>
            <p>Best Security Token Offering Platform (STO)</p>
          </div>
        </div>
      </div>
    </div>,

    <div className="pt-14 px-2 flex items-center justify-center flex-row flex-wrap gap-2">
      <div className="h-28 w-96 rounded-lg border bg-gray-100">
        <div className="flex flex-row">
          <div className="h-28 w-24 flex justify-center items-center p-3">
            <img src="/assets/img/OurProducts/Hospitality/flight.png"/>
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">Flight Booking</p>
            <p>Flight Booking Software</p>
          </div>
        </div>
      </div>
      <div className="h-28 w-96 rounded-lg border bg-gray-100">
        <div className="flex flex-row">
          <div className="h-28 w-24 flex justify-center items-center p-3">
            <img src="/assets/img/OurProducts/Hospitality/manager.png"/>
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">Bhojan</p>
            <p>Restaurant Management Software with Restaurant Website</p>
          </div>
        </div>
      </div>
      <div className="h-28 w-96 rounded-lg border bg-gray-100">
        <div className="flex flex-row">
          <div className="h-28 w-24 flex justify-center items-center p-3">
            <img src="/assets/img/OurProducts/Hospitality/managerH.png"/>
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">Xain</p>
            <p>Hotel Management System & Booking Software</p>
          </div>
        </div>
      </div>
    </div>,

    <div className="px-2 pt-14 flex items-center justify-center flex-row flex-wrap gap-2">
      <div className="h-28 w-96 rounded-lg border bg-gray-100">
        <div className="flex flex-row">
          <div className="h-28 w-24 flex justify-center items-center p-3">
            <img src="/assets/img/OurProducts/E-Commerce/cashier.png"/>
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">Isshue</p>
            <p>Multi Store eCommerce Shopping Cart Solution</p>
          </div>
        </div>
      </div>
      <div className="h-28 w-96 rounded-lg border bg-gray-100">
        <div className="flex flex-row">
          <div className="h-28 w-24 flex justify-center items-center p-3">
            <img src="/assets/img/OurProducts/E-Commerce/shopping-cart.png"/>
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">Storefex</p>
            <p>Multi Vendor Marketplace Platform</p>
          </div>
        </div>
      </div>
    </div>,

    <div className="pt-14 flex px-2 items-center justify-center flex-row flex-wrap gap-2">
      <div className="h-28 w-96 rounded-lg border bg-gray-100">
        <div className="flex flex-row">
          <div className="h-28 w-24 flex justify-center items-center p-3">
            <img src="/assets/img/OurProducts/Healthcare/clinic.png"/>
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">Hospital Automanager</p>
            <p>Advance Hospital Management System Software</p>
          </div>
        </div>
      </div>
      <div className="h-28 w-96 rounded-lg border bg-gray-100">
        <div className="flex flex-row">
          <div className="h-28 w-24 flex justify-center items-center p-3">
            <img src="/assets/img/OurProducts/Healthcare/doctor.png"/>
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">Hospital</p>
            <p>Hospital Management System with Website</p>
          </div>
        </div>
      </div>
      <div className="h-28 w-96 rounded-lg border bg-gray-100">
        <div className="flex flex-row">
          <div className="h-28 w-24 flex justify-center items-center p-3">
            <img src="/assets/img/OurProducts/Healthcare/domain-registration.png"/>
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">Pharma Care</p>
            <p>Pharmacy Software Made Easy</p>
          </div>
        </div>
      </div>
      <div className="h-28 w-96 rounded-lg border bg-gray-100">
        <div className="flex flex-row">
          <div className="h-28 w-24 flex justify-center items-center p-3">
            <img src="/assets/img/OurProducts/Healthcare/healthcare1.png"/>
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">Multi-Hospital</p>
            <p>Best Hospital Management System (SaaS App)</p>
          </div>
        </div>
      </div>
      <div className="h-28 w-96 rounded-lg border bg-gray-100">
        <div className="flex flex-row">
          <div className="h-28 w-24 flex justify-center items-center p-3">
            <img src="/assets/img/OurProducts/Healthcare/management-service.png"/>
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">Clinic365</p>
            <p>Clinic Management System</p>
          </div>
        </div>
      </div>
      <div className="h-28 w-96 rounded-lg border bg-gray-100">
        <div className="flex flex-row">
          <div className="h-28 w-24 flex justify-center items-center p-3">
            <img src="/assets/img/OurProducts/Healthcare/payment.png"/>
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">Doctors</p>
            <p>Doctor Appointment and Prescription System with Website</p>
          </div>
        </div>
      </div>
      <div className="h-28 w-96 rounded-lg border bg-gray-100">
        <div className="flex flex-row">
          <div className="h-28 w-24 flex justify-center items-center p-3">
            <img src="/assets/img/OurProducts/Healthcare/pharmacy.png"/>
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">G-Priscription</p>
            <p>Gynaecology & OBS Consultation Software</p>
          </div>
        </div>
      </div>
    </div>
  ];

  useEffect(() => {
    setObjects(tab[0]);
  }, []);

  return (
    <>
      <Nabbar />
      <div className=" h-80  flex relative  ">
        <img src="/assets/img/OurProducts/product.png" className=" w-full object-cover" />
      </div>
      <div className="my-10">
        <div className="flex justify-center items-center flex-wrap font-semibold gap-4 text-black">
          {["Business", "Blockchain", "Hospitality", "E-Commerce", "Healthcare"].map((label, index) => (
            <button
              key={label}
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
              onClick={() => setObjects(tab[index])}
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-transparent">
                {label}
              </span>
            </button>
          ))}
        </div>


        <div> {objects}</div>

        <div></div>
      </div>
      <WhyTechsavyPool />
      <Footer />
    </>
  );
}

export default OurProduct;
