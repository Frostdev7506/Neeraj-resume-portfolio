import React from "react";
import aspiration from "../public/FloatingInspiration.svg";
import Image from "next/image";
import { motion } from "framer-motion";

function AspirationComponent() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-teal-100 dark:from-gray-900 dark:via-gray-800 dark:to-teal-900">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center h-max mt-5 lg:mx-auto md:mx-auto sm:mx-auto"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-r from-teal-50 to-white border border-gray-200 rounded-lg shadow-lg 
          dark:from-gray-800 dark:to-gray-700 dark:border-gray-700 lg:h-screen 
          max-w-full md:h-full overflow-hidden"
        >
          <div className="flex flex-col md:flex-row min-h-full h-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <Image
                className="object-cover w-full h-max"
                src={aspiration}
                alt="My Aspirations"
              />
            </motion.div>
            <div className="flex flex-col w-full p-4 overflow-auto">
              <motion.h3
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl md:text-5xl py-1 text-center bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent hover:from-teal-500 hover:to-teal-300 mt-4"
              >
                <span className="bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 text-transparent bg-clip-text">
                 My Aspirations
                </span>
              </motion.h3>
              <motion.ul
                variants={container}
                initial="hidden"
                animate="show"
                className="list-disc list-inside space-y-5 mt-10"
              >
                <motion.li variants={item} className="text-lg md:text-2xl text-gray-600 dark:text-gray-300">
                  Work in a fast-paced environment with effective team.
                </motion.li>
                <motion.li variants={item} className="text-lg md:text-2xl text-gray-600 dark:text-gray-300">
                  Dabble with the latest state-of-the-art technologies that push
                  the envelope in achieving breakthroughs.
                </motion.li>
                <motion.li variants={item} className="text-lg md:text-2xl text-gray-600 dark:text-gray-300">
                  Build scalable web applications using the MERN stack.
                </motion.li>
                <motion.li variants={item} className="text-lg md:text-2xl text-gray-600 dark:text-gray-300">
                  Develop and deploy cloud-native solutions for enhanced
                  performance and reliability.
                </motion.li>
                <motion.li variants={item} className="text-lg md:text-2xl text-gray-600 dark:text-gray-300">
                  Integrate machine learning models to create intelligent and
                  responsive applications.
                </motion.li>
                <motion.li variants={item} className="text-lg md:text-2xl text-gray-600 dark:text-gray-300">
                  Continuously improve and optimize application performance and
                  user experience.
                </motion.li>
              </motion.ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default AspirationComponent;