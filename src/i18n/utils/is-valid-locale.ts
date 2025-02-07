import { UI } from "../consts";

export function isValidLocale(lang: string): lang is keyof typeof UI {
  return lang in UI;
}
