const API_URL = "https://api.themoviedb.org/3";

const fetchMovie = async (pathname, query = "") => {
  try {
    const res = await fetch(
      `${API_URL}${pathname}?api_key=${process.env.API_KEY}&${query}`
    );
    return res.json();
  } catch (err) {
    throw new Error(err);
  }
};

const getSingleCategory = async (genreId) => {
  return fetchMovie("/discover/movie", `with_genres=${genreId}`);
};

const getCategories = async () => {
  return fetchMovie("/genre/movie/list", " &page=1");
};

const getTopRatedMovies = async () => {
  return fetchMovie("/movie/top_rated", " &page=1");
};

const getPopulardMovies = async () => {
  return fetchMovie("/movie/popular", " &page=1");
};

const getMovie = async (movieId) => {
  return fetchMovie(`/movie/${movieId}`);
};

export {
  getMovie,
  fetchMovie,
  getCategories,
  getSingleCategory,
  getTopRatedMovies,
  getPopulardMovies,
};
