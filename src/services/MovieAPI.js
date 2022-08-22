import API from "./API";

export default {
  getMovies() {
    return API().get("movies");
  },
  deleteMovie(movieId) {
    return API().delete(`movies/${movieId}`);
  },
};
