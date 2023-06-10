import { useEffect, useState } from "react";
import axios from "axios";

const GitHubWidget = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    // Fetch public repositories from GitHub API
    axios
      .get("https://api.github.com/users/Frostdev7506/repos")
      .then((response) => {
        setRepos(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl text-gray-500 font-bold text-center mt-8">
        Github Public Repositories
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="bg-white text-gray-500 dark:bg-gray-800 p-4 rounded-lg shadow"
          >
            <h2 className="text-lg font-bold">{repo.name}</h2>
            <p>{repo.description}</p>
            <a href={repo.html_url} className="text-blue-500 hover:underline">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GitHubWidget;
