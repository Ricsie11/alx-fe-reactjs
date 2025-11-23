import axios from "axios";

const BASE_URL = "https://api.github.com/users/";

export async function fetchUserData(username) {
  try {
    const response = await axios.get(BASE_URL + username, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
      }
    });
    return { data: response.data, error: null };
  } catch (error) {
    console.log(" Looks like we cant find the user:", error);
    return { data: null, error: "User not found" };
  }
}