import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="bg-gray-900 py-8 ">
        <div className="sm:flex justify-evenly px-3">
          <div>
            <div className="py-4">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-81.103637!3d33.817779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8b7f7f7f7f7f7%3A0xf577d7f7f7f7f7f7!2s113%20MCINNIS%20CT%2C%20GASTON%2C%20SC%2C%2029053!5e0!3m2!1sen!2sus!4v1234567890123"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="text-white flex flex-col gap-8">
              <div className="flex items-center gap-2">
                113 Mcinnis Ct, Gaston, SC, United States 29053
                <br />
                +13462960860
                <br />
                admin@techsavypool.com
              </div>
            </div>
          </div>

          <div className="text-white flex flex-col py-3  gap-2">
            <h3 className="text-2xl ">Useful Links</h3>
            <h4 className="text-gray-400 hover:text-gray-100 transition duration-300">
              <Link to={"/"}>Home</Link>
            </h4>

            <h4 className="text-gray-400 hover:text-gray-100 transition duration-300">
              <Link to={"/about"}> About us </Link>
            </h4>
            <h4 className="text-gray-400 hover:text-gray-100 transition duration-300">
              <Link to={"/blog"}> Blog </Link>
            </h4>
            <h4 className="text-gray-400 hover:text-gray-100 transition duration-300">
              <Link to={"/privacy"}>Privacy policy</Link>
            </h4>
          </div>
          <div className="text-white flex flex-col gap-2 py-3">
            <h3 className="text-2xl ">Our Services</h3>
            <h4 className="text-gray-400 hover:text-gray-100 transition duration-300">
              <Link to={"/softwaredevelopment"}> Software Development </Link>
            </h4>
            <h4 className="text-gray-400 hover:text-gray-100 transition duration-300">
              <Link to={"/consultancy"}> Consultancy </Link>
            </h4>
          </div>
          <div className="text-white flex flex-col gap-2 py-3">
            <h3 className="text-2xl">Technologies</h3>
            <h4 className="text-gray-400 hover:text-gray-100 transition duration-300">
              <Link to={"/InternshipAndTraining"}> Internship & Training </Link>
            </h4>
            <h4 className="text-gray-400 hover:text-gray-100 transition duration-300">
              <Link to={"/frontenddev"}> Frontend Development </Link>
            </h4>
            <h4 className="text-gray-400 hover:text-gray-100 transition duration-300">
              <Link to={"/backendDevlopment"}> Backend Development </Link>
            </h4>
            <h4 className="text-gray-400 hover:text-gray-100 transition duration-300">
              <Link to={"/database"}> Database Management </Link>
            </h4>
            <h4 className="text-gray-400 hover:text-gray-100 transition duration-300">
              <Link to={"/mobileappdev"}> Mobile App Development </Link>
            </h4>
            <h4 className="text-gray-400 hover:text-gray-100 transition duration-300">
              <Link to={"/qa"}> QA Consultancy </Link>
            </h4>
          </div>
        </div>
        <div className="flex justify-evenly py-20">
          <div className="h-0 w-10/12 border"></div>
        </div>
        <div className="flex justify-center text-center">
          <p className="text-gray-400 font font-thin">
            © Copyright {new Date().getFullYear()} All Rights Reserved by Techsavypool
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
