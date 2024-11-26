import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Collaborative Coding",
    description:
      "Streamline your development workflow with real-time collaboration on code. Work seamlessly with your team on projects, share code snippets, and review changes together.  Boost productivity and code quality with integrated version control and collaborative debugging tools.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-cyan-500/70 to-emerald-500/70 flex items-center justify-center text-white rounded-xl shadow-lg">
        <span className="text-2xl font-bold drop-shadow-lg">
          Collaborative Coding
        </span>
      </div>
    ),
  },
  {
    title: "Problem Solver",
    description:
      "Passionate MERN stack developer with 3 years of experience crafting engaging and impactful web experiences. A dedicated problem-solver with a knack for transforming complex requirements into elegant, functional solutions.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-cyan-500/70 to-emerald-500/70 flex items-center justify-center text-white rounded-xl shadow-lg">
        <span className="text-2xl font-bold drop-shadow-lg">
          Problem Solver
        </span>
      </div>
    ),
  },
  {
    title: "REST API",
    description:
      "Results-oriented MERN stack developer with 3 years of experience designing, building, and integrating RESTful APIs. Proficient in API security best practices, authentication, and authorization. Adept at connecting front-end applications with back-end services seamlessly and efficiently.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-orange-500/70 to-yellow-500/70 flex items-center justify-center text-white rounded-xl shadow-lg">
        <span className="text-2xl font-bold drop-shadow-lg">Rest API</span>
      </div>
    ),
  },
  {
    title: "Avid Code tester",
    description:
      "MERN stack developer with 3 years of experience and a strong focus on ensuring code quality and application reliability through comprehensive testing. Proficient in unit testing, integration testing, and end-to-end testing frameworks. Dedicated to delivering robust and bug-free web applications.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-cyan-500/70 to-emerald-500/70 flex items-center justify-center text-white rounded-xl shadow-lg">
        <span className="text-2xl font-bold drop-shadow-lg">
          Avid Code tester
        </span>
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="p-10 w-full scrollbar-hide">
      <StickyScroll
        content={content}
        contentClassName="scrollbar-hide"
        className="scrollbar-hide"
      />
    </div>
  );
}

function Achievements() {
  return (
    <div className="overflow-hidden">
      <section className="relative w-full overflow-hidden">
        <div className="py-16 dark:bg-gray-800 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16 relative z-10"
            >
              <h2 className="text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 text-transparent bg-clip-text">
                  Achievements
                </span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </motion.div>
            <StickyScrollRevealDemo />
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-teal-300 dark:bg-teal-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-40 w-80 h-80 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-40 left-40 w-80 h-80 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>
      </section>
    </div>
  );
}

export default Achievements;
