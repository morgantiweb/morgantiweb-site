import * as React from "react";
import i18n from "../utils/i18n";

export default function LanguageSwitcher(props) {
  const [language, setLanguage] = React.useState(i18n.language);

  const toggleLanguage = () => {
    const newLang = language === "it-IT" ? "en-GB" : "it-IT";
    i18n.changeLanguage(newLang);
    setLanguage(newLang);
  };

  return (
    <button
      type="button"
      aria-label="Switch theme"
      className="button ml-4 px-3 py-2 group"
      onClick={toggleLanguage}
    >
      {language === "it-IT" ? "EN" : "IT"}
    </button>
  );
}
