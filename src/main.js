import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import i18n from "./plugins/i18n";
import "./index.css";
import axios from "axios";
axios.defaults.baseURL = import.meta.env.VITE_APP_ENV_BACKEND_API;
const app = createApp(App);

app.use(router);
app.use(i18n);
app.mount("#app");
