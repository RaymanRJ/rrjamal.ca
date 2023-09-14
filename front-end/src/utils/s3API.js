import axios from 'axios';

const fetchImageJson = async (jsonPath) => {
  try {
    const response = await axios.get(jsonPath);
    return response.data;
  } catch (error) {
    console.error("Error fetching repositories: ", error);
    return [];
  }
};

export { fetchImageJson };
