import { Outlet, createBrowserRouter } from "react-router-dom";
import FrontEndDev from "./NavPages/FrontEndDev";
import GetInTouch from "./NavPages/GetInTouch";
import DataBase from "./NavPages/DataBase";
import MobileAppDev from "./NavPages/MobileAppDev";
import BusinessCentric from "./Components/BusinessCentric";
import Contact from "./Components/Contact";

function App() {
  return (
    <div>
      <Outlet />
      

    </div>
  );
}

export default App;
