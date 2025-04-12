import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function MainNavbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className=" py-3 mt-5">
      <div className="container px-4 mx-auto flex items-center justify-between">
        {/* Left: Category Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-1 text-lg font-semibold text-white cursor-pointer bg-black px-6 py-4 rounded-lg hover:text-midnight"
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
            <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-lightgray rounded shadow-lg z-10">
              <ul className="p-4 text-sm text-charcoal space-y-2">
                <li className="hover:text-tahiti cursor-pointer">Ray-Ban</li>
                <li className="hover:text-tahiti cursor-pointer">Oakley</li>
                <li className="hover:text-tahiti cursor-pointer">Persol</li>
                <li className="hover:text-tahiti cursor-pointer">Prada</li>
                <li className="hover:text-tahiti cursor-pointer">Gucci</li>
              </ul>
            </div>
          )}
        </div>

        {/* Center: Nav Links */}
        <ul className="flex gap-8 text-base font-semibold text-black">
          <li className="hover:text-midnight cursor-pointer">Home</li>
          <li className="hover:text-midnight cursor-pointer">Shop</li>
          <li className="hover:text-midnight cursor-pointer">Featured</li>
          <li className="hover:text-midnight cursor-pointer">Blog</li>
          <li className="hover:text-midnight cursor-pointer">Contact</li>
        </ul>

        {/* Right: Promo or Badge */}
        <div className="text-xs bg-tahiti text-white px-3 py-1 rounded-full font-semibold shadow-sm hover:bg-midnight cursor-pointer transition">
          Hot Deals
        </div>
      </div>
    </nav>
  );
}
