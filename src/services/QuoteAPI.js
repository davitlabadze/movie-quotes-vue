import API from "./API";

export default {
  getQuotes() {
    return API().get("quotes");
  },
};
