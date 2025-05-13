import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import About from "./Components/About.jsx";
import Home from "./Components/Home.jsx";
import Blog from "./Components/Blog.jsx";
import ContactUs from "./Components/ContactUs.jsx";
import FrontEndDev from "./NavPages/FrontEndDev.jsx";
import DataBase from "./NavPages/DataBase.jsx";
import MobileAppDev from "./NavPages/MobileAppDev.jsx";
import SoftwareDevelopment from "./Components/SoftwareDevelopment.jsx";
import Consultancy from "./Components/Consultancy.jsx";
import InternshipAndTraining from "./NavPages/InternshipAndTraining.jsx";
import Privacy from "./Components/Privacy.jsx";
import BackendDevlopment from "./NavPages/BackendDevlopment.jsx";
import Qa from "./NavPages/Qa.jsx";
import OurProduct from "./Components/OurProduct.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/contactus",
    element: <ContactUs />,
  },
  {
    path: "/frontenddev",
    element: <FrontEndDev />,
  },
  {
    path: "/database",
    element: <DataBase />,
  },
  {
    path: "/mobileappdev",
    element: <MobileAppDev />,
  },
  {
    path: "/softwaredevelopment",
    element: <SoftwareDevelopment />,
  },
  {
    path: "/consultancy",
    element: <Consultancy />,
  },

  {
    path: "/backendDevlopment",
    element: <BackendDevlopment />,
  },

  {
    path: "/qa",
    element: <Qa />,
  },

  {
    path: "/privacy",
    element: <Privacy />,
  },
  {
    path: "/InternshipAndTraining",
    element: <InternshipAndTraining />,
  },
  {
    path: "/OurProduct",
    element: <OurProduct />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
