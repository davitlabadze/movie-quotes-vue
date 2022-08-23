import API from "./API";

export default {
  getQuotes() {
    return API().get("quotes");
  },
  deteleQuote(quoteId) {
    return API().delete(`quotes/${quoteId}`);
  },
  getMovies() {
    return API().get("quotes/create");
  },
  createQuote(...args) {
    return API().post("quotes/store", ...args);
  },
};
