import { useTranslation } from "react-i18next";
import ThemeSwitcher from "./ThemeSwitcher";
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import LanguageSwitcher from "./LanguageSwitcher";

function NavBar() {
  const { t } = useTranslation();

  return (
    <nav className="sticky top-0 pt-2 pb-2 px-8 z-50 flex justify-end flex-end bg-white/70 dark:bg-gray-900/70">
      <button id="cvButton" className="button flex px-4 py-3">
        <ArrowDownTrayIcon
        className="mr-2"
          width={18}
          alignmentBaseline="center"
        ></ArrowDownTrayIcon>
        {t("getCV")}
      </button>
      <ThemeSwitcher></ThemeSwitcher>
      <LanguageSwitcher></LanguageSwitcher>
    </nav>
  );
}

export default NavBar;
