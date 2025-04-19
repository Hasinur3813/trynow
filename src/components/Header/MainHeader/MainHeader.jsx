import { FiSearch, FiHeart, FiUser, FiShoppingCart } from "react-icons/fi";
import SearchBar from "../components/SearchBar";

export default function MainHeader() {
  return (
    <section className="mt-0 md:mt-6">
      <div className="container mx-auto px-4 flex justify-center sm:justify-between items-center flex-wrap md:flex-nowrap">
        {/* Logo */}

        <a href="#">
          <img src="/logo.jpg" alt="try-now" />
        </a>

        {/* Search Box */}
        <div className="w-full md:w-[50%] mt-4 md:mt-0">
          <SearchBar />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6 text-xl text-midnight mt-4 md:mt-0 w-full md:w-auto justify-center md:justify-end">
          <FiUser className="cursor-pointer hover:text-tahiti" />
          <FiHeart className="cursor-pointer hover:text-tahiti" />
          <div className="relative cursor-pointer hover:text-tahiti">
            <FiShoppingCart />
            <span className="absolute -top-2 -right-2 bg-danger text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              3
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
