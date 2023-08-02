import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

import en from "../../public/locales/en/translation.json";
import ru from "../../public/locales/ru/translation.json";

import {LANGUAGES} from "@/models/Languages";

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      ru: {
        translation: ru,
      },
    },
    supportedLngs: [LANGUAGES.EN, LANGUAGES.RU],
    fallbackLng: LANGUAGES.EN,
    detection: {
      order: ["queryString", "cookie"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
