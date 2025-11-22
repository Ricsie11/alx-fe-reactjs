import { useState } from "react";
import { fetchUserData } from "../services/githubApi";

function SearchUser() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSearch() {
    if (!username) return;

    setLoading(true);
    const user = await fetchUserData(username);
    setUserData(user);
    setLoading(false);
  }
  return (
    <>
      <div style={{ padding: "20px" }}>
        <h2>Github User Search</h2>

        <input
          type="text"
          placeholder="Enter your username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: "8px", marginRight: "10px" }}
        />

        <button onClick={handleSearch} style={{ padding: "8px" }}>
          search
        </button>

        {loading && <p>Loading...</p>}

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
            <a href={userData.html_url} target="_blank">
              View profile on Github
            </a>
          </div>
        )}
      </div>
    </>
  );
}

export default SearchUser;
