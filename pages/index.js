import Head from "next/head";
import { icons } from "react-icons";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
} from "react-icons/ai";

import Iframe from "react-iframe";

import { IoLogoNodejs, DiLinux, DiReact, FaAws } from "react-icons";

import Image from "next/image";
import deved from "../public/dev-ed-wave.png";

import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

import react from "../public/react.png";
import azure from "../public/azure.png";
import node from "../public/node-js.png";
import aws from "../public/aws.png";
import github from "../public/github.png";
import js from "../public/javascript.png";

import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
            <h3 className=" text-2xl py-2 md:text-3xl">Software Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-500 md:text-xl max-w-lg  mx-auto lg:text-xl">
              A dedicated developer with a product mindset who is experienced in
              solving problems, making efficient and scalable apps, improving
              performance and driving growth using cloud services like AWS and
              Azure.
            </p>
          </div>
          <div className=" text-5xl flex justify-center gap-16 py-3 text-gray-500">
            <a href="#">
              <AiFillTwitterCircle />
            </a>
            <a href="https://github.com/Frostdev7506">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/neeraj-butola/">
              <AiFillLinkedin />
            </a>
          </div>
          <div className=" relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={deved} layout="fill" objectFit="cover" />
          </div>
        </section>

        {/* section 2   */}
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

          <h3 className=" text-3xl py-10 text-gray-500 ">Technology Stack</h3>

          {/* cards set-1 */}
          <div className="lg:flex gap-10">
            {/* card 1 */}
            <div className="bg-gray-50 text-center shadow-lg p-5 rounded-xl my-5 flex-1 dark:bg-white ">
              <div className=" relative mx-auto  w-80 h-80 mt-5 overflow-hidden">
                <Image src={node} layout="fill" />
              </div>
              <p className="text-teal-500 py-2 mt-2 text-2xl">Node Js</p>
            </div>
            {/* card 2 */}
            <div className="bg-gray-50 text-center shadow-lg p-5 rounded-xl my-5 flex-1 dark:bg-white ">
              <div className=" relative mx-auto  w-80 h-80 mt-5 overflow-hidden">
                <Image src={react} layout="fill" />
              </div>
              <p className="text-teal-500 py-1 mt-2 text-2xl">React</p>
            </div>
            {/* card 3 */}
            <div className="bg-gray-50 text-center shadow-lg p-5 rounded-xl my-5 flex-1 dark:bg-white ">
              <div className=" relative mx-auto  w-80 h-80 mt-5 overflow-hidden">
                <Image src={azure} layout="fill" />
              </div>
              <p className="text-teal-500 py-1  mt-2 text-2xl">
                Microsoft Azure
              </p>
            </div>
          </div>
          {/* cards set 2 */}
          <div className="lg:flex gap-10">
            {/* card 1 */}
            <div className="bg-gray-50 text-center shadow-lg p-5 rounded-xl my-5 flex-1 dark:bg-white ">
              <div className=" relative mx-auto  w-80 h-80 mt-5 overflow-hidden">
                <Image src={aws} layout="fill" />
              </div>
              <p className="text-teal-500 py-1 mt-2 text-2xl">
                Amazon Web services
              </p>
            </div>
            {/* card 2 */}
            <div className="bg-gray-50 text-center shadow-lg p-5 rounded-xl my-5 flex-1 dark:bg-white ">
              <div className=" relative mx-auto  w-80 h-80 mt-5 overflow-hidden">
                <Image src={github} layout="fill" />
              </div>
              <p className="text-teal-500 py-1 mt-2 text-2xl">Github</p>
            </div>
            {/* card 3 */}
            <div className="bg-gray-50 text-center shadow-lg p-5 rounded-xl my-5 flex-1 dark:bg-white ">
              <div className=" relative mx-auto  w-80 h-80 mt-5 overflow-hidden">
                <Image src={js} layout="fill" />
              </div>
              <p className="text-teal-500 py-1 mt-2 text-2xl">Javascript</p>
            </div>
          </div>
        </section>
        {/* section 3  */}
        <section>
          <div>
            <h3 className=" text-3xl py-5 text-gray-500">Portfolio </h3>
            <p className="text-md py-5 leading-8 text-gray-500 lg:text-xl">
              I have worked on several personal projects. My main focus is on
              building <span className=" text-teal-500">Web</span> and{" "}
              <span className=" text-teal-500">Native </span>
              applications in the <span className=" text-teal-500">
                Cloud
              </span>{" "}
              which are scalable . I have worked on many{" "}
              <span className="text-teal-500">CRUD </span> Applications.
            </p>
          </div>

          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div>
          </div>
        </section>
        {/* Resume section */}

        <section>
          <div className=" dark:bg-gray-800">
            <h2 className="text-3xl text-gray-500 my-2 lg:py-5 sm:py-2 md:py-2">
              Resume Preview
            </h2>
            <div className=" mx-10  ">
              <Iframe
                className="lg:h-screen md:h-screen sm:pb-96  "
                src="https://drive.google.com/viewerng/viewer?embedded=true&url=https://github.com/Frostdev7506/Auto-resume/raw/build/cv.pdf#toolbar=0&scrollbar=0"
                frameBorder="2"
                scrolling="auto"
                layout="responsive"
                width={"100%"}
                height={"100%"}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
