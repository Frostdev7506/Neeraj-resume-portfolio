import React, { useState, useEffect } from "react";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { BsFillMoonStarsFill, BsSunFill, BsDownload } from "react-icons/bs";
import { useDarkMode } from "../context/DarkModeContext";

function Navbar() {
  const { darkMode, setDarkMode } = useDarkMode();
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  if (!mounted) {
    return null;
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-4 bg-white/95 dark:bg-gray-900/95 shadow-lg"
          : "py-6 bg-white/90 dark:bg-gray-900/50"
      } backdrop-blur-sm border-b border-gray-200/10 dark:border-gray-700/30`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl font-burtons relative"
          >
            <span className="bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 text-transparent dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
              Resume/Portfolio
            </span>
            {/* Decorative underline */}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
          </motion.h1>

          <ul className="flex items-center space-x-8">
            <motion.li
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.button
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-gray-100/80 dark:bg-gray-800/80 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
                aria-label="Toggle dark mode"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={darkMode ? "moon" : "sun"}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {darkMode ? (
                      <BsFillMoonStarsFill className="text-2xl text-yellow-500 dark:text-yellow-300" />
                    ) : (
                      <BsSunFill className="text-2xl text-yellow-500" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://raw.githubusercontent.com/Frostdev7506/Auto-resume/build/Neeraj_Butola_Resume.pdf"
                download //add download attribute to trigger download
                className="relative inline-flex items-center px-6 py-3 overflow-hidden text-white rounded-lg group bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
              >
                <span className="flex items-center gap-2">
                  {" "}
                  {/* Added flex and gap */}
                  <BsDownload className="text-lg" /> {/* Added download icon */}
                  Resume
                </span>
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="h-full w-full bg-gradient-to-r from-cyan-400 to-teal-400 blur-lg transform scale-150"></div>
                </div>
              </motion.a>
            </motion.li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
