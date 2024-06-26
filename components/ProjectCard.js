// ProjectCard.js
import React, { useEffect, useState } from "react";
import Image from "next/image";
import TechnologyTags from "./TechnologyTags";
import ClipLoader from "react-spinners/ClipLoader";

const ProjectCard = ({ project }) => {
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

  const override = {
    margin: "0 auto",

    borderColor: "red",
  };
  return (
    <div className="bg-gray-100 basis-1/3 flex-1 w-96 m-4 p-4 rounded-md shadow-lg">
      <div className="relative">
        {documentstate ? (
          <div className="flex mt-8 items-center justify-center ">
            <ClipLoader
              color={"red"}
              loading={documentstate}
              size={300}
              width={"80%"}
              css={override}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : (
          <Image
            src={project.image}
            alt={project.altText}
            className="rounded-md"
            layout="responsive"
          />
        )}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl bg-gray-900 bg-opacity-75 px-4 py-2 rounded-md hover:bg-opacity-100"
          >
            View Project
          </a>
        </div>
      </div>
      <h2 className="text-2xl text-gray-500 font-medium my-2">
        {project.title}
      </h2>
      <TechnologyTags
        technologies={project.technologies}
        colors1={project.colors1}
        colors2={project.colors2}
      />
      <p className="text-gray-500">{project.description}</p>
    </div>
  );
};

export default ProjectCard;
