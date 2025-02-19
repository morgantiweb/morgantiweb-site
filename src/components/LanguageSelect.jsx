import * as React from "react";
import i18n from "../utils/i18n";

export default function LanguageSelect(props) {
  const [language, setLanguage] = React.useState(i18n.language);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  return (
    <select
      className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      value={language}
      onChange={(event) => changeLanguage(event.target.value)}
      {...props}
    >
      <option value="it-IT">Italiano</option>
      <option value="en-GB">English</option>
    </select>
  );
}
