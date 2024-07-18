import React from "react";
import aspiration from "../public/FloatingInspiration.svg";
import Image from "next/image";

function AspirationComponent() {
  return (
    <section>
      <div className="flex justify-center h-max mt-5 lg:mx-auto md:mx-auto sm:mx-auto">
        <div
          className="bg-white border border-gray-200 rounded-lg shadow-lg 
          hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-700 dark:hover:bg-gray-700 lg:h-screen 
          max-w-full  md:h-full overflow-hidden"
        >
          <div className="flex flex-col md:flex-row min-h-full h-full">
            <Image
              className="object-cover w-full md:w-1/2 h-max"
              src={aspiration}
              alt="My Aspirations"
            />
            <div className="flex flex-col w-full p-4 overflow-auto">
              <h3 className="text-3xl md:text-5xl py-1 text-center text-gray-500 hover:text-teal-600 mt-4">
                My aspirations
              </h3>
              <ul className="list-disc list-inside text-gray-500 space-y-5 mt-10">
                <li className="text-lg md:text-2xl text-gray-500">
                  Work in a fast-paced environment with effective team.
                </li>
                <li className="text-lg md:text-2xl text-gray-500">
                  Dabble with the latest state-of-the-art technologies that push
                  the envelope in achieving breakthroughs.
                </li>
                <li className="text-lg md:text-2xl text-gray-500">
                  Build scalable web applications using the MERN stack.
                </li>
                <li className="text-lg md:text-2xl text-gray-500">
                  Develop and deploy cloud-native solutions for enhanced
                  performance and reliability.
                </li>
                <li className="text-lg md:text-2xl text-gray-500">
                  Integrate machine learning models to create intelligent and
                  responsive applications.
                </li>
                <li className="text-lg md:text-2xl text-gray-500">
                  Continuously improve and optimize application performance and
                  user experience.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AspirationComponent;
