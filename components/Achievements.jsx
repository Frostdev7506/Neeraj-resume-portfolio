import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaAws,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaDatabase,
  FaChartLine,
  FaUsers,
  FaRocket
} from "react-icons/fa";

const achievements = [
  {
    title: "Microservices Architecture",
    description: "Designed and implemented 15+ microservices using Node.js and Express.js, reducing system coupling by 60% and improving deployment frequency by 300%. Utilized Docker containerization and Kubernetes orchestration for scalable cloud-native applications.",
    metrics: "15+ Services • 60% Reduced Coupling • 300% Faster Deployments",
    gradient: "from-blue-600 to-purple-600",
    icon: FaDocker,
    keywords: ["Microservices", "Node.js", "Docker", "Kubernetes", "Express.js"]
  },
  {
    title: "AWS Cloud Solutions",
    description: "Architected and deployed scalable applications on AWS using EC2, Lambda, RDS, S3, and CloudFormation. Implemented CI/CD pipelines with AWS CodePipeline, reducing deployment time by 70% and achieving 99.9% uptime.",
    metrics: "99.9% Uptime • 70% Faster Deployments • $50K Cost Savings",
    gradient: "from-orange-500 to-red-500",
    icon: FaAws,
    keywords: ["AWS", "Lambda", "EC2", "RDS", "S3", "CloudFormation", "CI/CD"]
  },
  {
    title: "Full-Stack Development",
    description: "Built 20+ production-ready MERN stack applications serving 100K+ users. Optimized React applications achieving 95+ Lighthouse scores and implemented MongoDB aggregation pipelines improving query performance by 80%.",
    metrics: "20+ Applications • 100K+ Users • 95+ Lighthouse Score",
    gradient: "from-teal-500 to-green-500",
    icon: FaReact,
    keywords: ["MERN Stack", "React", "MongoDB", "Express.js", "Performance Optimization"]
  },
  {
    title: "API Development & Integration",
    description: "Developed 50+ RESTful APIs and GraphQL endpoints with comprehensive documentation. Implemented JWT authentication, rate limiting, and API versioning. Integrated 15+ third-party services including payment gateways and analytics platforms.",
    metrics: "50+ APIs • 15+ Integrations • 99.5% API Reliability",
    gradient: "from-purple-500 to-pink-500",
    icon: FaDatabase,
    keywords: ["REST API", "GraphQL", "JWT", "API Integration", "Authentication"]
  },
  {
    title: "Performance Optimization",
    description: "Optimized application performance through code splitting, lazy loading, and database indexing. Reduced page load times by 65% and improved Core Web Vitals scores. Implemented Redis caching reducing database queries by 40%.",
    metrics: "65% Faster Load Times • 40% Reduced DB Queries",
    gradient: "from-indigo-500 to-blue-500",
    icon: FaChartLine,
    keywords: ["Performance Optimization", "Redis", "Caching", "Code Splitting", "Database Indexing"]
  },
  {
    title: "Team Leadership & Mentoring",
    description: "Led cross-functional teams of 8+ developers in agile environments. Mentored 12+ junior developers and conducted 100+ code reviews. Established coding standards and best practices, improving code quality by 45%.",
    metrics: "8+ Team Members • 12+ Mentees • 45% Better Code Quality",
    gradient: "from-green-500 to-teal-500",
    icon: FaUsers,
    keywords: ["Team Leadership", "Mentoring", "Agile", "Code Review", "Best Practices"]
  },
  {
    title: "DevOps & Automation",
    description: "Implemented comprehensive DevOps practices including automated testing, deployment pipelines, and infrastructure as code. Achieved 95% test coverage and reduced manual deployment efforts by 90% using GitHub Actions and Terraform.",
    metrics: "95% Test Coverage • 90% Automation • Zero-Downtime Deployments",
    gradient: "from-cyan-500 to-blue-500",
    icon: FaRocket,
    keywords: ["DevOps", "Automation", "GitHub Actions", "Terraform", "Testing", "Infrastructure as Code"]
  },
  {
    title: "Database Design & Optimization",
    description: "Designed scalable database schemas for MongoDB and PostgreSQL handling 1M+ records. Implemented database sharding, replication, and backup strategies. Optimized complex queries reducing execution time by 75%.",
    metrics: "1M+ Records • 75% Query Optimization • 99.99% Data Integrity",
    gradient: "from-emerald-500 to-teal-500",
    icon: FaNodeJs,
    keywords: ["Database Design", "MongoDB", "PostgreSQL", "Sharding", "Query Optimization"]
  }
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
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="group bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl border border-slate-200/50 dark:border-slate-700/50 p-6 transition-all duration-300 hover:scale-[1.02]"
    >
      {/* Header with Icon and Title */}
      <div className="flex items-start gap-4 mb-4">
        <div className={`p-3 bg-gradient-to-r ${achievement.gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <achievement.icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
            {achievement.title}
          </h3>
          <div className="flex flex-wrap gap-1 mb-3">
            {achievement.keywords.slice(0, 3).map((keyword, idx) => (
              <span key={idx} className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-xs font-medium text-slate-600 dark:text-slate-300 rounded-md">
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="mb-4 p-3 bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-700 dark:to-slate-600 rounded-lg">
        <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
          📊 {achievement.metrics}
        </p>
      </div>

      {/* Description */}
      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">
        {achievement.description}
      </p>

      {/* Keywords for ATS */}
      <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-700">
        <div className="flex flex-wrap gap-1">
          {achievement.keywords.map((keyword, idx) => (
            <span key={idx} className="text-xs text-slate-500 dark:text-slate-400 opacity-70">
              {keyword}{idx < achievement.keywords.length - 1 ? " •" : ""}
            </span>
          ))}
        </div>
      </div>

      {isLast && <div className="h-32" />}
    </motion.div>
  );
};

function Achievements() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* Simplified background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-blue-50/30 dark:from-slate-800/30 dark:to-slate-700/30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Modern Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
            <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">🏆 Professional Achievements</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Accomplishments</span>
          </h2>

          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            4+ years of delivering scalable solutions with measurable impact
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 relative">
          {/* Enhanced Sticky Visualization */}
          <div className="hidden lg:block lg:w-1/2">
            <div className="sticky top-24">
              <div className="relative h-[500px] w-full">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{
                      opacity: activeIndex === index ? 1 : 0,
                      scale: activeIndex === index ? 1 : 0.9,
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className={`absolute inset-0 ${activeIndex === index ? "pointer-events-auto" : "pointer-events-none"}`}
                  >
                    <div className={`h-full w-full bg-gradient-to-br ${achievement.gradient} rounded-2xl shadow-2xl flex flex-col items-center justify-center p-8 text-center relative overflow-hidden`}>
                      {/* Background pattern */}
                      <div className="absolute inset-0 bg-white/10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>

                      {/* Content */}
                      <div className="relative z-10">
                        <div className="p-4 bg-white/20 rounded-2xl mb-6 backdrop-blur-sm">
                          <achievement.icon className="w-16 h-16 text-white mx-auto" />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">
                          {achievement.title}
                        </h3>
                        <div className="px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">
                          <p className="text-white/90 font-medium">
                            {achievement.metrics}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Optimized Cards Grid */}
          <div className="lg:w-1/2 space-y-6">
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

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Years Experience", value: "4+" },
            { label: "Projects Delivered", value: "50+" },
            { label: "Team Members Led", value: "15+" },
            { label: "Technologies Mastered", value: "25+" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 bg-white/80 dark:bg-slate-800/80 rounded-xl border border-slate-200/50 dark:border-slate-700/50">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Achievements;
