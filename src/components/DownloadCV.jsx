import { useTranslation } from "react-i18next";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export default function DownloadCV(props) {
  const { t } = useTranslation();

  const handleDownloadClick = () => {
    window.open("/docs/CV-Luca Morganti-202511.pdf", "_blank");
  };

  return (
    <button
      id="cvButton"
      className="button flex px-4 py-3"
      onClick={handleDownloadClick}
    >
      <ArrowDownTrayIcon
        className="mr-2"
        width={18}
        alignmentBaseline="center"
      ></ArrowDownTrayIcon>
      {t(props.label)}
    </button>
  );
}
