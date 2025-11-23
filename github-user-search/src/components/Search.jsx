import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSearch() {
    if (!username) return;

    setLoading(true);
    setErrorMsg("");
    setUserData(null);

    const result = await fetchUserData(username);

    if (result.error) {
      setErrorMsg("Looks like we cant find the user");
    } else {
      setUserData(result.data);
    }

    setLoading(false);
  }

  return (
    <>
      <div style={{ padding: "20px" }}>
        <h2>Github User Search</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <input
            type="text"
            placeholder="Enter username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ padding: "8px", marginRight: "10px" }}
          />

          <button onClick={handleSearch} style={{ padding: "8px" }}>
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
