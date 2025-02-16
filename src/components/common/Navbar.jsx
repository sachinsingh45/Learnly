import React, { useEffect, useState } from "react";
import logo from "../../assets/Logo/Logo-Full-Light.png";
import { Link, matchPath } from "react-router-dom";
import { NavbarLinks } from "../../data/navbar-links";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ProfileDropDown from "../core/Auth/ProfileDropDown";
import { apiConnector } from "../../services/apiconnector";
import { categories } from "../../services/apis";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import {
  FaHome,
  FaBook,
  FaUser,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa"; // Import icons

const subLinks = [
  {
    title: "python",
    link: "/catalog/python",
  },
  {
    title: "web dev",
    link: "/catalog/web-development",
  },
];

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
  const location = useLocation();

  const [ssubLinks, setSsubLinks] = useState([]);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);

  const fetchSublinks = async () => {
    try {
      const result = await apiConnector("GET", categories.CATEGORIES_API);
      console.log("Printing Sublinks result:", result);
      setSsubLinks(result.data.data);
    } catch (error) {
      console.log("Could not fetch the category list");
    }
  };

  useEffect(() => {
    fetchSublinks();
  }, []);

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  const toggleCatalogDropdown = () => {
    setIsCatalogOpen(!isCatalogOpen);
  };

  const closeCatalogDropdown = () => {
    setIsCatalogOpen(false);
  };

  useEffect(() => {
    if (isCatalogOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isCatalogOpen]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700  bg-richblack-900/90">
      <div className="overflow-x-hidden flex w-11/12 items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={logo} width={160} height={42} loading="lazy" alt="Logo" />
        </Link>

        {/* Nav Links */}
        <nav>
          <ul className="flex gap-x-6 text-richblack-25">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? (
                  <div className="relative flex items-center gap-2">
                    <button
                      onClick={toggleCatalogDropdown}
                      className="flex items-center gap-2"
                    >
                      <FaBook /> {/* Add icon */}
                      <p>{link.title}</p>
                      <IoIosArrowDropdownCircle />
                    </button>

                    {/* Dropdown */}
                    {isCatalogOpen && (
                      <>
                        <div
                          className="fixed inset-0 bg-black bg-opacity-50 z-40"
                          onClick={closeCatalogDropdown}
                        ></div>

                        {/* Dropdown Content */}
                        {/* Dropdown Content */}
                          <div className="absolute left-1/3 top-0 transform -translate-x-1/2 translate-y-14 h-6 w-6 rotate-45 rounded bg-yellow-25 border-t-2 border-l-2 border-yellow-25"></div>
                        <div className="fixed left-1/2 transform -translate-x-1/2 top-20 z-50 flex flex-col rounded-md bg-richblack-900 p-4 text-richblack-5 w-[300px] max-h-[400px] overflow-y-auto shadow-lg border-2 border-yellow-25">
                          {/* Arrow at the top of the dropdown */}

                          {/* Dropdown Items */}
                          {subLinks.length ? (
                            subLinks.map((subLink, index) => (
                              <Link
                                to={`${subLink.link}`}
                                key={index}
                                onClick={closeCatalogDropdown}
                                className="p-2 border-b-2-blue hover:bg-richblack-700 rounded-md transition-all duration-200 ease-in-out"
                              >
                                <p className="text-richblack-300 hover:text-white">
                                  {subLink.title}
                                </p>
                              </Link>
                            ))
                          ) : (
                            <div className="text-center text-richblack-500">
                              No items found
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <Link to={link?.path}>
                    <p
                      className={`flex items-center gap-2 ${
                        matchRoute(link?.path)
                          ? "text-yellow-25"
                          : "text-richblack-25"
                      }`}
                    >
                      {link.title === "Home" && <FaHome />}
                      {link.title === "About" && <FaUser />}
                      {link.title === "Catalog" && <FaBook />}
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Login/SignUp/Dashboard */}
        <div className="flex gap-x-4 items-center">
          {user && user?.accountType !== "Instructor" && (
            <Link to="/dashboard/cart" className="relative">
              <AiOutlineShoppingCart />
              {totalItems > 0 && <span>{totalItems}</span>}
            </Link>
          )}
          {token === null && (
            <Link to="/login">
              <button className="flex items-center gap-2 border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md">
                <FaSignInAlt /> Log in
              </button>
            </Link>
          )}
          {token === null && (
            <Link to="/signup">
              <button className="flex items-center gap-2 border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md">
                <FaUserPlus /> Sign Up
              </button>
            </Link>
          )}
          {token !== null && <ProfileDropDown />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
