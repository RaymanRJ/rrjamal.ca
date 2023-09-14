import axios from 'axios';

const fetchUserRepositories = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}/repos`);
    return response.data;
  } catch (error) {
    console.error("Error fetching repositories: ", error);
    return [];
  }
};

export { fetchUserRepositories };
