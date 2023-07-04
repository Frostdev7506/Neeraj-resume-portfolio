import React from "react";

const TechnologyTags = ({ technologies, colors1, colors2 }) => {
  return (
    <div className="flex justify-start mt-4 pt-2 pb-2 space-x-2">
      {technologies.map((technology, index) => (
        <span
          key={index}
          className={`bg-gradient-to-r from-${colors1[index]}-500 to-${colors2[index]}-500 border-y-${colors1[index]}-500 px-2 py-1 rounded-md text-sm`}
        >
          {technology}
        </span>
      ))}
    </div>
  );
};

export default TechnologyTags;
