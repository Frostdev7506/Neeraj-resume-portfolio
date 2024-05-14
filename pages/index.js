import Head from "next/head";
import Link from "next/link";

import { icons } from "react-icons";

import { useState, useEffect } from "react";

import { IoLogoNodejs, DiLinux, DiReact, FaAws } from "react-icons";

import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import GitHubWidget from "../components/GitHubWidget";
import ContactForm from "../components/ContactForm";
import TechStackCards from "@/components/TechStackCards";
import TechnologyTags from "../components/TechnologyTags";

import web1 from "../public/web1.png";

import web2 from "../public/web2.png";

import web3 from "../public/web3.png";

import aspiration from "../public/FloatingInspiration.svg";

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
      <main className=" bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-800">
        <section className=" min-h-screen ">
          {/* Nav bar */}
          <Navbar />
          {/* Nav bar */}

          {/* Introduction card */}
          <IntroductionCard />

          <div className=" relative justify-center mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image
              alt="Developer Neeraj at Work"
              src={deved}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>

        <section>
          {/* Button to the Blog Page */}
          <div className="flex justify-center mt-6">
            <Link href="/blog">
              <button className="bg-teal-500 text-white px-6 py-3 rounded-md hover:bg-teal-600">
                Visit Blog
              </button>
            </Link>
          </div>
        </section>

        {/* section 2  TechStack */}
        <TechStackComponent />

        <section>
          <div className=" flex justify-center   mt-5  lg:mx-auto md:mx-auto sm:mx-2">
            <div
              class=" bg-white border border-gray-200 rounded-lg shadow-lg 
          hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-700 dark:hover:bg-gray-700 "
            >
              <div className="flex flex-col md:flex-row min-h-full">
                <Image
                  class="object-cover"
                  src={aspiration}
                  alt="My Aspirations"
                />
                <div class="flex flex-col  lg:w-max  overflow-ellipsis  p-4 ">
                  <h3 className=" text-5xl py-1 text-center text-gray-500 hover:text-teal-600 mt-4 max-w-full">
                    My aspirations
                  </h3>

                  <p className="text-2xl py-5  max-w-6xl mx-auto text-gray-500 lg:text-2xl  lg:mx-4  ">
                    I am a fullstack developer with professional experience in
                    JavaScript, React, Node.js, and other web technologies.I
                    have deployed web apps on AWS, Azure,and Google Cloud.
                  </p>
                  <p className="text-2xl py-5  max-w-6xl mx-auto text-gray-500 lg:text-2xl lg:mx-4 ">
                    I am a developer with 2+ years of expertise in designing and
                    building scalable, high-performance web applications. A
                    dedicated team player with a product-centric mindset, adept
                    at solving complex problems, optimizing application
                    performance, and driving measurable growth. Committed to
                    delivering robust solutions that enhance user experience and
                    contribute to overall product success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section 3 postfolio */}
        <section className="mt-5  mx-auto">
          <div class="w-full p-4  bg-white border border-gray-200 rounded-lg shadow-lg md:p-2 sm:p-2 dark:bg-gray-700 dark:border-gray-700 py-6 my-10 md:my-5 sm:my-2">
            <h3 className=" text-5xl py-10 text-center  text-gray-500">
              Portfolio{" "}
            </h3>
            <p className="text-2xl  p-6 leading-8 text-gray-500 lg:text-2xl mx-auto md:px-6  ">
              My experience spans numerous personal ventures where my primary
              emphasis lies in designing, developing, and deploying{" "}
              <span className=" text-teal-500">cloud-based web</span> and mobile
              solutions, with an emphasis on efficient architecture and
              scalability. In addition to my work on various
              <span className=" text-teal-500"> CRUD</span> projects.
            </p>
          </div>

          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap  justify-center items-center">
            {/* 6 cards */}
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>

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
