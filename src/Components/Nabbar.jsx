import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Nabbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);
  const [isAtTop, setIsAtTop] = useState(true);
  const closeTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (key) => {
    clearTimeout(closeTimeout.current);
    setHoveredDropdown(key);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setHoveredDropdown(null);
    }, 100);
  };

  const navItems = [
    { name: "HOME", path: "/" },
    {
      name: "SERVICES",
      key: "services",
      submenu: [
        { label: "Software Development", path: "/softwaredevelopment" },
        { label: "Consultancy", path: "/consultancy" },
      ],
    },
    {
      name: "TECHNOLOGIES",
      key: "tech",
      submenu: [
        { label: "Internship & Training", path: "/InternshipAndTraining" },
        { label: "Front End Development", path: "/frontenddev" },
        { label: "Backend Development", path: "/backendDevlopment" },
        { label: "Database Management", path: "/database" },
        { label: "Mobile App Development", path: "/mobileappdev" },
        { label: "QA", path: "/qa" },
      ],
    },
    {
      name: "PRODUCTS", path: "/OurProduct"
    },
    { name: "ABOUT", path: "/about" },
    { name: "BLOG", path: "/blog" },
    { name: "CONTACT US", path: "/contactus" },
  ];

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setHoveredDropdown(null);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition duration-300 ${isAtTop ? "bg-transparent" : "bg-sky-600 shadow-2xl"}`}>
      <div className="flex items-center justify-between px-4 sm:px-12 py-3">
        <Link to="/">
          <div className="flex items-center gap-2">
            <img src="/assets/img/Main-Logo.png" alt="Logo" className="h-12 sm:h-16" />
            <h3 className="text-white text-xl sm:text-3xl font-bold">
              Techsavypool
            </h3>
          </div>
        </Link>

        <div className="sm:hidden">
          <button onClick={() => setMenuOpen(true)}>
            <GiHamburgerMenu size={30} color="#fff" />
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex items-center space-x-8 text-sm font-medium">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative inline-flex flex-col"
              onMouseEnter={() => handleMouseEnter(item.key)}
              onMouseLeave={handleMouseLeave}
            >
              {item.submenu ? (
                <>
                  <button className="text-gray-300 hover:text-white hover:bg-gray-700 px-4 py-2 rounded transition">
                    {item.name}
                  </button>
                  {hoveredDropdown === item.key && (
                    <div className="absolute left-0 top-full mt-2 w-56 bg-gray-100/80 backdrop-blur-md shadow-lg rounded-md py-2 z-40 border border-gray-300 pointer-events-auto">
                      {item.submenu.map((sub, i) => (
                        <Link
                          key={i}
                          to={sub.path || "#"}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-700 hover:text-white transition"
                          onClick={() => setHoveredDropdown(null)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.path}
                  className="text-gray-300 hover:text-white hover:bg-gray-700 px-4 py-2 rounded transition"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="sm:hidden fixed inset-0 bg-slate-900 text-white z-40">
          <div className="flex justify-end p-4">
            <button onClick={closeMobileMenu}>
              <ImCross size={24} />
            </button>
          </div>

          <div className="flex flex-col gap-4 px-6 text-lg font-semibold">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => setHoveredDropdown(item.key)}
                      className="w-full text-left"
                    >
                      {item.name}
                    </button>
                    {hoveredDropdown === item.key && (
                      <div className="ml-4 mt-1 flex flex-col text-sm text-gray-300">
                        {item.submenu.map((sub, i) => (
                          <Link
                            key={i}
                            to={sub.path || "#"}
                            className="py-1"
                            onClick={closeMobileMenu}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link to={item.path} onClick={closeMobileMenu}>
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Nabbar;
