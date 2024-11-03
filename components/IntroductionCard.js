import React from "react";
import { motion } from "framer-motion";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineMail,
  AiFillGithub,
} from "react-icons/ai";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";

function IntroductionCard() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.2,
      },
    },
  };

  const socialIconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="px-4 py-8 mt-20"
    >
      <div className="relative max-w-4xl mx-auto">
        {/* Background gradient blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-teal-300/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 -right-40 w-80 h-80 bg-cyan-300/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        </div>

        <motion.div
          className="relative flex flex-col items-center p-8 bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-bold bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-500 bg-clip-text text-transparent pb-2"
          >
            <span className="bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 text-transparent bg-clip-text">
            Fullstack Developer
                </span>
           
          </motion.h2>

          <motion.div
            variants={imageVariants}
            className="relative w-64 h-64 md:w-80 md:h-80 mt-10 mb-8"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full animate-pulse"></div>
            <motion.div
              className="relative w-full h-full rounded-full overflow-hidden"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                alt="Developer Neeraj at Work"
                src={deved}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-300 text-xl max-w-2xl text-center leading-relaxed mb-8"
          >
            Results-oriented Software Developer with a product-centric mindset.
            Proven ability to solve complex problems, design and develop highly
            efficient and scalable applications.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center mb-8">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://raw.githubusercontent.com/Frostdev7506/Auto-resume/build/Neeraj_Butola_Resume.pdf"
              className="px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg text-white font-semibold text-lg shadow-lg hover:shadow-teal-500/25 transition-all duration-300 text-center"
            >
              Resume
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contactme"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg text-white font-semibold text-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 text-center"
            >
              Contact
            </motion.a>
          </div>

          <div className="flex justify-center gap-8">
            <motion.a
              variants={socialIconVariants}
              whileHover="hover"
              href="https://github.com/Frostdev7506"
              className="text-4xl text-gray-400 hover:text-teal-400 transition-colors duration-300"
            >
              <AiFillGithub />
            </motion.a>
            <motion.a
              variants={socialIconVariants}
              whileHover="hover"
              href="https://www.linkedin.com/in/neeraj-butola/"
              className="text-4xl text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <AiFillLinkedin />
            </motion.a>
            <motion.a
              variants={socialIconVariants}
              whileHover="hover"
              href="#contactme"
              className="text-4xl text-gray-400 hover:text-teal-400 transition-colors duration-300"
            >
              <AiOutlineMail />
            </motion.a>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </motion.div>
  );
}

export default IntroductionCard;