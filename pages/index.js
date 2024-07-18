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

import web1 from "../public/web1.png";

import web2 from "../public/web2.png";

import web3 from "../public/web3.png";

import github from "../public/github.png";
import js from "../public/javascript.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer";

import { useDarkMode } from "../context/DarkModeContext";
import ProjectCard from "@/components/ProjectCard";
import Navbar from "@/components/Navbar";
import IntroductionCard from "@/components/IntroductionCard";
import TechStackComponent from "@/components/TechStackComponent";
import projects from "@/HelperFunctions/PortfolioProjectsData";
import ResumeComponent from "@/components/ResumeComponent";
import AspirationComponent from "@/components/AspirationComponent";
import PortfolioComponent from "@/components/PortfolioComponent";

export default function Home() {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <div className={darkMode ? "dark" : ""}>
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
      <main className=" bg-white  md:px-20 lg:px-40 sm:px-2  dark:bg-gray-800">
        <section className=" min-h-screen ">
          {/* Nav bar */}
          <Navbar />
          {/* Nav bar */}

          {/* Introduction card */}
          <IntroductionCard />
        </section>

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

        {/* section 3 postfolio */}
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

        {/* footer  */}
        <Footer />
      </main>
    </div>
  );
}
