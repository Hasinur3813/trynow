import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

export default function TopHeader() {
  return (
    <div className="bg-lightgray text-sm text-charcoal">
      <div className="flex justify-between items-center container mx-auto px-4 py-3">
        {/* Left: loation and email */}
        <div className="flex items-center gap-4">
          {/* location */}
          <div>
            <a href="#" className="flex gap-1 text-base items-center">
              <IoLocationOutline size={20} />
              Find Store
            </a>
          </div>

          {/* vertical line */}
          <div className="h-4 w-[1px] rounded-lg bg-charcoal"></div>
          {/* email */}
          <div>
            <a
              href="mailto:admin@trynow.com"
              className="flex gap-1 text-base items-center"
            >
              <CiMail size={20} />
              admin@trynow.com
            </a>
          </div>
        </div>

        {/* Right: Language & Currency Select */}
        <div className="flex items-center gap-4">
          {/* Language */}
          <select className="bg-transparent cursor-pointer text-charcoal hover:text-midnight focus:outline-none">
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>

          {/* Currency */}
          <select className="bg-transparent cursor-pointer text-charcoal hover:text-midnight focus:outline-none">
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="bdt">BDT</option>
          </select>
        </div>
      </div>
    </div>
  );
}
