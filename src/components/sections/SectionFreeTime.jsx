import { useTranslation } from "react-i18next";
import "./SectionFreetime.css";

export default function SectionFreetime() {
  const { t } = useTranslation();

  return (
    <section className="px-8 py-16 pt-32">
      <div className="container max-w-screen-xl mx-auto">
        <h2 className="title-h2 mb-8">{t("free-time")}</h2>
        <p className="paragraph text-md mb-8">{t("free-time-intro")}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-center">
          <div className="card altimetrie">
            <h3 className="title-h3 mb-5">
              <img
                className="inline-block w-12 h-12 mr-2"
                src={`images/free-time/mountains.svg`}
                alt={t("free-time")}
              />
              {t("trekking")}
            </h3>
            <p className="skill-intro mb-8">{t("trekking-intro")}</p>
            <p className="skill-intro mb-8">{t("maps-intro")}</p>
          </div>
          <div className="card">
            <h3 className="title-h3 mb-5">
              <img
                className="inline-block w-12 h-12 mr-2"
                src={`images/free-time/ofcn15.svg`}
                alt={t("free-time")}
              />
              {t("associationism")}
            </h3>
            <p className="skill-intro mb-8">{t("associationism-intro")}</p>
            <a
              className="link"
              aria-label={`${t("read-more")}: "ofcn15.com"`}
              href="https://www.ofcn15.com/"
              target="_blank"
            >
              {t("read-more")} →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
