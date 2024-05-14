import React from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineMail,
  AiFillGithub,
} from "react-icons/ai";

import Image from "next/image";

import deved from "../public/dev-ed-wave.png";

function IntroductionCard() {
  return (
    <div>
      <div class="flex-1 lg:w-auto   m-4 p-4 text-center bg-gray-800 border border-gray-200 rounded-lg shadow-lg  dark:bg-gray-700 dark:border-gray-700 py-6 my-10">
        <h2 class="mb-2  mt-2 text-5xl font-bold text-teal-600 dark:text-white">
          Fullstack Software Developer
        </h2>
        <div className=" relative justify-center  mx-auto bg-gradient-to-b from-teal-500 rounded-full lg:w-80 lg:h-80 mt-20 overflow-hidden md:h-96 md:w-96  sm-h-50 sm:w-50 ">
          <Image
            alt="Developer Neeraj at Work"
            src={deved}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <p class="mt-5 mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
          Results-oriented Software Developer with a product-centric mindset.
          Proven ability to solve complex problems, design and develop highly
          efficient and scalable applications, consistently optimize
          performance, and drive measurable growth. Expert in all the major
          Cloud providers like
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
              <div class="mb-1 text-xl">Resume</div>
            </div>
          </a>

          <a
            href="#contactme"
            class="  shadow-lg  w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-teal-500 border-y-cyan-500 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-20 py-4 "
          >
            <div class="min-w-3xl w-100 min-h-fit">
              <div class="mb-1 text-xl">Contact</div>
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
    </div>
  );
}

export default IntroductionCard;
