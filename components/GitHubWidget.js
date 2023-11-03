import { useEffect, useState } from "react";
import axios from "axios";
import { Octokit } from "octokit";
import TechnologyTags from "./TechnologyTags";

const defaultTechnology = "GitHub";
const GitHubWidget = () => {
  const [repos, setRepos] = useState([]);
  const [numToShow, setNumToShow] = useState(6);

  const handleShowMore = () => {
    setNumToShow(numToShow + 20);
  };

  useEffect(() => {
    // Fetch public repositories from GitHub API
    axios
      .get("https://api.github.com/users/Frostdev7506/repos")
      .then((response) => {
        console.log(response.data);
        setRepos(response.data);
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
    // Fetch languages for each repository
    const fetchLanguages = async () => {
      const reposWithLanguages = await Promise.all(
        repos.map(async (repo) => {
          const languages = await getLanguages(repo.name);
          return {
            ...repo,
            languages,
          };
        })
      );

      setRepos(reposWithLanguages);
    };

    fetchLanguages();
  }, [repos]);

  return (
    <div className="container mt-5 mx-auto">
      <h1 className="text-4xl text-gray-500  my-2 lg:py-5 sm:py-2 md:py-2  mt-8 text-center">
        Github Repositories
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {repos.slice(0, numToShow).map((repo) => (
          <div
            key={repo.id}
            className="bg-gray-100 text-black   p-5 rounded-lg shadow-xl dark:bg-gray-700 "
          >
            <h2 className="text-2xl font-bold">{repo.name}</h2>

            <div>
              {repo.description ? (
                <p className="m-1">{repo.description}</p>
              ) : (
                <p className="m-1">
                  Click on{" "}
                  <a
                    href={repo.html_url}
                    className="text-blue-500  hover:underline"
                  >
                    View on GitHub
                  </a>{" "}
                  button to view the repository on GitHub for {repo.name}
                </p>
              )}
            </div>
            <div className=" p-2 flex-wrap ">
              {repo.languages && repo.languages.length > 0 ? (
                <div className="mt-2 ">
                  <TechnologyTags
                    technologies={repo.languages}
                    colors1={Array(repo.languages.length).fill("cyan")}
                    colors2={Array(repo.languages.length).fill("teal")}
                  />
                </div>
              ) : (
                <div className="mt-2">
                  <TechnologyTags
                    technologies={["GitHub"]}
                    colors1={["cyan"]}
                    colors2={["teal"]}
                  />
                </div>
              )}
            </div>

            <div>
              <button class="bg-transparent  text-teal-700 font-semibold hover:text-white py-2 px-2 m-1 border border-teal-500 hover:border-transparent rounded">
                <a
                  href={repo.html_url}
                  className="text-teal-500 m-2 hover:underline"
                >
                  View on GitHub
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="flex items-center justify-center ">
        {numToShow < repos.length && (
          <button
            className="bg-gradient-to-r justify-center from-cyan-500 to-teal-500 border-y-cyan-500   text-white px-4 py-2 rounded-md mt-3"
            onClick={handleShowMore}
          >
            Show More
          </button>
        )}
      </div> */}
    </div>
  );
};

export default GitHubWidget;
