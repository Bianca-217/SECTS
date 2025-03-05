import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import "../App.css";

function Navigation() {
  return (
    <>
      <nav className="container h-[8vh] bg-lightblue flex items-center justify-between">
        <h1 className="text-3xl font-semibold font-mont text-gray-900 tracking-widest">
          SECTS
        </h1>

        <ul className="flex items-center justify-center">
          <li>
            <a
              href="#"
              className="text-black py-3 px-6 text-xl hover:rounded-lg hover:bg-blue-300 transition-all duration-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-black py-3 px-6 text-xl hover:rounded-lg hover:bg-blue-300 transition-all duration-200"
            >
              About
            </a>
          </li>

          {/* Features with Dropdown */}
          <li className="relative group">
            <a
              href="#"
              className="flex items-center gap-2 text-black py-3 px-6 text-xl hover:rounded-lg hover:bg-blue-300 transition-all duration-200"
            >
              Features
              <IoIosArrowDropdown />
            </a>

            {/* Dropdown Menu */}
            <ul className="absolute right-0 w-max mt-2 p-3 bg-blue-200 shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 divide-y divide-gray-400 translate-y-2 group-hover:translate-y-0">
              <li>
                <a
                  href="#"
                  className="block px-6 py-3 hover:bg-blue-300 text-xl text-black transition-all"
                >
                  Bill Calculator
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-6 py-3 hover:bg-blue-300 text-xl text-black transition-all"
                >
                  Energy Consumption Calculator
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-6 py-3 hover:bg-blue-300 text-xl text-black transition-all"
                >
                  Save Energy (Optimization Suggestions)
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#"
              className="text-black py-3 px-6 text-xl hover:rounded-lg hover:bg-blue-300 transition-all duration-200"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-100 ml-5 py-3 px-6 text-xl bg-cta-blue rounded-lg font-semibold hover:bg-blue-400  transition-all duration-200"
            >
              Login
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
