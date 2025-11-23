import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  async function handleSearch() {
    if (!username) return;

    setLoading(true);
    setErrorMsg("");
    setUserData(null);

    const result = await fetchUserData(username, location, minRepos);

    if (result.error) {
      setErrorMsg("Looks like we cant find the user");
    } else {
      setUserData(result.data);
    }

    setLoading(false);
  }

  return (
    <>
      <div className="max-w-3xl mx-auto p-6">
        <h2 className="text-2xl font-bold text-center mb-6">
          Github User Search
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
          className="bg-gray-100 p-6 rounded-lg shadow space-y-4"
        >
          <input
            type="text"
            placeholder="Enter username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ padding: "8px", marginRight: "10px" }}
          />

          <input
            type="text"
            placeholder="Enter location..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="number"
            placeholder="Minimum repositories..."
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            onClick={handleSearch}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Search
          </button>

          {loading && <p>Loading...</p>}

          {!loading && errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}

          {!loading && userData && (
            <div style={{ marginTop: "20px" }}>
              <h3>{userData.login}</h3>
              <img
                src={userData.avatar_url}
                width="100"
                height="100"
                alt="avatar"
              />
              <p>{userData.bio}</p>
              <a
                href={userData.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View profile on Github
              </a>
            </div>
          )}
        </form>
      </div>
    </>
  );
}

export default Search;
