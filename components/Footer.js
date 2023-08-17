import React from 'react';
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="p-4 mt-5 bg-white rounded-lg shadow-2xl md:px-6 md:py-8 dark:bg-gray-900">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a href="https://github.com/Frostdev7506" className="flex items-center mb-4 sm:mb-0">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-black dark:text-white">
            <p className="text-xl text-gray-500 font-burtons">developedbyneeraj</p>
          </span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <Link href="/#about" className="mr-4 hover:underline md:mr-6">
              About
            </Link>
          </li>
          <li>
            <Link href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/#contactme" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        ©{" "}
        <a href="https://github.com/Frostdev7506" className="hover:underline">
          NeerajButola™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
