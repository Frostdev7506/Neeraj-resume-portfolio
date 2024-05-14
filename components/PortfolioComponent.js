import React from "react";
import ProjectCard from "@/components/ProjectCard";

import projects from "@/HelperFunctions/PortfolioProjectsData";

function PortfolioComponent() {
  return (
    <div>
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
    </div>
  );
}

export default PortfolioComponent;
