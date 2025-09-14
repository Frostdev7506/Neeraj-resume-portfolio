import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useDarkMode } from '../context/DarkModeContext';

const Footer = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-4 px-5 mt-5 bg-gradient-to-r from-white via-teal-50 to-white rounded-lg shadow-lg 
      shadow-gray-500/50 md:px-6 md:py-8 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800"
    >
      <div className="sm:flex sm:items-center sm:justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Link href="https://github.com/Frostdev7506" className="flex items-center mb-4 sm:mb-0 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800 rounded-sm">
            <motion.span 
              className="self-center text-2xl font-semibold whitespace-nowrap text-black dark:text-white"
              whileHover={{ color: '#0D9488' }}
            >
              
              <p className="text-xl bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 text-transparent bg-clip-text font-burtons">
                developedbyneeraj
              </p>
            </motion.span>
          </Link>
        </motion.div>

        <motion.ul 
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-wrap items-center mb-6 text-sm sm:mb-0"
        >
          <motion.li variants={item}>
            <Link href="/#about" className="mr-4 md:mr-6 relative group focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800 rounded-sm">
              <span className="text-gray-500 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300">
                About
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </motion.li>
          <motion.li variants={item}>
            <Link href="#" className="mr-4 md:mr-6 relative group focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800 rounded-sm">
              <span className="text-gray-500 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300">
                Privacy Policy
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </motion.li>
          <motion.li variants={item}>
            <Link href="/#contactme" className="relative group focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800 rounded-sm">
              <span className="text-gray-500 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300">
                Contact
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </motion.li>
        </motion.ul>
      </div>

      <motion.hr 
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" 
      />

      <motion.span 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="block text-sm text-gray-500 sm:text-center dark:text-gray-400"
      >
        © {" "}
        <Link 
          href="https://github.com/Frostdev7506" 
          className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800 rounded-sm"
        >
          NeerajButola™
        </Link>
        . All Rights Reserved.
      </motion.span>
    </motion.footer>
  );
};

export default Footer;