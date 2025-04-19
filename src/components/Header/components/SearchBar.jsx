import { FiSearch } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function SearchBar() {
  return (
    <div className=" sm:max-w-2xl w-full">
      <div className="flex border flex-col gap-2 sm:gap-0 sm:flex-row border-lightgray overflow-hidden">
        {/* Category Select */}

        <div className="relative">
          <select className="bg-black w-full appearance-none rounded-l-md rounded-r-md sm:rounded-r-none text-white text-sm ps-4 pe-10 py-2 focus:outline-none border-lightgray">
            <option value="all">All Categories</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
            <option value="sunglasses">Sunglasses</option>
          </select>
          <MdKeyboardArrowDown
            className="absolute right-2 top-1/2 -translate-y-1/2 text-white z-50 pointer-events-none"
            size={25}
          />
        </div>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search for products..."
          className="flex-1  px-4 py-2 text-sm bg-lightgray placeholder:font-semibold placeholder:text-gray-400 focus:outline-none"
        />

        {/* Search Button */}
        <button className="bg-black flex items-center justify-center rounded-l-md sm:rounded-l-none py-3 sm:py-0 rounded-r-md cursor-pointer text-white px-5 hover:bg-midnight transition">
          <FiSearch size={18} />
        </button>
      </div>
    </div>
  );
}
