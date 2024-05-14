import React from "react";

import aspiration from "../public/FloatingInspiration.svg";
import Image from "next/image";

function AspirationComponent() {
  return (
    <div>
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
                  MERN Stack which includes technologies like JavaScript, React,
                  Node.js, and other web technologies.I have also deployed
                  Applications on major cloud providers like AWS, Azure,and
                  Google Cloud.
                </p>
                <p className="text-2xl py-5  max-w-6xl mx-auto text-gray-500 lg:text-2xl lg:mx-4 ">
                  I am a developer with 2+ years of expertise in designing and
                  building scalable, high-performance web applications. A
                  dedicated team player with a product-centric mindset, adept at
                  solving complex problems, optimizing application performance,
                  and driving measurable growth. Committed to delivering robust
                  solutions that enhance user experience and contribute to
                  overall product success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AspirationComponent;
