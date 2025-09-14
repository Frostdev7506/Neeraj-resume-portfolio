import React from "react";
import { motion } from "framer-motion";
import FloatingInspiration from "../public/FloatingInspiration.jsx";
import {
  FaRocket,
  FaMicrochip,
  FaCloud,
  FaStar,
  FaChartBar,
  FaUsers
} from "react-icons/fa";

function AspirationComponent() {
  // Faster, more responsive animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const aspirations = [
    {
      icon: FaUsers,
      title: "Team Collaboration",
      text: "Fast-paced environment with effective teamwork",
      gradient: "from-blue-500 to-cyan-500",
      color: "blue"
    },
    {
      icon: FaStar,
      title: "Innovation",
      text: "Cutting-edge technologies and breakthrough solutions",
      gradient: "from-purple-500 to-pink-500",
      color: "purple"
    },
    {
      icon: FaRocket,
      title: "Scalable Development",
      text: "Modern MERN stack applications",
      gradient: "from-teal-500 to-green-500",
      color: "teal"
    },
    {
      icon: FaCloud,
      title: "Cloud Solutions",
      text: "Enhanced performance and reliability",
      gradient: "from-indigo-500 to-blue-500",
      color: "indigo"
    },
    {
      icon: FaMicrochip,
      title: "AI Integration",
      text: "Intelligent and responsive applications",
      gradient: "from-orange-500 to-red-500",
      color: "orange"
    },
    {
      icon: FaChartBar,
      title: "Optimization",
      text: "Performance and user experience excellence",
      gradient: "from-emerald-500 to-teal-500",
      color: "emerald"
    }
  ];

  return (
    <section className="relative py-16 bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* Simplified background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-slate-800/50 dark:to-slate-700/50"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Streamlined Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-6">
            <span className="text-purple-600 dark:text-purple-400 text-sm font-medium">🎯 My Goals</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Aspirations</span>
          </h2>

          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            What drives me forward as a developer
          </p>
        </motion.div>

        {/* Optimized Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Floating Inspiration - Simplified */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <FloatingInspiration />
          </motion.div>

          {/* Fast-loading Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {aspirations.map((aspiration, index) => {
              const IconComponent = aspiration.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className="group cursor-pointer"
                >
                  <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-200 h-full">
                    {/* Icon */}
                    <div className={`inline-flex p-3 bg-gradient-to-r ${aspiration.gradient} rounded-lg mb-4 group-hover:scale-110 transition-transform duration-200`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
                      {aspiration.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {aspiration.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Simplified CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg transition-shadow duration-200">
            <span>🚀</span>
            <span>Ready to innovate</span>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes blob-slow {
          0% { transform: translate(0px, 0px) scale(1) rotate(0deg); }
          25% { transform: translate(40px, -60px) scale(1.1) rotate(90deg); }
          50% { transform: translate(-30px, 40px) scale(0.9) rotate(180deg); }
          75% { transform: translate(50px, 30px) scale(1.05) rotate(270deg); }
          100% { transform: translate(0px, 0px) scale(1) rotate(360deg); }
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

        .animate-blob-slow {
          animation: blob-slow 12s infinite ease-in-out;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .bg-gradient-mesh {
          background: linear-gradient(45deg, 
            rgba(147, 51, 234, 0.1) 0%, 
            rgba(236, 72, 153, 0.1) 25%, 
            rgba(6, 182, 212, 0.1) 50%, 
            rgba(16, 185, 129, 0.1) 75%, 
            rgba(147, 51, 234, 0.1) 100%);
          background-size: 400% 400%;
          animation: gradient-mesh 15s ease infinite;
        }
      `}</style>
    </section>
  );
}

export default AspirationComponent;