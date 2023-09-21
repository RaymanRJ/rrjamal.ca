import HTTPFetch from './httpRequest';

const fetchUserRepositories = async (username) => {
  const url = `https://api.github.com/users/${username}/repos`;
  return await HTTPFetch(url);
}

export { fetchUserRepositories };
