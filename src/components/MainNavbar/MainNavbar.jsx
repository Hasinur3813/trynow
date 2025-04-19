import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const brand = [
  "Police",
  "Gucci",
  "Ray Ban",
  "Titan",
  "Dragon",
  "Emilio Puccini",
  "Hugo Boss",
  "Harley Dividson",
  "Oakley",
  "Oakley Youth",
  "O'Neill",
  "Puma",
];

export default function MainNavbar() {
  const [dropdownOpen, setDropdownOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="py-3 mt-5 bg-[#f5fdff] shadow-sm">
      <div className="container px-4 mx-auto flex items-center justify-between flex-wrap">
        {/* Left: Category Dropdown */}
        <div className="relative mb-4 md:mb-0">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-1 text-lg font-semibold text-white cursor-pointer bg-black px-4 py-2 rounded-2xl hover:text-midnight"
          >
            Shop by Category
            <MdKeyboardArrowDown
              size={24}
              className={`transition-transform duration-300 ${
                dropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {dropdownOpen && (
            <div className="absolute top-full left-5 mt-3 w-52 bg-white rounded-lg shadow-2xl z-20">
              <ul className="p-4 text-sm text-charcoal space-y-2">
                {brand.map((brand, idx) => (
                  <li
                    className="cursor-pointer hover:translate-x-1 transition-transform duration-300"
                    key={idx}
                  >
                    {brand}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden ml-auto">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-2xl cursor-pointer text-black"
          >
            {mobileMenuOpen ? <IoClose /> : <FiMenu />}
          </button>
        </div>

        {/* Center + Right Nav Links and Promo (Hidden on Mobile unless open) */}
        <div
          className={`w-full md:w-auto flex-col md:flex-row md:flex items-center justify-between gap-6 md:gap-8 transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "flex" : "hidden"
          } md:flex`}
        >
          {/* Center: Nav Links */}
          <ul className="flex flex-col md:flex-row gap-4 md:gap-8 text-base font-semibold text-black items-start md:items-center">
            <li className="hover:text-midnight cursor-pointer flex items-center gap-1">
              Home <MdKeyboardArrowDown className="mt-1" />
            </li>
            <li className="hover:text-midnight cursor-pointer flex items-center gap-1">
              Shop <MdKeyboardArrowDown className="mt-1" />
            </li>
            <li className="hover:text-midnight cursor-pointer flex items-center gap-1">
              Eyeglassess <MdKeyboardArrowDown className="mt-1" />
            </li>
            <li className="hover:text-midnight cursor-pointer">About Us</li>
          </ul>

          {/* Right: Promo */}
          <button
            type="button"
            className="bg-black text-white text-sm text-center px-4 py-2 rounded-tl-lg rounded-tr-full rounded-br-lg rounded-bl-full animate-pulse"
          >
            <p>Get 50% off on the app</p>
            <h5 className="text-xs font-light">Download Now</h5>
          </button>
        </div>
      </div>
    </nav>
  );
}
