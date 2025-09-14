import React from "react";
import { motion } from "framer-motion";
import {
  AiFillLinkedin,
  AiOutlineMail,
  AiFillGithub,
} from "react-icons/ai";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";

function IntroductionCard() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
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
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      {/* Modern mesh gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-mesh opacity-30 dark:opacity-20"></div>
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gradient-to-r from-cyan-400/30 via-blue-500/20 to-purple-600/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob-slow"></div>
        <div className="absolute top-40 -right-40 w-[400px] h-[400px] bg-gradient-to-r from-teal-400/25 via-emerald-500/20 to-cyan-500/25 rounded-full mix-blend-multiply filter blur-3xl animate-blob-slow animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-1/2 transform -translate-x-1/2 w-[450px] h-[450px] bg-gradient-to-r from-purple-400/20 via-pink-500/15 to-blue-500/25 rounded-full mix-blend-multiply filter blur-3xl animate-blob-slow animation-delay-4000"></div>
      </div>

      {/* Subtle noise texture */}
      <div className="absolute inset-0 bg-noise opacity-[0.015] dark:opacity-[0.025]"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-teal-400/40 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400/40 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-purple-400/40 rounded-full animate-float animation-delay-3000"></div>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 max-w-7xl mx-auto px-6 py-24 mt-4"
      >
        <div className="text-center">
          {/* Main heading with margin-top */}
          <motion.div variants={itemVariants} className="mb-4 mt-4">
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="px-4 py-2 bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-200/30 dark:border-teal-800/30 rounded-full text-sm font-medium text-teal-700 dark:text-teal-300 backdrop-blur-sm">
                ✨ Available for new opportunities
              </span>
            </motion.div>

            <motion.h1
              className="text-6xl md:text-4xl lg:text-7xl font-black mb-6 tracking-tight"
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.span
                className="block bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white text-transparent bg-clip-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Hi, I&apos;m
              </motion.span>

              <motion.span
                className="block bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 text-transparent bg-clip-text relative"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Neeraj Butola
                <motion.div
                  className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                />
              </motion.span>
              <motion.span
                className="block text-slate-700 dark:text-slate-300 mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Fullstack Developer
              </motion.span>
            </motion.h1>

            {/* Enhanced subtitle */}
            <motion.p
              className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light max-w-4xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Crafting exceptional digital experiences with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600 font-medium">
                modern technologies
              </span>{" "}
              and innovative solutions
            </motion.p>
          </motion.div>

          {/* Enhanced Profile image */}
          <motion.div
            variants={imageVariants}
            className="relative w-56 h-56 md:w-72 md:h-72 mx-auto mb-12"
          >
            {/* Outer glow ring */}
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/20 via-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>

            {/* Rotating gradient ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 animate-spin-slow p-1">
              <div className="w-full h-full rounded-full bg-white dark:bg-slate-900"></div>
            </div>

            {/* Inner shadow ring */}
            <div className="absolute inset-3 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 shadow-inner"></div>

            {/* Profile image with enhanced effects */}
            <motion.div
              className="absolute inset-6 rounded-full overflow-hidden shadow-2xl"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                alt="Developer Neeraj at Work"
                src={deved}
                fill
                sizes="(max-width: 768px) 200px, 288px"
                className="object-cover hover:scale-110 transition-transform duration-700"
                priority
                placeholder="blur"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 dark:to-slate-900/20"></div>
            </motion.div>
          </motion.div>

          {/* Enhanced Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-5xl mx-auto leading-relaxed mb-16 font-light"
          >
            Results-oriented{" "}
            <span className="font-medium text-slate-800 dark:text-slate-200">
              Software Developer
            </span>{" "}
            with a product-centric mindset. Proven ability to solve complex problems,
            design and develop highly efficient and scalable applications using{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-purple-600 font-medium">
              cutting-edge technologies
            </span>.
          </motion.p>

          {/* Modern CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              href="https://raw.githubusercontent.com/Frostdev7506/Auto-resume/build/Neeraj_Butola_Resume.pdf"
              className="group relative px-10 py-4 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 rounded-2xl text-white font-semibold text-lg shadow-2xl hover:shadow-teal-500/25 transition-all duration-500 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                📄 View Resume
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              href="#contactme"
              className="group relative px-10 py-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-2 border-slate-200 dark:border-slate-700 rounded-2xl text-slate-700 dark:text-slate-300 font-semibold text-lg hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <span className="flex items-center gap-2">
                💬 Let's Connect
              </span>
            </motion.a>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6"
          >
            <motion.a
              whileHover={{ scale: 1.15, y: -5 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/Frostdev7506"
              className="group p-4 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-600 dark:text-slate-400 hover:text-white hover:bg-gradient-to-r hover:from-gray-800 hover:to-black transition-all duration-300 shadow-lg hover:shadow-2xl border border-slate-200 dark:border-slate-700"
            >
              <AiFillGithub className="text-2xl group-hover:scale-110 transition-transform duration-300" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.15, y: -5 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/neeraj-butola/"
              className="group p-4 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-600 dark:text-slate-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-2xl border border-slate-200 dark:border-slate-700"
            >
              <AiFillLinkedin className="text-2xl group-hover:scale-110 transition-transform duration-300" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.15, y: -5 }}
              whileTap={{ scale: 0.9 }}
              href="#contactme"
              className="group p-4 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-600 dark:text-slate-400 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-2xl border border-slate-200 dark:border-slate-700"
            >
              <AiOutlineMail className="text-2xl group-hover:scale-110 transition-transform duration-300" />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
          ></motion.div>
        </motion.div>
      </motion.div>

      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        @keyframes blob-slow {
          0% { transform: translate(0px, 0px) scale(1) rotate(0deg); }
          25% { transform: translate(40px, -60px) scale(1.1) rotate(90deg); }
          50% { transform: translate(-30px, 40px) scale(0.9) rotate(180deg); }
          75% { transform: translate(50px, 30px) scale(1.05) rotate(270deg); }
          100% { transform: translate(0px, 0px) scale(1) rotate(360deg); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-20px) rotate(90deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
          75% { transform: translateY(-15px) rotate(270deg); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes gradient-mesh {
          0%, 100% { 
            background-position: 0% 50%;
            transform: scale(1);
          }
          25% { 
            background-position: 100% 50%;
            transform: scale(1.1);
          }
          50% { 
            background-position: 100% 100%;
            transform: scale(0.9);
          }
          75% { 
            background-position: 0% 100%;
            transform: scale(1.05);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-blob-slow {
          animation: blob-slow 12s infinite ease-in-out;
        }

        .animate-float {
          animation: float 8s infinite ease-in-out;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-3000 {
          animation-delay: 3s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .bg-gradient-mesh {
          background: linear-gradient(45deg, 
            rgba(6, 182, 212, 0.1) 0%, 
            rgba(59, 130, 246, 0.1) 25%, 
            rgba(147, 51, 234, 0.1) 50%, 
            rgba(16, 185, 129, 0.1) 75%, 
            rgba(6, 182, 212, 0.1) 100%);
          background-size: 400% 400%;
          animation: gradient-mesh 15s ease infinite;
        }

        .bg-noise {
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(255,255,255,0.3) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(0,0,0,0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 25% 75%, rgba(16, 185, 129, 0.1) 0%, transparent 50%);
          background-size: 100px 100px, 80px 80px, 120px 120px, 90px 90px;
          background-position: 0 0, 40px 40px, 80px 0, 0 80px;
        }

        /* Enhanced scroll indicator */
        .scroll-indicator {
          position: relative;
        }

        .scroll-indicator::before {
          content: '';
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 20px;
          background: linear-gradient(to bottom, transparent, rgba(100, 116, 139, 0.5));
          border-radius: 1px;
        }
      `}</style>
    </section>
  );
}

export default IntroductionCard;