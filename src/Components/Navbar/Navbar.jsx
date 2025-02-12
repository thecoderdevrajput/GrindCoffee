import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Gift, User, ShoppingBag } from "lucide-react";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const menuItems = ["Shop All", "Coffee", "Bundles", "Accessories", "Visit Us", "Discover"];

  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-[#F6DBDF] lato text-sm font-extralight ">
      {/* Left Section */}
      <div className="flex items-center gap-6">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="relative group"
            onMouseEnter={() => setOpenDropdown(index)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <span className="cursor-pointer text-gray-700 hover:text-black font-semibold">
              {item}
            </span>
            {openDropdown === index && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute left-0 mt-2 w-40 bg-white shadow-lg border rounded-md p-2"
              >
                <p className="text-sm text-gray-600">Dropdown for {item}</p>
              </motion.div>
            )}
          </div>
        ))}
      </div>
      
      {/* Logo */}
      <div ><img className="h-5" src="logo.png" /></div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <h1 className="px-4 py-2 underline hover:no-underline cursor-pointer">GrindPro</h1>
        <Search className="w-6 h-6 cursor-pointer" />
        <Gift className="w-6 h-6 cursor-pointer" />
        <User className="w-6 h-6 cursor-pointer" />
        <ShoppingBag className="w-6 h-6 cursor-pointer" />
        <button className="px-4 py-2 bg-[#2D2926] text-white poppins rounded-lg">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
