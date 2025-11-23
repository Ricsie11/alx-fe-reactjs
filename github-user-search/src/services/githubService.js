import axios from "axios";

const BASE_URL = "https://api.github.com/search/users?q=";

export async function fetchUserData(username, location, minRepos) {
  try {
    let query = "";

    if (username) query += username;
    if (location) query += `location:${location}`;
    if (minRepos) query += `repos:>${minRepos}`;

    const response = await axios.get(BASE_URL + username, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
      },
    });
    return { data: response.data.items[0], error: null };
  } catch (error) {
    console.log(" Looks like we cant find the user:", error);
    return { data: null, error: "User not found" };
  }
}
