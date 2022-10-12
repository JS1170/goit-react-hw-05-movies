import axios from 'axios';

const KEY = '4c8000e8e5b59479d2ed378f7bf47c9a';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const trendingApi = () => {
  return axios.get(`trending/movie/week?api_key=${KEY}`);
};

export const aboutFilmInfo = movie_id => {
  return axios.get(`movie/${movie_id}?api_key=${KEY}`);
};

export const castInfoApi = movie_id => {
  return axios.get(`movie/${movie_id}/credits?api_key=${KEY}`);
};

export const reviewsInfoApi = movie_id => {
  return axios.get(`movie/${movie_id}/reviews?api_key=${KEY}`);
};

export const searchMovieApi = query => {
  return axios.get(`search/movie?api_key=${KEY}&query=${query}`);
};


