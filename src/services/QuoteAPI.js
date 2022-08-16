import axios from "axios";

export default {
  getQuote() {
    return axios.get("get-quote");
  },
};
