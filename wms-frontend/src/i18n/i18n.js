import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Engilsh translations
import enTranslations from "./en.json";
// Bangla translations
import bnTranslations from "./bn.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslations,
    },
    bn: {
      translation: bnTranslations,
    },
  },
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language if translation is missing
  interpolation: {
    escapeValue: false, // React already does escaping
  },
});

export default i18n;
