import axios from 'axios';

const API_KEY = 'c18b6e4daa60e3e4af297dba0629174d';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrandingMovies = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  // console.log(response.data);
  return response.data;
};
