// components/Footer.js
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';

// Data for navigation and social links for easier maintenance
const navLinks = [
  { href: '/#about', label: 'About' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/#contact', label: 'Contact' },
];

const socialLinks = [
  { href: 'https://github.com/Frostdev7506', label: 'GitHub', icon: FaGithub },
  { href: 'https://www.linkedin.com/in/your-linkedin/', label: 'LinkedIn', icon: FaLinkedin },
  { href: 'https://twitter.com/your-twitter', label: 'Twitter', icon: FaTwitter },
];

// Framer Motion Variants for optimized animations
const footerVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  },
};

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 border-t border-gray-100 dark:border-gray-800 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Top section: Logo and Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <motion.div variants={itemVariants} className="flex-shrink-0">
            <Link
              href="/"
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded-md transition-transform hover:scale-105 active:scale-95"
            >
              <h2 className="text-2xl bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 text-transparent bg-clip-text font-burtons font-bold tracking-tight">
                developedbyneeraj
              </h2>
            </Link>
          </motion.div>

          <motion.nav
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 font-medium relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded-md px-1 py-1"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-blue-400 group-hover:w-full transition-all duration-300 ease-out"></span>
              </Link>
            ))}
          </motion.nav>
        </div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="my-8 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent"
        />

        {/* Bottom section: Copyright and Socials */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center space-y-6 md:space-y-0 gap-4">
          <motion.p
            variants={itemVariants}
            className="text-sm text-gray-600 dark:text-gray-400 text-center flex items-center"
          >
            © {new Date().getFullYear()} Made with <FaHeart className="text-red-500 mx-1" /> by Neeraj Butola™
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-5"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default React.memo(Footer);