import React, { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useAuth } from "../store/auth";
import Logo from "./images/logo-transparent-png.png";
import { BsMenuButtonWideFill } from "react-icons/bs";
import { GiCrossMark } from "react-icons/gi";
const Navbar = () => {
  const { isLoggedIn } = useAuth();
  const [isOpen, setisOpen] = useState(false);

  const openDrawer = () => setisOpen(!isOpen);
  const closeDrawer = () => setisOpen(false);

  return (
    <>
      <div className="navbar w-screen min-h-screen -left-full h-0 lg:left-0 md:min-h-14 md:relative fixed   bg-neutral-200  p-4 justify-evenly flex">
        <div className="logo flex">
          <img
            className=" relative lg:absolute lg:top-0 lg:w-42"
            src={Logo}
            alt=""
          />
        </div>
        <div className="content flex gap-5 justify-center md:items-center">
          <ul className="flex md:flex-row gap-12 flex-col md:gap-y-1 gap-y-12 md:text-sm font-bold font-serif text-3xl md:p-0 pt-58">
            {isLoggedIn ? (
              <>
                <motion.li
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <Link
                    className="hover:underline hover:text-black text-neutral-900"
                    to="/home"
                    onClick={closeDrawer}
                  >
                    Home
                  </Link>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <Link
                    className="hover:underline hover:text-black text-neutral-900"
                    to="/courses"
                    onClick={closeDrawer}
                  >
                    Courses
                  </Link>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <Link
                    className="hover:underline hover:text-black text-neutral-900"
                    to="/services"
                    onClick={closeDrawer}
                  >
                    Services
                  </Link>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <Link
                    className="hover:underline hover:text-black text-neutral-900"
                    to="/contact"
                    onClick={closeDrawer}
                  >
                    Contact Us
                  </Link>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <Link
                    className="hover:underline hover:text-black text-neutral-900"
                    to="/logout"
                    onClick={closeDrawer}
                  >
                    Logout
                  </Link>
                </motion.li>
              </>
            ) : (
              <>
                <motion.li
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <Link
                    className="hover:underline hover:text-black text-neutral-900"
                    to="/signup"
                    onClick={closeDrawer}
                  >
                    Signup
                  </Link>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <Link
                    className="hover:underline hover:text-black text-neutral-900 px-4 py-2 bg-blue-500 rounded-[4px]"
                    to="/"
                    onClick={closeDrawer}
                  >
                    Login
                  </Link>
                </motion.li>
              </>
            )}
          </ul>
          <button className="close-drawer lg:hidden block"></button>
          <div className="lg:hidden block ">
            <button
              onClick={openDrawer}
              className="open text-2xl text-black absolute -right-10 align-top cursor-pointer "
            >
              {isOpen ? <GiCrossMark /> : <BsMenuButtonWideFill />}
            </button>
          </div>
        </div>
      </div>
      <div className="h-14 lg:hidden block bg-gradient-to-bl w-full">
        <div className="logo w-38 ms-18 top-0 text-amber-100">
          <img className="" src={Logo} alt="" />
        </div>
        {isOpen && (
          <div className=" flex-row">
            <motion.div
              initial={{ left: -200 }}
              animate={{ left: 0 }}
              transition={{ duration: 0.5 }}
              className="flex bg-white z-10  min-w-44 min-h-full fixed "
            >
              <ul className="flex lg:flex-row gap-12 flex-col md:gap-y-1 p-2 sm:p-9 gap-y-4 md:text-sm font-bold align-middle font-sans text-3xl md:p-0 text-[12px]">
                {isLoggedIn ? (
                  <>
                    <div className="flex flex-col gap-4 border-2 border-s-0 border-e-0 w-40 py-3">
                      <motion.li whileHover={{ scale: 1.3 }}>
                        <Link
                          className="hover:underline hover:text-black text-neutral-900"
                          to="/logout"
                          onClick={closeDrawer}
                        >
                          Logout
                        </Link>
                      </motion.li>
                    </div>
                    <motion.li whileHover={{ scale: 1.3 }}>
                      <Link
                        className="hover:underline hover:bg-purple-200 text-purple-500"
                        to="/home"
                        onClick={closeDrawer}
                      >
                        Home
                      </Link>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.3 }}>
                      <Link
                        className="hover:underline hover:bg-purple-200 text-purple-500"
                        to="/courses"
                        onClick={closeDrawer}
                      >
                        Courses
                      </Link>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.3 }}>
                      <Link
                        className="hover:underline hover:bg-purple-200 text-purple-500"
                        to="/services"
                        onClick={closeDrawer}
                      >
                        Services
                      </Link>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.3 }}>
                      <Link
                        className="hover:underline hover:bg-purple-200 text-purple-500"
                        to="/contact"
                        onClick={closeDrawer}
                      >
                        Contact Us
                      </Link>
                    </motion.li>
                  </>
                ) : (
                  <>
                    <div className="flex flex-col gap-4 border-2 border-s-0 border-e-0 w-40 py-3">
                      <motion.li whileHover={{ scale: 1.3 }}>
                        <Link
                          className="hover:underline hover:bg-purple-200  pe-3 text-neutral-700"
                          to="/"
                          onClick={closeDrawer}
                        >
                          Login
                        </Link>
                      </motion.li>
                      <motion.li whileHover={{ scale: 1.3 }}>
                        <Link
                          className="hover:underline hover:bg-purple-200  pe-3  text-neutral-700 "
                          to="/signup"
                          onClick={closeDrawer}
                        >
                          Signup
                        </Link>
                      </motion.li>
                    </div>
                  </>
                )}
              </ul>
            </motion.div>
            <motion.div className="opacity-50 z-0 bg-neutral-500  min-h-screen"></motion.div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
