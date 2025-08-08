import axios from "axios";

const BASE_URL = "https://api.github.com/search/users?q";

/**
 * Fetch users with advanced search criteria.
 * @param {string} username - GitHub username to search for.
 * @param {string} location - Location to filter by.
 * @param {number} minRepos - Minimum public repositories count.
 */
export const fetchUserData = async (username, location, minRepos) => {
  try {
    let query = `${username ? username : ""}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;

    const response = await axios.get(`${BASE_URL}=${query}`);
    return response.data.items; // API returns an 'items' array
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
