import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

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

  return (
    <nav className=" py-3 mt-5">
      <div className="container px-4 mx-auto flex items-center justify-between">
        {/* Left: Category Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-1 text-lg font-semibold text-white cursor-pointer bg-black px-6 py-4 rounded-2xl hover:text-midnight"
          >
            Shop by Category
            <MdKeyboardArrowDown
              size={30}
              className={`${
                dropdownOpen && "rotate-180"
              } transition-transform duration-300`}
            />
          </button>

          {dropdownOpen && (
            <div className="absolute top-full left-5 mt-3 w-52 bg-white rounded-lg drop-shadow-2xl z-10">
              <ul className="p-4 text-sm text-charcoal rounded-lg  bg-white space-y-2">
                {brand.map((brand, idx) => (
                  <li
                    className="cursor-pointer hover:translate-x-1 duration-300 transition-transform"
                    key={idx}
                  >
                    {brand}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Center: Nav Links */}
        <ul className="flex gap-8 text-base font-semibold text-black">
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

        {/* Right: Promo or Badge */}
        <button
          type="button"
          className="bg-black cursor-pointer text-white text-end p-2 px-10 rounded-tl-lg rounded-tr-full rounded-br-lg rounded-bl-full h-full max-w-md"
        >
          <p>Get 50% off on the app</p>
          <h5 className="animate-pulse">Download Now</h5>
        </button>
      </div>
    </nav>
  );
}
