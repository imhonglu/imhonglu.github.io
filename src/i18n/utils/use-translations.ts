import { DEFAULT_LOCALE, UI } from "../consts";
import { isValidLocale } from "./is-valid-locale";

export function useTranslations(locale?: string) {
  const t = (key: keyof (typeof UI)[typeof DEFAULT_LOCALE]) => {
    if (!locale || !isValidLocale(locale)) {
      return UI[DEFAULT_LOCALE][key];
    }

    return UI[locale][key];
  };

  return t;
}
