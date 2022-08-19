import API from "./API";

export default {
  Authorization(email, password) {
    return API().post("login", { email, password });
  },
};
