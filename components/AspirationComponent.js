import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import aspiration from "../public/FloatingInspiration.jsx";
import Image from "next/image";
import { motion} from "framer-motion";
import FloatingInspiration from "../public/FloatingInspiration.jsx";
import ContactUsComponent from "@/public/ContactUs.jsx";

function AspirationComponent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div className="overflow-hidden">
      <section className="relative">
        <div className="py-16 px-4 dark:bg-gray-800 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4 py-5">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16 relative z-10"
            >
              <h2 className="text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 text-transparent bg-clip-text">
                  My Aspirations
                </span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </motion.div>

            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 relative z-10"
            >
               <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden sm:flex sm:flex-1"
        >
          <FloatingInspiration />
        </motion.div>
              <motion.ul
                variants={containerVariants}
                className="list-disc list-inside space-y-5 mt-10"
              >
                <motion.li variants={itemVariants} className="text-lg md:text-2xl text-gray-600 dark:text-gray-300">
                  Work in a fast-paced environment with effective team.
                </motion.li>
                <motion.li variants={itemVariants} className="text-lg md:text-2xl text-gray-600 dark:text-gray-300">
                  Dabble with the latest state-of-the-art technologies that push the envelope in achieving breakthroughs.
                </motion.li>
                <motion.li variants={itemVariants} className="text-lg md:text-2xl text-gray-600 dark:text-gray-300">
                  Build scalable web applications using the MERN stack.
                </motion.li>
                <motion.li variants={itemVariants} className="text-lg md:text-2xl text-gray-600 dark:text-gray-300">
                  Develop and deploy cloud-native solutions for enhanced performance and reliability.
                </motion.li>
                <motion.li variants={itemVariants} className="text-lg md:text-2xl text-gray-600 dark:text-gray-300">
                  Integrate machine learning models to create intelligent and responsive applications.
                </motion.li>
                <motion.li variants={itemVariants} className="text-lg md:text-2xl text-gray-600 dark:text-gray-300">
                  Continuously improve and optimize application performance and user experience.
                </motion.li>
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AspirationComponent;