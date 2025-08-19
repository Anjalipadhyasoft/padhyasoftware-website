import { useState } from "react";
import { motion } from "framer-motion";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="assets/padhyalogo.png" alt="logo" className="h-8 w-8" />
          <span className="text-xl font-bold text-blue-600">PADHYA</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {["Home", "About", "Services", "Blogs", "Contact"].map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1, color: "#2563eb" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer hover:text-blue-600"
            >
              {item}
            </motion.li>
          ))}
        </ul>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="hidden md:block px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          Get Started
        </motion.button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          className="md:hidden bg-white shadow-lg"
        >
          <ul className="flex flex-col p-4 space-y-4 text-gray-700 font-medium">
            {["Home", "About", "Services", "Blogs", "Contact"].map((item) => (
              <li
                key={item}
                className="cursor-pointer hover:text-blue-600"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
}
