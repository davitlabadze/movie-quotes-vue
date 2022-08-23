import API from "./API";

export default {
  getData() {
    return API().get("dashboard");
  },
};
