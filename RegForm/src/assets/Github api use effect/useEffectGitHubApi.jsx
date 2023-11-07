import { useEffect, useState } from "react";

const GitHubRepoDisplay = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState("");
  const [gitHubData, setGitHubData] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${user}/repos`)
      .then((data) => data.json())
      .then((data) => {
        setIsLoading(false);
        setGitHubData(data);
        // console.log(gitHubData);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [user]);
  console.log(gitHubData);
  return (
    <div>
      <input
        type="text"
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "16px",
          backgroundColor: "#e9e9e9",
        }}
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
    </div>
  );
};

export default GitHubRepoDisplay;
