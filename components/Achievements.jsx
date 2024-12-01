import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const achievements = [
  {
    title: "Collaborative Coding",
    description:
      "Streamline your development workflow with real-time collaboration on code. Work seamlessly with your team on projects, share code snippets, and review changes together. Boost productivity and code quality with integrated version control and collaborative debugging tools.",
    gradient: "from-cyan-500/70 to-emerald-500/70",
    icon: "🤝",
  },
  {
    title: "Problem Solver",
    description:
      "Passionate MERN stack developer with 3 years of experience crafting engaging and impactful web experiences. A dedicated problem-solver with a knack for transforming complex requirements into elegant, functional solutions.",
    gradient: "from-purple-500/70 to-blue-500/70",
    icon: "💡",
  },
  {
    title: "REST API",
    description:
      "Results-oriented MERN stack developer with 3 years of experience designing, building, and integrating RESTful APIs. Proficient in API security best practices, authentication, and authorization. Adept at connecting front-end applications with back-end services seamlessly and efficiently.",
    gradient: "from-orange-500/70 to-yellow-500/70",
    icon: "🔌",
  },
  {
    title: "Avid Code tester",
    description:
      "MERN stack developer with 3 years of experience and a strong focus on ensuring code quality and application reliability through comprehensive testing. Proficient in unit testing, integration testing, and end-to-end testing frameworks. Dedicated to delivering robust and bug-free web applications.",
    gradient: "from-green-500/70 to-teal-500/70",
    icon: "✅",
  },
];

const AchievementCard = ({ achievement, index, setActiveIndex, isLast }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });

  useEffect(() => {
    if (isInView) {
      setActiveIndex(index);
    }
  }, [isInView, index, setActiveIndex]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
    >
      <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-teal-500 to-blue-500 text-transparent bg-clip-text">
        {achievement.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">
        {achievement.description}
      </p>
      {isLast && <div className="h-screen/2" />} {/* Spacer for last item */}
    </motion.div>
  );
};

function Achievements() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative">
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

          <div className="flex flex-col lg:flex-row gap-8 relative">
            {/* Sticky side - hidden on mobile */}
            <div className="hidden lg:block lg:w-1/2">
              <div className="sticky top-24">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: activeIndex === index ? 1 : 0,
                      scale: activeIndex === index ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.4 }}
                    className={`absolute inset-0 ${
                      activeIndex === index ? "pointer-events-auto" : "pointer-events-none"
                    }`}
                  >
                    <div
                      className={`h-[400px] w-full bg-gradient-to-br ${achievement.gradient} rounded-xl shadow-lg flex flex-col items-center justify-center p-8 text-center`}
                    >
                      <span className="text-6xl mb-6">{achievement.icon}</span>
                      <span className="text-3xl font-bold text-white text-center drop-shadow-lg">
                        {achievement.title}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Scrollable content */}
            <div className="lg:w-1/2 space-y-8">
              {achievements.map((achievement, index) => (
                <AchievementCard
                  key={index}
                  achievement={achievement}
                  index={index}
                  setActiveIndex={setActiveIndex}
                  isLast={index === achievements.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-teal-300 dark:bg-teal-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-40 w-80 h-80 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-40 w-80 h-80 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
    </div>
  );
}

export default Achievements;
