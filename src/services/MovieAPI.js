import API from "./API";

export default {
  getMovies() {
    return API().get("movies");
  },
  deleteMovie(movieId) {
    return API().delete(`movies/${movieId}`);
  },
  createMovie(movie_en, movie_ka) {
    return API().post("movies/create", { movie_en, movie_ka });
  },
};
