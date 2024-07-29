import { FaAngleDown, FaBars } from 'react-icons/fa';
import logo from '../assets/logo.svg';
import intersectionImage from '../assets/Star.svg';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className=" sticky bg-white">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <button
          className="text-gray-700 hover:text-black cursor-pointer p-4"
          onClick={handleMenuToggle}
        >
          <FaBars size={30} />
        </button>
        <ul className="flex flex-col p-4 gap-4">
          <li>
            <a href="/" className="text-[16px] text-gray-700 hover:text-black hover:font-bold">
              Home
            </a>
          </li>
          <li className="relative group">
            <a
              href="#"
              className="flex flex-row items-center justify-between text-gray-700 hover:text-black hover:font-bold"
            >
              Features <FaAngleDown className="w-[14px] h-[14px]" />
            </a>
            <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-md text-sm mt-2 left-full top-0">
              <li>
                <a href="#" className="block p-2 text-gray-700 hover:bg-gray-200">
                  Feature1
                </a>
              </li>
              <li>
                <a href="#" className="block p-2 text-gray-700 hover:bg-gray-200">
                  Feature2
                </a>
              </li>
              <li>
                <a href="#" className="block p-2 text-gray-700 hover:bg-gray-200">
                  Feature3
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/" className="text-[16px] text-gray-700 hover:text-black hover:font-bold">
              Pricing
            </a>
          </li>
          <li>
            <a href="/" className="text-[16px] text-gray-700 hover:text-black hover:font-bold">
              FAQ
            </a>
          </li>
        </ul>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-row h-[144px] w-[1200px] border-b border-1-2 border-[#AC9CFA] items-center">
          {/* Burger menu */}
          <button
            className="lg:hidden ml-4 text-gray-700 hover:text-black mr-10 cursor-pointer"
            onClick={handleMenuToggle}
          >
            <FaBars size={30} />
          </button>
          <a href="/" className="ml-4 mt-[40px]">
            <img src={logo} alt="Logo" className="w-[220.11px] h-[61.22px] border-none" />
          </a>

          <ul className="hidden lg:flex flex-row items-center w-[315px] h-[14px] mt-[65px] ml-[100px] gap-[32px]">
            <li>
              <a href="/" className="w-[68px] h-[12px] text-[16px] text-center hover:text-black hover:font-bold">
                Home
              </a>
            </li>
            <li className="relative group">
              <a
                href="#"
                className="flex flex-row items-center justify-center w-[68px] h-[12px] text-center hover:text-black hover:font-bold"
              >
                Features <FaAngleDown className="w-[14px] h-[14px]" />
              </a>
              <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-md text-sm mt-2">
                <li>
                  <a href="#" className="block p-2 text-gray-700 hover:bg-gray-200">
                    Feature1
                  </a>
                </li>
                <li>
                  <a href="#" className="block p-2 text-gray-700 hover:bg-gray-200">
                    Feature2
                  </a>
                </li>
                <li>
                  <a href="#" className="block p-2 text-gray-700 hover:bg-gray-200">
                    Feature3
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/" className="w-[68px] h-[12px] text-[16px] text-center hover:text-black hover:font-bold">
                Pricing
              </a>
            </li>
            <li>
              <a href="/" className="w-[68px] h-[12px] text-[16px] text-center hover:text-black hover:font-bold">
                FAQ
              </a>
            </li>
          </ul>

          <div className="w-[144px] ml-[240px] text-gray-800 border-l-2 border-[#AC9CFA] h-full"></div>

          <div className="absolute top-[130px] right-[455px]">
            <img src={intersectionImage} alt="Intersection" className="w-[26.59px] h-[26.59px]" />
          </div>

          <div className="flex items-center gap-4 ml-[-50px]">
            <a href="/login">
              <button className="text-gray-700 cursor-pointer hover:text-black hover:bg-gray-100 border border-black rounded-full px-4 py-2">
                Login
              </button>
            </a>

            <a href="/get-demo">
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full px-4 py-2 cursor-pointer hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-700">
                Get a Demo
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
