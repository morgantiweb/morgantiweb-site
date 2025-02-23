import CookieConsent from "react-cookie-consent";
import { useEffect, useState } from "react";
import { initializeAnalytics } from "../utils/analytics";
import { useTranslation } from "react-i18next";

const CookieBanner = () => {
  const { t } = useTranslation();
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    const storedConsent = localStorage.getItem("cookie_consent");
    if (storedConsent === "true") {
      setConsent(true);
      initializeAnalytics();
    }
  }, []);

  return (
    <CookieConsent
      location="bottom"
      buttonText={t("cookie-banner-accept")}
      declineButtonText={t("cookie-banner-reject")}
      enableDeclineButton
      onAccept={() => {
        localStorage.setItem("cookie_consent", "true");
        setConsent(true);
        initializeAnalytics();
      }}
      onDecline={() => {
        localStorage.setItem("cookie_consent", "false");
      }}
      style={{
        background: "#fff",
        color: "#000",
        boxShadow: "-10px -10px 10px 0px rgba(0,0,0,0.2)",
      }}
      buttonStyle={{
        background: "var(--color-zinc-900)",
        color: "#fff",
        fontSize: "14px",
        fontWeight: "600",
        backdropFilter: "blur(8px)",
        border: '1px solid #F3F3F3',
        borderRadius: "4px",
      }}
      declineButtonStyle={{
        background: "#fff",
        color: "var(--color-zinc-900)",
        fontSize: "14px",
        // fontWeight: "600",
        backdropFilter: "blur(8px)",
        border: '1px solid #F3F3F3',
        borderRadius: "4px",
      }}
    >
      {t("cookie-banner-text")}
    </CookieConsent>
  );
};

export default CookieBanner;
