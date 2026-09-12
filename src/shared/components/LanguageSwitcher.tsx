import { useTranslation } from "react-i18next";
import type { Language } from "../../i18n";

export function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const language: Language = i18n.language === "vi" ? "vi" : "en";

  const changeLanguage = (nextLanguage: Language) => {
    window.localStorage.setItem("carepath-language", nextLanguage);
    void i18n.changeLanguage(nextLanguage);
  };

  return (
    <label className="language-switcher">
      <span>{t("language")}</span>
      <select
        aria-label={t("language")}
        value={language}
        onChange={(event) => changeLanguage(event.target.value as Language)}>
        <option value="en">{t("english")}</option>
        <option value="vi">{t("vietnamese")}</option>
      </select>
    </label>
  );
}
