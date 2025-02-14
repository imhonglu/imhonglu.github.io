export const LANGUAGES = {
  ko: "한국어",
  en: "English",
};

export const DEFAULT_LOCALE = "en";

export const UI = {
  ko: {
    title: "imhonglu's blog",
    description: "TypeScript 생태계, 웹 성능 최적화, 그리고 개발 이야기",

    "nav.home": "블로그",
    "nav.about": "소개",
    "sr.social.linkedin": "imhonglu의 링크드인 프로필로 이동하기",
    "sr.social.github": "imhonglu의 깃허브 프로필로 이동하기",

    "languageSelect.accessibleLabel": "언어 선택",

    "themeSelect.accessibleLabel": "테마 선택",
    "themeSelect.dark": "어두운",
    "themeSelect.light": "밝은",
    "themeSelect.auto": "자동",

    "blog.lastUpdatedOn": "마지막 업데이트",
    "blog.tableOfContents": "목차",
    "blog.overview": "개요",
  },
  en: {
    title: "imhonglu's blog",
    description:
      "Writing about TypeScript Ecosystem and Modern Web Development",

    "nav.home": "Blog",
    "nav.about": "About",
    "sr.social.linkedin": "Go to imhonglu's LinkedIn profile",
    "sr.social.github": "Go to imhonglu's GitHub profile",

    "languageSelect.accessibleLabel": "Language Select",

    "themeSelect.accessibleLabel": "Theme Select",
    "themeSelect.dark": "Dark",
    "themeSelect.light": "Light",
    "themeSelect.auto": "Auto",

    "blog.lastUpdatedOn": "Last updated on",
    "blog.tableOfContents": "Table of Contents",
    "blog.overview": "Overview",
  },
} as const;
