import Head from "next/head";
import Link from "next/link";

import { icons } from "react-icons";

import { useState, useEffect } from "react";

import { IoLogoNodejs, DiLinux, DiReact, FaAws } from "react-icons";

import Image from "next/image";

import GitHubWidget from "../components/GitHubWidget";
import ContactForm from "../components/ContactForm";
import TechStackCards from "@/components/TechStackCards";
import TechnologyTags from "../components/TechnologyTags";


import github from "../public/github.png";
import js from "../public/javascript.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer";

import { BsArrowUpCircleFill } from "react-icons/bs";
import { useDarkMode } from "../context/DarkModeContext";
import ProjectCard from "@/components/ProjectCard";
import Navbar from "@/components/Navbar";
import IntroductionCard from "@/components/IntroductionCard";
import TechStackComponent from "@/components/TechStackComponent";
import projects from "@/HelperFunctions/PortfolioProjectsData";
import ResumeComponent from "@/components/ResumeComponent";
import AspirationComponent from "@/components/AspirationComponent";
import PortfolioComponent from "@/components/PortfolioComponent";
import Achievements from "@/components/Achievements";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import { FrontPage } from "@/components/FrontPage";

export default function Home() {
  const { darkMode, setDarkMode } = useDarkMode();

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Head>
        <title>Portfolio Website</title>
        <meta
          name="description"
          content=" Portfolio website created with NextJS and Tailwind CSS"
        />

        <meta property="og:url" content="https://neerajbutola.netlify.app" />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:card"
          content="Portfolio website created with NextJS and Tailwind CSS"
        />
        <meta name="keywords " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      {/* Main section */}
      <main className="min-h-screen">
        {/* Nav bar */}
        <Navbar />
        {/* Nav bar */}


        <section className="   md:px-20 lg:px-2 sm:px-2 bg-gray-50 dark:bg-gray-800">
          <section className=" min-h-screen ">
            {/* Introduction card */}

            <IntroductionCard />
          </section>

          {/* FrontPage section */}


          <section>
            {/* Button to the Blog Page */}
            {/* <div className="flex justify-center mt-6">
            <Link href="/blog">
              <button className="bg-teal-500 text-white px-6 py-3 rounded-md hover:bg-teal-600">
                Visit Blog
              </button>
            </Link>
          </div> */}
          </section>

          {/* section 2  TechStack */}
          <TechStackComponent />

          <AspirationComponent />

          {/* section 3  Acheivements */}
          <Achievements />

          {/* section 4 postfolio */}
          <PortfolioComponent />
          {/* Resume section */}
          <ResumeComponent />
          {/* github widget */}
          <section>
            <GitHubWidget />
          </section>

          {/* Contact Me  */}

          <section id="contactme">
            <ContactForm />
            <ToastContainer />
          </section>

          <div>
            {showButton && (
              <button
                onClick={scrollToTop}
                className="fixed z-50 bottom-10 right-10 p-4 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 text-transparent text-white rounded-full shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 ease-in-out" // Added transition
                aria-label="Back to Top"
              >
                <BsArrowUpCircleFill className="text-3xl" />{" "}
                {/* Use the icon */}
                <span className="sr-only">Back to Top</span>{" "}
                {/*added span tag for accessibilty*/}
              </button>
            )}
          </div>

          {/* footer  */}
          <Footer />
        </section>
      </main>
    </div>
  );
}
