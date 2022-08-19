import axios from "axios";
const token = localStorage.getItem("token");
export default () => {
  return axios.create({
    baseURL: import.meta.env.VITE_APP_ENV_BACKEND_API,
    // timeout: 1000,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "X-Requested-With": "XMLHttpRequest",
      Authorization: "Bearer " + token,
    },
  });
};
