import { createI18n } from "vue-i18n";
import en from "../locales/en.json";
import ka from "../locales/ka.json";

const i18n = createI18n({
  locale: localStorage.getItem("lang") || "en",
  fallbackLocale: "en",
  enableInSFC: false,
  messages: { en, ka },
});

export default i18n;
