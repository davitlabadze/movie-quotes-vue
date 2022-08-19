import axios from "axios";

export default () => {
  return axios.create({
    baseURL: import.meta.env.VITE_APP_ENV_BACKEND_API,
  });
};
