import axios from "axios";

const BASE_URL = "https://api.github.com/users/{username}";

export async function fetchUserData(username) {
  try {
    const response = await axios.get(BASE_URL + username, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
      }
    });
    return response.data;
  } catch (error) {
    console.log(" Looks like we cant find the user:", error);
    return null;
  }
}