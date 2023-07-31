import Head from "next/head";
import Link from "next/link";

import { icons } from "react-icons";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineMail,
  AiFillGithub,
} from "react-icons/ai";

import Iframe from "react-iframe";

import { useState } from "react";

import ClipLoader from "react-spinners/ClipLoader";

import { IoLogoNodejs, DiLinux, DiReact, FaAws } from "react-icons";

import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import GitHubWidget from "../components/GitHubWidget";
import ContactForm from "../components/ContactForm";
import TechnologyTags from "../components/TechnologyTags";

import web1 from "../public/web1.png";
import lyrics from "../public/lyrics.png";
import web2 from "../public/web2.png";
import bootcamp from "../public/bootcamp.png";
import web3 from "../public/web3.png";
import imagegenerator from "../public/image-generator.png";
import student from "../public/student.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

import react from "../public/react.svg";
import azure from "../public/azure.png";
import node from "../public/nodejs.svg";
import mysql from "../public/mysql.svg";
import aws from "../public/aws.svg";
import github from "../public/github.png";
import js from "../public/javascript.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const override = {
  margin: "0 auto",
  borderColor: "red",
};

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [documentstate, setDocumentState] = useState(true);

  let handleIframeLoad = () => {
    setDocumentState(false);
  };

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
          <nav className="py-10 text-gray-500 mb-12 flex justify-between ">
            <h1 className="text-xl font-burtons ">developedbyneeraj</h1>
            <ul className="flex items-center pl-5 ">
              <li className=" ">
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl "
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 border-y-cyan-500 text-white px-4 py-2 rounded-md ml-8"
                  href="https://github.com/Frostdev7506/Auto-resume/raw/build/cv.pdf"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          {/* Nav bar */}

          <div className="text-center p-10 ">
            <h2 className=" text-5xl py-2  text-teal-600  font-medium md:text-6xl">
              Neeraj Butola
            </h2>
            <h3 className=" text-2xl text-teal-600 py-2 md:text-3xl ">
              Software Developer
            </h3>
            <a id="about" href="#">
              <p className="text-md py-5 leading-8 text-gray-500 md:text-xl max-w-lg  mx-auto lg:text-xl">
                A dedicated developer with a product mindset who is experienced
                in solving problems, making efficient and scalable apps,
                improving performance and driving growth using cloud services
                like AWS and Azure.
              </p>
            </a>
          </div>
          <div className=" text-5xl flex justify-center gap-16 py-3 text-gray-500">
            <a href="#">
              <AiFillTwitterCircle />
            </a>
            <a id="contact" href="https://github.com/Frostdev7506">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/neeraj-butola/">
              <AiFillLinkedin />
            </a>
            <a href="#contactme">
              <AiOutlineMail/>
            </a>
          </div>
          <div className=" relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={deved} layout="fill" objectFit="cover" />
          </div>
        </section>

        <section>

        </section>

        <section>
          <div className=" text-center mt-2 my-2">
            <h3 className=" text-3xl py-1 text-gray-500">My aspirations</h3>
            <p className="text-lg py-5 leading-8 text-gray-500 lg:text-xl">
              I aspire to become a better problem solver every day. My main
              focus is on building <span className=" text-teal-500">Web</span>{" "}
              and <span className=" text-teal-500">Native </span>
              applications in the <span className=" text-teal-500">Cloud</span>
            </p>
          </div>
        </section>

        <section>
          <div className=" py-8 dark:bg-gray-800 mt-10">
            <div className="container mx-auto">
              <h2 className=" text-3xl py-5 mb-8  text-gray-500 ">
                Technology Stack
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* react */}
                <div className="bg-white rounded-lg p-6 shadow-md dark:bg-gray-800 ">
                  <Image
                    src={react}
                    alt="React"
                    className="h-20 mx-auto mb-4"
                  />
                  <h3 className="text-xl text-gray-500 font-semibold mb-2 dark:text-white">
                    React.js
                  </h3>
                  <p className="text-gray-600">
                    A JavaScript library for building user interfaces.
                  </p>
                </div>
                {/* nodejs  */}
                <div className="bg-white rounded-lg p-6 shadow-md dark:bg-gray-800">
                  <Image
                    src={node}
                    alt="Nodejs"
                    className="h-20 mx-auto mb-4"
                  />
                  <h3 className="text-xl text-gray-500 font-semibold mb-2 dark:text-white">
                    Nodejs
                  </h3>
                  <p className="text-gray-600">
                    JavaScript runtime for server-side applications.
                  </p>
                </div>
                {/* mysql */}
                <div className="bg-white rounded-lg p-6 shadow-md dark:bg-gray-800">
                  <Image
                    src={mysql}
                    alt="Mysql"
                    className="h-20 mx-auto mb-4"
                  />
                  <h3 className="text-xl text-gray-500 font-semibold mb-2 dark:text-white">
                    Mysql
                  </h3>
                  <p className="text-gray-600">
                    Open-source relational database management system.
                  </p>
                </div>
                {/* AWS */}
                <div className="bg-white rounded-lg p-6 shadow-md dark:bg-gray-800">
                  <Image src={aws} alt="Aws" className="h-20 mx-auto mb-4" />
                  <h3 className="text-xl text-gray-500 font-semibold mb-2 dark:text-white">
                    AWS
                  </h3>
                  <p className="text-gray-600">
                    Comprehensive cloud computing platform by Amazon.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section 3  */}
        <section className="mt-5">
          <div>
            <h3 className=" text-3xl py-5 text-gray-500">Portfolio </h3>
            <p className="text-md py-5 leading-8 text-gray-500 lg:text-xl  ">
              My experience spans numerous personal ventures where my primary
              emphasis lies in designing, developing, and deploying cloud-based
              web and mobile solutions, with an emphasis on efficient
              architecture and scalability. In addition to my work on various
              CRUD projects, I have a diverse skill set covering a wide range of
              technology stacks
            </p>
          </div>

          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap  justify-center items-center">
            {/* card1 */}
            <div className=" basis-1/3 flex-1 w-96 m-4 p-4 rounded-md shadow-lg ">
              <div className="relative">
                <Image
                  src={lyrics}
                  alt="Lyriks Music Streaming application"
                  className="rounded-md"
                  layout="responsive"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="https://github.com/Frostdev7506/Lyriks"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-xl bg-gray-900 bg-opacity-75 px-4 py-2 rounded-md hover:bg-opacity-100"
                  >
                    View Project
                  </a>
                </div>
              </div>
              <h2 className="text-2xl text-gray-500 font-medium my-2">
                Lyriks (Music Streaming application)
              </h2>

              <TechnologyTags
                technologies={["React", "JavaScript", "API", "Express"]}
                colors1={["cyan", "cyan", "cyan", "cyan"]}
                colors2={["teal", "teal", "teal", "teal"]}
              />
              <p className="text-gray-500">
                Music streaming application created using React and Shazam-core
                Api.
              </p>
            </div>

            {/* card2 */}
            <div className=" basis-1/3 flex-1 w-96 m-4 p-4 rounded-md shadow-lg">
              <div className="relative">
                <Image
                  src={bootcamp}
                  alt="Frontend-Webdevelopment-Bootcamp"
                  className="rounded-md"
                  layout="responsive"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="https://github.com/Frostdev7506/Frontend-Webdevelopment-Bootcamp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-xl bg-gray-900 bg-opacity-75 px-4 py-2 rounded-md hover:bg-opacity-100"
                  >
                    View Project
                  </a>
                </div>
              </div>
              <h2 className="text-2xl text-gray-500 font-medium my-2">
                Web Development Bootcamp
              </h2>
              <TechnologyTags
                technologies={["React", "JavaScript", "Mapbox API", "Express"]}
                colors1={["cyan", "cyan", "cyan", "cyan"]}
                colors2={["teal", "teal", "teal", "teal"]}
              />
              <p className="text-gray-500">
                A landing Page for a Web-Development Bootcamp.
              </p>
            </div>

            {/* card3*/}
            <div className=" basis-1/3 flex-1 w-96 m-4 p-4 rounded-md shadow-lg">
              <div className="relative">
                <Image
                  src={imagegenerator}
                  alt="OpenAI Image Generator"
                  className="rounded-md"
                  layout="responsive"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="https://github.com/Frostdev7506/open-AI-Image-Generator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-xl bg-gray-900 bg-opacity-75 px-4 py-2 rounded-md hover:bg-opacity-100"
                  >
                    View Project
                  </a>
                </div>
              </div>
              <h2 className="text-2xl text-gray-500 font-medium my-2">
                OpenAI Image Generator
              </h2>
              <TechnologyTags
                technologies={["React", "JavaScript", "OpenAI", "Express"]}
                colors1={["cyan", "cyan", "cyan", "cyan"]}
                colors2={["teal", "teal", "teal", "teal"]}
              />
              <p className="text-gray-500">
                This is a simple image generator built with Node.js and Express
                that uses OpenAI Dall-E AI-model to generate images.
              </p>
            </div>
            {/* card4*/}
            <div className=" basis-1/3 flex-1 w-96 m-4 p-4 rounded-md shadow-lg">
              <div className="relative">
                <Image
                  src={student}
                  alt="Student Attendance Application"
                  className="rounded-md"
                  layout="responsive"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="https://github.com/Frostdev7506/mern-crud-student-attendance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-xl bg-gray-900 bg-opacity-75 px-4 py-2 rounded-md hover:bg-opacity-100"
                  >
                    View Project
                  </a>
                </div>
              </div>
              <h2 className="text-2xl text-gray-500 font-medium my-2">
                Student Attendance Application
              </h2>
              <TechnologyTags
                technologies={["React", "JavaScript", "Mysql", "Express"]}
                colors1={["cyan", "cyan", "cyan", "cyan"]}
                colors2={["teal", "teal", "teal", "teal"]}
              />
              <p className="text-gray-500">
                Web Application to do CRUD operations with student attendance.
                Created using MERN stack.
              </p>
            </div>
            {/* card5*/}
            <div className=" basis-1/3 flex-1 w-96 m-4 p-4 rounded-md shadow-lg">
              <div className="relative">
                <Image
                  src={web5}
                  alt="Project 5"
                  className="rounded-md"
                  layout="responsive"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-xl bg-gray-900 bg-opacity-75 px-4 py-2 rounded-md hover:bg-opacity-100"
                  >
                    View Project
                  </a>
                </div>
              </div>
              <h2 className="text-2xl text-gray-500 font-medium my-2">
                Project 5
              </h2>
              <TechnologyTags
                technologies={["React", "JavaScript", "API", "Express"]}
                colors1={["cyan", "cyan", "cyan", "cyan"]}
                colors2={["teal", "teal", "teal", "teal"]}
              />
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                faucibus justo a augue sagittis, id venenatis risus tincidunt.
              </p>
            </div>
            {/* card6*/}
            <div className=" basis-1/3 flex-1 w-96 m-4 p-4 rounded-md shadow-lg">
              <div className="relative">
                <Image
                  src={web3}
                  alt="Project 6"
                  className="rounded-md"
                  layout="responsive"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-xl bg-gray-900 bg-opacity-75 px-4 py-2 rounded-md hover:bg-opacity-100"
                  >
                    View Project
                  </a>
                </div>
              </div>
              <h2 className="text-2xl text-gray-500 font-medium my-2">
                Project 6
              </h2>
              <TechnologyTags
                technologies={["React", "JavaScript", "API", "Express"]}
                colors1={["cyan", "cyan", "cyan", "cyan"]}
                colors2={["teal", "teal", "teal", "teal"]}
              />
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                faucibus justo a augue sagittis, id venenatis risus tincidunt.
              </p>
            </div>
          </div>
        </section>

        {/* Resume section */}
        <section>
          <div className=" dark:bg-gray-800">
            <h2 className="text-3xl text-gray-500 my-2 lg:py-5 sm:py-2 md:py-2 ">
              Resume Preview
            </h2>
            <div className=" mx-10  lg:h-screen sm:h-screen  ">
              <div className="flex mt-8 items-center justify-center">
                {documentstate && (
                  <ClipLoader
                    color={"red"}
                    loading={documentstate}
                    size={300}
                    width={"100%"}
                    css={override}
                    height={"100%"}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                )}
              </div>

              <Iframe
                className="lg:h-screen md:h-screen h-96 "
                // src="https://drive.google.com/viewerng/viewer?embedded=true&url=https://github.com/Frostdev7506/Auto-resume/raw/build/cv.pdf#toolbar=0&scrollbar=0"
                src="https://docs.google.com/viewer?url=https://github.com/Frostdev7506/Auto-resume/raw/build/cv.pdf&embedded=true"
                frameBorder="2"
                scrolling="auto"
                onLoad={handleIframeLoad}
                layout="responsive"
                width={"100%"}
                height={"100%"}
              />
            </div>
          </div>
        </section>





        {/* github widget */}
        <section>
          <GitHubWidget />
        </section>

{/* Contact Me  */}

<section id="contactme">
<ContactForm/>
<ToastContainer />

</section>

        {/* footer  */}
        <footer className="p-4 mt-5 bg-white rounded-lg shadow-2xl md:px-6 md:py-8 dark:bg-gray-900">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://github.com/Frostdev7506"
              className="flex items-center mb-4 sm:mb-0"
            >
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-black dark:text-white">
                <p className="text-xl text-gray-500 font-burtons ">
                  developedbyneeraj
                </p>
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#about" className="mr-4 hover:underline md:mr-6 ">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#contactme" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            ©{" "}
            <a
              href="https://github.com/Frostdev7506"
              className="hover:underline"
            >
              NeerajButola™
            </a>
            . All Rights Reserved.
          </span>
        </footer>
      </main>
    </div>
  );
}
