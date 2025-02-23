import { useTranslation } from "react-i18next";
import {
  AcademicCapIcon,
  IdentificationIcon,
  LanguageIcon,
} from "@heroicons/react/24/outline";

export default function SectionEducation() {
  const { t } = useTranslation();

  return (
    <section className="px-8 py-16 pt-32">
      <div className="container max-w-screen-xl mx-auto">
        <h2 className="title-h2 mb-8">{t("education-languages")}</h2>
        <p className="paragraph text-md mb-8">
          {t("education-languages-intro")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-center">
          <div className="card">
            <h3 className="title-h3 mb-5">
              <AcademicCapIcon
                className="inline-block mr-2"
                width={24}
                alignmentBaseline="center"
              />
              {t("education")}
            </h3>
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              <li className="py-4 grid grid-cols-[1fr_2fr] gap-4">
                <div>1997 - 2005</div>
                <div>
                  <strong>{t("computer-science")}</strong>
                  <br />
                  <i>{t("bologna-university")}</i>
                </div>
              </li>
              <li className="py-4 grid grid-cols-[1fr_2fr] gap-4">
                <div>1992 - 1997</div>
                <div>
                  <strong>{t("diploma")}</strong>
                  <br />
                  <i>{t("high-school")}</i>
                </div>
              </li>
            </ul>
          </div>
          <div className="card">
            <h3 className="title-h3 mb-5">
              <LanguageIcon
                className="inline-block mr-2"
                width={24}
                alignmentBaseline="center"
              />
              {t("languages")}
            </h3>
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              <li className="py-4 grid grid-cols-2 gap-4">
                <div>{t("italian")}</div>
                <div>{t("native-language")}</div>
              </li>
              <li className="py-4 grid grid-cols-2 gap-4">
                <div>{t("english")}</div>
                <div>
                  <strong>B2</strong> {t("reading-ability")}<br />
                  <strong>B1</strong> {t("writing-ability")}<br />
                  <strong>B1</strong> {t("oral-ability")}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
