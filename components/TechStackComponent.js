import React from "react";
import techStackData from "../HelperFunctions/techStackData";
import TechStackCards from "./TechStackCards";

function TechStackComponent() {
  return (
    <div>
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
    </div>
  );
}

export default TechStackComponent;
