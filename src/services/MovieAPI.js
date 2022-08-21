import API from "./API";

export default {
  getMovies() {
    return API().get("movies");
  },
};
