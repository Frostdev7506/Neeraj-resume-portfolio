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

import techStackData from "../HelperFunctions/techStackData";

import Iframe from "react-iframe";

import { useState, useEffect } from "react";

import ClipLoader from "react-spinners/ClipLoader";

import { IoLogoNodejs, DiLinux, DiReact, FaAws } from "react-icons";

import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import GitHubWidget from "../components/GitHubWidget";
import ContactForm from "../components/ContactForm";
import TechStackCards from "@/components/TechStackCards";
import TechnologyTags from "../components/TechnologyTags";
import PdfShare from "../components/PdfShare";

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
import aspiration from "../public/Aspiration.png";

import github from "../public/github.png";
import js from "../public/javascript.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer";

import { useDarkMode } from "../context/DarkModeContext";

const override = {
  margin: "0 auto",

  borderColor: "red",
};

export default function Home() {
  const { darkMode, setDarkMode } = useDarkMode();

  const [documentstate, setDocumentState] = useState(true);

  let handleIframeLoad = () => {
    setDocumentState(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDocumentState(false);
    }, 5000); // Change document state to false after 5 seconds

    return () => clearTimeout(timer); // This function will be called when the component unmounts
  }, []);

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
            <h1 className="text-xl font-burtons ">Resume/Portfolio</h1>
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
                  href="https://raw.githubusercontent.com/Frostdev7506/Auto-resume/build/Neeraj_Butola_Resume.pdf"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          {/* Nav bar */}

          {/* Introduction card */}
          <div class="w-30 p-4 text-center bg-gray-800 border border-gray-200 rounded-lg shadow-lg sm:p-2 dark:bg-gray-700 dark:border-gray-700 py-6 my-10">
            <h2 class="mb-2  mt-2 text-5xl font-bold text-teal-600 dark:text-white">
              Software Developer
            </h2>
            <p class="mt-5 mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
              Results-oriented Software Developer with a product-centric
              mindset. Proven ability to solve complex problems, design and
              develop highly efficient and scalable applications, consistently
              optimize performance, and drive measurable growth. Expert in all
              the major Cloud providers like
              <span className=" text-teal-500"> AWS</span> ,
              <span className=" text-teal-500">Azure</span> and{" "}
              <span className=" text-teal-500">GCP</span>.
            </p>
            <div class="items-center mt-5 justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
              <a
                href="https://raw.githubusercontent.com/Frostdev7506/Auto-resume/build/Neeraj_Butola_Resume.pdf"
                class="  shadow-lg  w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-teal-500 border-y-cyan-500 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-20 py-4 "
              >
                <div class="min-w-3xl w-100 min-h-fit">
                  <div class="mb-1 text-xs">Resume</div>
                </div>
              </a>

              <a
                href="#contactme"
                class="  shadow-lg  w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-teal-500 border-y-cyan-500 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-20 py-4 "
              >
                <div class="min-w-3xl w-100 min-h-fit">
                  <div class="mb-1 text-xs">Contact</div>
                </div>
              </a>
            </div>

            <div className=" mb-2 text-5xl flex justify-center gap-16 mt-10 py-2 text-gray-500">
              <a id="contact" href="https://github.com/Frostdev7506">
                <AiFillGithub />
              </a>
              <a href="https://www.linkedin.com/in/neeraj-butola/">
                <AiFillLinkedin />
              </a>
              <a href="#contactme">
                <AiOutlineMail />
              </a>
            </div>
          </div>

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

        <section>
          <div className=" flex justify-center mx-auto mt-10 my-2">
            <div
              class="flex flex-col bg-white border border-gray-200 rounded-lg shadow-lg 
         md:flex-row lg:max-w-max md:max-w-2xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-700 dark:hover:bg-gray-700 "
            >
              <Image
                class="object-cover   max-w-max rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src={aspiration}
                alt="My Aspirations"
              />
              <div class="flex flex-col  lg:w-max  overflow-ellipsis justify-between p-4 leading-normal">
                <h3 className=" text-4xl py-1 text-center text-gray-500 hover:text-teal-600">
                  My aspirations
                </h3>
                <p className="text-2xl py-5  max-w-6xl mx-auto text-gray-500 lg:text-2xl  ">
                  I am a fullstack developer with professional experience in
                  JavaScript, React, Node.js, and other web technologies.I have
                  deployed web apps on AWS, Azure,and Google Cloud.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* section 2  */}
        <section>
          <div className="py-8 dark:bg-gray-800 mt-10">
            <div className="container mx-auto">
              <h2 className="text-4xl py-5 mb-8 text-gray-500 text-center">
                Technology Stack
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {techStackData.map((tech, index) => (
                  <TechStackCards
                    key={index}
                    imageUrl={tech.imageUrl}
                    title={tech.title}
                    description={tech.description}
                  />
                ))}
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
            {/* card1 */}
            <div className="bg-gray-100 basis-1/3 flex-1 w-96 m-4 p-4 rounded-md shadow-lg dark:bg-gray-700">
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
            <div className="bg-gray-100 basis-1/3 flex-1 w-96 m-4 p-4 rounded-md shadow-lg dark:bg-gray-700">
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
            <div className="bg-gray-100 basis-1/3 flex-1 w-96 m-4 p-4 rounded-md shadow-lg dark:bg-gray-700">
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
            <div className="bg-gray-100 basis-1/3 flex-1 w-96 m-4 p-4 rounded-md shadow-lg dark:bg-gray-700">
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
            <div className="bg-gray-100 basis-1/3 flex-1 w-96 m-4 p-4 rounded-md shadow-lg dark:bg-gray-700">
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
            <div className="bg-gray-100 basis-1/3 flex-1 w-96 m-4 p-4 rounded-md shadow-lg dark:bg-gray-700">
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
          <div className=" bg-white px-2 py-2 sm:py-2 md:py-2 rounded-lg dark:bg-gray-800">
            <div className="flex lg:flex-row md:flex-col sm:flex-col justify-between mb-4 items-center min-h-fit">
              <h2 className="text-3xl text-gray-500 sm:mx-4 lg:py-5  sm:py-2 md:py-2">
                Resume
              </h2>

              <div className="md:mx-4 sm:mx-4">
                <PdfShare
                  pdfUrl={
                    "https://raw.githubusercontent.com/Frostdev7506/Auto-resume/build/Neeraj_Butola_Resume.pdf"
                  }
                />
              </div>
            </div>

            <div className=" mx-5  lg:h-screen sm:h-screen h-100 ">
              <>
                {documentstate ? (
                  <div className="flex mt-8 items-center justify-center h-screen ">
                    <ClipLoader
                      color={"red"}
                      loading={documentstate}
                      size={300}
                      width={"80%"}
                      css={override}
                      height={"500%"}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                    />
                  </div>
                ) : (
                  <Iframe
                    className=" bg-gray-100 lg:h-screen md:h-screen  "
                    src="https://drive.google.com/viewerng/viewer?embedded=true&url=https://raw.githubusercontent.com/Frostdev7506/Auto-resume/build/Neeraj_Butola_Resume.pdf#toolbar=0&scrollbar=0"
                    // src="https://docs.google.com/viewer?url=https://github.com/Frostdev7506/Auto-resume/raw/build/cv.pdf&embedded=true"
                    frameBorder="0"
                    scrolling="no"
                    onLoad={handleIframeLoad}
                    layout="responsive"
                    width={"100%"}
                    height={"100%"}
                  />
                )}
              </>
            </div>
          </div>
        </section>

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
