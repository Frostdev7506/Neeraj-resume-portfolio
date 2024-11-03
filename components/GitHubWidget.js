import { useEffect, useState } from "react";
import axios from "axios";
import { Octokit } from "octokit";
import { motion, AnimatePresence } from "framer-motion";
import TechnologyTags from "./TechnologyTags";

const GitHubWidget = () => {
  const [repos, setRepos] = useState([]);
  const [filteredRepos, setFilteredRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTech, setSelectedTech] = useState(null);
  const [allTechnologies, setAllTechnologies] = useState(new Set());
  const reposPerPage = 6;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  useEffect(() => {
    axios
      .get("https://api.github.com/users/Frostdev7506/repos")
      .then((response) => {
        setRepos(response.data);
        setFilteredRepos(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const getLanguages = async (repoName) => {
    const octokit = new Octokit({
      auth: "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",
    });

    try {
      const response = await octokit.request(
        "GET /repos/{owner}/{repo}/languages",
        {
          owner: "Frostdev7506",
          repo: repoName,
          headers: {
            "X-GitHub-Api-Version": "2022-11-28",
          },
        }
      );

      return Object.keys(response.data);
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  useEffect(() => {
    const fetchLanguages = async () => {
      const reposWithLanguages = await Promise.all(
        repos.map(async (repo) => {
          const languages = await getLanguages(repo.name);
          // Add languages to the set of all technologies
          languages.forEach(lang => setAllTechnologies(prev => new Set([...prev, lang])));
          return {
            ...repo,
            languages,
          };
        })
      );

      setRepos(reposWithLanguages);
      setFilteredRepos(reposWithLanguages);
    };

    fetchLanguages();
  }, [repos.length]);

  // Filter repos by selected technology
  useEffect(() => {
    if (selectedTech) {
      const filtered = repos.filter(repo => 
        repo.languages && repo.languages.includes(selectedTech)
      );
      setFilteredRepos(filtered);
      setCurrentPage(1);
    } else {
      setFilteredRepos(repos);
    }
  }, [selectedTech, repos]);

  // Pagination calculations
  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = filteredRepos.slice(indexOfFirstRepo, indexOfLastRepo);
  const totalPages = Math.ceil(filteredRepos.length / reposPerPage);

  const handleTechClick = (tech) => {
    setSelectedTech(tech === selectedTech ? null : tech);
  };

  return (
    <div className="overflow-hidden">
      <section className="relative">
        <div className="py-16 px-4 dark:bg-gray-800 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16 relative z-10"
            >
              <h2 className="text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 text-transparent bg-clip-text">
                  Github Repositories
                </span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </motion.div>

            {/* Technology Filter Tags */}
            <div className="mb-8 relative z-10">
              {/* <p className="text-gray-600 dark:text-gray-300 mb-3 text-center">Filter by technology:</p>s */}
              <div className="flex flex-wrap justify-center gap-2">
                {[...allTechnologies].map((tech) => (
                  <button
                    key={tech}
                    onClick={() => handleTechClick(tech)}
                    className={`px-3 py-1 rounded text-sm font-medium transition-all duration-200 ${
                      selectedTech === tech
                        ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-lg scale-105'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:scale-105'
                    }`}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage + (selectedTech || 'all')}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10"
              >
                {currentRepos.map((repo) => (
                  <motion.div
                    key={repo.id}
                    variants={cardVariants}
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                    className="relative group"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
                    <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                      <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-teal-500 to-blue-500 text-transparent bg-clip-text">
                        {repo.name}
                      </h3>
                      
                      <div className="mb-4">
                        {repo.description ? (
                          <p className="text-gray-600 dark:text-gray-300">{repo.description}</p>
                        ) : (
                          <p className="text-gray-600 dark:text-gray-300">
                            Click on{" "}
                            <a
                              href={repo.html_url}
                              className="text-blue-500 hover:text-blue-600 hover:underline"
                            >
                              View on GitHub
                            </a>{" "}
                            button to view the repository on GitHub for {repo.name}
                          </p>
                        )}
                      </div>

                      <div className="mb-4">
                        {repo.languages && repo.languages.length > 0 ? (
                          <TechnologyTags
                            technologies={repo.languages}
                            colors1={Array(repo.languages.length).fill("cyan")}
                            colors2={Array(repo.languages.length).fill("teal")}
                          />
                        ) : (
                          <TechnologyTags
                            technologies={["GitHub"]}
                            colors1={["cyan"]}
                            colors2={["teal"]}
                          />
                        )}
                      </div>

                      <a
                        href={repo.html_url}
                        className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 text-white font-medium transition-transform hover:scale-105 hover:shadow-lg"
                      >
                        View on GitHub
                      </a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-2 mt-8">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === 1
                      ? 'bg-gray-300 cursor-not-allowed'
                      : 'bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:shadow-lg transition-shadow'
                  }`}
                >
                  Previous
                </button>
                <div className="flex gap-2">
                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index + 1}
                      onClick={() => setCurrentPage(index + 1)}
                      className={`w-10 h-10 rounded-lg transition-all duration-200 ${
                        currentPage === index + 1
                          ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-lg scale-105'
                          : 'bg-gray-200 dark:bg-gray-700 hover:scale-105'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === totalPages
                      ? 'bg-gray-300 cursor-not-allowed'
                      : 'bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:shadow-lg transition-shadow'
                  }`}
                >
                  Next
                </button>
              </div>
            )}
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
};

export default GitHubWidget;