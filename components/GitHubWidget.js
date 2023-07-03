import { useEffect, useState } from "react";
import axios from "axios";

const GitHubWidget = () => {
  const [repos, setRepos] = useState([]);

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

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-gray-500 font-bold text-center mt-8">
        Github Repositories
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="bg-white text-gray-500 dark:bg-gray-800 p-4 rounded-lg shadow"
          >
            <h2 className="text-2xl font-bold">{repo.name}</h2>

            <div>
              {repo.description ? (
                <p className="m-4">{repo.description}</p>
              ) : (
                <p className="m-4">
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

            <div>
              <a
                href={repo.html_url}
                className="text-blue-500 m-2 hover:underline"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GitHubWidget;
