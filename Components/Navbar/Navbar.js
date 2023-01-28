import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BiCaretUp } from "react-icons/bi";

const Navbar = () => {
  const [navbg, setNavbg] = useState("bg-transparent ease-out duration-300");
  const [showButton, setShowButton] = useState(false);
  const router = useRouter();

  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        setShowButton(true);
        setNavbg("glassdesign backdrop-blur-md  ease-in duration-300");
      } else {
        setShowButton(false);
        setNavbg("bg-transparent ease-out duration-300");
      }
    }
  }, [showButton]);

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <>
      <div className={`fixed w-full  z-30 ${navbg}`}>
        <div className="navbar lg:w-4/5 lg:mx-auto lg:mb-3">
          <div className="navbar-start w-3/4">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li className="mx-2">
                  <Link
                    className={`${
                      router.pathname === "/" ? "text-blue-500" : "text-white"
                    }`}
                    href={"/"}
                  >
                    Home
                  </Link>
                </li>
                <li className="mx-2">
                  <Link
                    className={`${
                      router.pathname === "/Services"
                        ? "text-blue-500"
                        : "text-white"
                    }`}
                    href={"/Services"}
                  >
                    Services
                  </Link>
                </li>
                <li className="mx-2">
                  <Link
                    className={`${
                      router.pathname === "/Contuct"
                        ? "text-blue-500"
                        : "text-white"
                    }`}
                    href={"/Contuct"}
                  >
                    Contuct US
                  </Link>
                </li>
                <li className="mx-2">
                  <Link
                    className={`${
                      router.pathname === "/About"
                        ? "text-blue-500"
                        : "text-white"
                    }`}
                    href={"/About"}
                  >
                    About US
                  </Link>
                </li>
              </ul>
            </div>
            <Link href={"/"} className="text-4xl font-bold">
              Evotech
            </Link>
            <ul className=" px-1 ml-12 font-bold lg:flex  hidden">
              <li className="mx-2">
                <Link
                  className={`${
                    router.pathname === "/" ? "text-blue-500" : "text-white"
                  }`}
                  href={"/"}
                >
                  Home
                </Link>
              </li>
              <li className="mx-2">
                <Link
                  className={`${
                    router.pathname === "/Services"
                      ? "text-blue-500"
                      : "text-white"
                  }`}
                  href={"/Services"}
                >
                  Services
                </Link>
              </li>
              <li className="mx-2">
                <Link
                  className={`${
                    router.pathname === "/Contuct"
                      ? "text-blue-500"
                      : "text-white"
                  }`}
                  href={"/Contuct"}
                >
                  Contuct US
                </Link>
              </li>
              <li className="mx-2">
                <Link
                  className={`${
                    router.pathname === "/About"
                      ? "text-blue-500"
                      : "text-white"
                  }`}
                  href={"/About"}
                >
                  About US
                </Link>
              </li>
            </ul>
          </div>
          {/* <div className="navbar-center hidden lg:flex"></div> */}
          <div className="ml-auto">
            <a className="btn-success btn btn-outline btn-sm px-6 border-2 border-purple-600 rounded-full ">
              Hire Us
            </a>
          </div>
        </div>
      </div>
      {/* back to top button  */}
      <div>
        <button
          onClick={topFunction}
          id="backtotop"
          className={`fixed lg:right-12 right-6 lg:bottom-12 bottom-6 btn btn-primary rounded-full ${
            showButton
              ? "mb-0 ease-in duration-300"
              : "-mb-48 ease-out duration-300"
          }`}
        >
          <BiCaretUp className=""></BiCaretUp>
        </button>
      </div>
    </>
  );
};

export default Navbar;
