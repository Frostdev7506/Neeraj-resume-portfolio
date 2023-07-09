import React from "react";

const TechnologyTags = ({ technologies, colors1, colors2 }) => {
  // technologies.map((technology, index) => console.log(colors1));
  return (
    <div className="flex flex-wrap m-2 justify-start mt-4 pt-2 pb-2 space-x-2">
      {technologies.map((technology, index) => (
        <span
          key={index}
          className={`bg-gradient-to-r from-${colors1[index]}-500 to-${colors2[index]}-500 border-y-${colors1[index]}-500 px-2 py-1  rounded-md text-sm text-white`}
          style={{ marginTop: 2 }}
        >
          {technology}
        </span>
      ))}
    </div>
  );
};

export default TechnologyTags;
