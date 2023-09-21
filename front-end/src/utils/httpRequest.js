import axios from 'axios';

const HTTPFetch = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching repositories: ", error);
    return [];
  }
};

export default HTTPFetch;
