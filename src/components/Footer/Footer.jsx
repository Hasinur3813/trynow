import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-8 pb-10 border-b border-gray-700">
          {/* Logo & Contact */}
          <div>
            <h2 className="text-2xl font-bold mb-4">TryNow</h2>
            <p className="flex items-start gap-2">
              <FaMapMarkerAlt className=" mt-1" />
              80 Buttonwood St, Platskals, OH 43002
            </p>

            <p className="flex items-center gap-2 mt-2">
              <FaPhoneAlt className="" />
              +1 (415)-338-0101
            </p>

            <p className="flex items-center gap-2 mt-2">
              <FaEnvelope className="" />
              admin@trynow.com
            </p>
            <div className="flex space-x-4 mt-4 text-white text-lg">
              <FaFacebookF className="hover:text-[#4ab6e1] cursor-pointer" />
              <FaTwitter className="hover:text-[#4ab6e1] cursor-pointer" />
              <FaInstagram className="hover:text-[#4ab6e1] cursor-pointer" />
              <FaLinkedinIn className="hover:text-[#4ab6e1] cursor-pointer" />
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="cursor-pointer">Men’s Eyeglasses</li>
              <li className="cursor-pointer">Women’s Eyeglasses</li>
              <li className="cursor-pointer">Baby Eyeglasses</li>
              <li className="cursor-pointer">Young Eyeglasses</li>
            </ul>
          </div>

          {/* Admin */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Admin</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="cursor-pointer">About Us</li>
              <li className="cursor-pointer">Contact Us</li>
              <li className="cursor-pointer">Help & FAQ</li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Policies</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="cursor-pointer">Privacy Policy</li>
              <li className="cursor-pointer">Terms & Conditions</li>
              <li className="cursor-pointer">Legal Notices</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-gray-400 text-sm">
          <p>© 2025 Try New Eyeglasses Shop</p>
          <div className="flex space-x-3 mt-3 md:mt-0">
            <img src="/images/paypal.jpeg" alt="paypal" className="h-6" />
            <img src="/images/stripe.png" alt="stripe" className="h-6" />
            <img src="/images/airtm.jpeg" alt="airtm" className="h-6" />
            <img src="/images/oney.jpeg" alt="oney" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
