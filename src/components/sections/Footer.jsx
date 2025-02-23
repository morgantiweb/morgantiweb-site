import { useTranslation } from "react-i18next";
import { EnvelopeIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import waimg from "../../assets/images/whatsapp.png";
import SocialIcon from "../SocialIcon";
import { CookiePolicy } from "./CookiePolicy";
import { useState } from "react";

export default function Footer() {
  const { i18n, t } = useTranslation();
  const encodedEmail = "bW9yZ2FudGk3OEBnbWFpbC5jb20=";
  const lastUpdate = new Date("02/23/2025");
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = (event) => {
    event.preventDefault();
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const Contact = () => {
    const email = atob(encodedEmail);
    return (
      <a className="link" href={`mailto:${email}`}>
        <EnvelopeIcon className="inline-block mr-2" width={22} />
        {email}
      </a>
    );
  };

  return (
    <footer className="mt-32 flex-none">
      <div className="container mx-auto border-t border-gray-200 pt-10 pb-16 px-4 md:px-0 dark:border-zinc-700/40">
        <div className="flex flex-col md:flex-row gap-24 justify-between items-start">
          <div className="skill-intro mb-8">
            <strong>Luca Morganti</strong>
            <br />
            Full Stack Developer
            <br />
            <br />
            <Contact />
            <div className="mt-6 flex gap-3 mb-8 ml-[-1rem]">
              <SocialIcon
                icon="linkedin"
                url="https://www.linkedin.com/in/lucamorganti/"
              />
              <SocialIcon icon="github" url="https://github.com/morgantiweb" />
              <SocialIcon
                icon="instagram"
                url="https://www.instagram.com/morganti78"
              />
            </div>
          </div>
          <div className="skill-intro mb-8">
            <strong>{t("about-this-site")}</strong><br/>
            <p className="skill-intro mb-8">{t("about-this-site-intro")}</p>
            <a className="link" href="https://github.com/morgantiweb/morgantiweb-site" target="_blank" rel="noreferrer">
            <ArrowTopRightOnSquareIcon className="inline-block mr-2 align-text-bottom" width={16} />
            {t("source-code")}</a>
          </div>
        </div>
        <p className="text-sm text-zinc-400 dark:text-zinc-500">
          {t("last-update")}:{" "}
          {lastUpdate.toLocaleDateString(i18n.language, {
            year: "numeric",
            month: "long",
          })}{" "}
          - {t("all-rights-reserved")} - C.F. MRGLCU78T03A944K - <a className="link" href="#" onClick={(e) => openPopup(e)}>Cookie Policy</a>
        </p>
      </div>
      <div className="fixed bottom-4 right-4 rounded-full w-12 h-12 overflow-hidden">
        <a
          className="block w-[100%] h-[100%]"
          href="https://wa.me/393385690164?text=Ciao"
        >
          <img className="w-[100%]" src={waimg} alt="WhatsApp Me" />
        </a>
      </div>
      {isOpen && (
        <div className="popup" onClick={() => closePopup()}>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-md shadow-lg w-[95%] md:w-[80%] max-w-none max-h-[80vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
            <h3 className="title-h4 flex items-center mb-4">
              Cookie Policy
            </h3>
            <div className="cookie-content text-sm overflow-y-scroll overflow-x-hidden pr-4 md:pr-24 pb-24">
            <CookiePolicy />
            </div>
            <div className="mt-8 flex flex-row-reverse">
              <button onClick={() => closePopup()} className="button px-8 py-2">
                Ok
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
