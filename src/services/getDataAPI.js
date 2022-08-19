import API from "./API";

export default {
  getQuote() {
    return API().get("get-quote");
  },
  getMovieQuotes(movieId) {
    return API().get(`get-quotes/${movieId}`);
  },
};
