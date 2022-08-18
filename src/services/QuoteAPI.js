import axios from "axios";

export default {
  getQuote() {
    return axios.get("get-quote");
  },
  getMovieQuotes(movieId) {
    return axios.get(`get-quotes/${movieId}`);
  },
};
