import { FiSearch, FiHeart, FiUser, FiShoppingCart } from "react-icons/fi";
import SearchBar from "../components/SearchBar";

export default function MainHeader() {
  return (
    <div className="mt-6">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-midnight tracking-wide">
          GlazNow
        </h1>

        {/* Search Box */}
        <SearchBar />

        {/* Icons */}
        <div className="flex items-center gap-6 text-xl text-midnight">
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
    </div>
  );
}
