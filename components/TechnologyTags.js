import React from "react";

const TechnologyTags = ({ technologies, colors1, colors2 }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((technology, index) => (
        <span
          key={index}
          className={`inline-flex px-3 py-2 text-sm font-medium text-white bg-gradient-to-r from-${colors1[index]}-500 to-${colors2[index]}-500 rounded-3xl`}
        >
          {technology}
        </span>
      ))}
    </div>
  );
};

export default TechnologyTags;