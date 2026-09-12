import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { translations } from "./translations";

export type Language = "en" | "vi";
export type TranslationKey = Extract<keyof typeof translations.en, string>;

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translations.en },
    vi: { translation: translations.vi },
  },
  lng: window.localStorage.getItem("carepath-language") === "vi" ? "vi" : "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
