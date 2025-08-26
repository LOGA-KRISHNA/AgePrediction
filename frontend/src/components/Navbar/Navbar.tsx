
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-lg z-50 border-b border-purple-100"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.div 
          className="text-2xl font-black"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            True Age AI
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {links.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="relative text-gray-700 hover:text-purple-600 transition-colors font-medium"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {link.name}
              <motion.div
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <motion.button
          className="md:hidden flex flex-col space-y-1.5 p-2"
          onClick={() => setIsOpen((prev) => !prev)}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            className="block h-0.5 w-6 bg-gray-700 rounded-full"
            animate={{
              rotate: isOpen ? 45 : 0,
              y: isOpen ? 6 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block h-0.5 w-6 bg-gray-700 rounded-full"
            animate={{
              opacity: isOpen ? 0 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block h-0.5 w-6 bg-gray-700 rounded-full"
            animate={{
              rotate: isOpen ? -45 : 0,
              y: isOpen ? -6 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden md:hidden bg-white/90 backdrop-blur-md border-t border-purple-100"
          >
            <div className="flex flex-col space-y-1 px-6 py-4">
              {links.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200 py-3 px-4 rounded-lg font-medium"
                  onClick={() => setIsOpen(false)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
