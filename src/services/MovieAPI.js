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
  getEditMovie(movieId) {
    return API().get(`movies/${movieId}/edit`);
  },
  updateMovie(movieId, movie_en, movie_ka) {
    return API().put(`movies/${movieId}/update`, { movie_en, movie_ka });
  },
};
