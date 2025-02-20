import ThemeSwitcher from "./ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";
import DownloadCV from "./DownloadCV";

function NavBar() {
  return (
    <nav className="sticky top-0 pt-2 pb-2 px-8 z-50 flex justify-end flex-end bg-white/50 dark:bg-gray-900/50">
      <DownloadCV label="getCV"></DownloadCV>
      <ThemeSwitcher></ThemeSwitcher>
      <LanguageSwitcher></LanguageSwitcher>
    </nav>
  );
}

export default NavBar;
