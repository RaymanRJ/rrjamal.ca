import HTTPFetch from './httpRequest';

const fetchImageJson = async (jsonPath) => {
  return await HTTPFetch(jsonPath);
}


export { fetchImageJson };
