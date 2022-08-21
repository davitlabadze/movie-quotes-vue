import API from "./API";

export default {
  login(email, password) {
    return API().post("login", { email, password });
  },
  Logout() {
    return API().post("logout");
  },
};
