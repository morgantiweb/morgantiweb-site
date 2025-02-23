import { useTranslation } from "react-i18next";
import Avatar from "../Avatar";
import SocialIcon from "../SocialIcon";

function SectionCover() {
  const { t } = useTranslation();

  return (
    <section className="p-8">
      <div className="container max-w-screen-xl mx-auto">
        <Avatar />
        <h6 className="subtitle mb-8">Luca Morganti</h6>

        <h1 className="title-h1 mb-8">Senior Full Stack Developer</h1>

        <p className="paragraph text-md mb-8">{t("intro")}</p>

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

        <div className="toc">
          <a className="link" href="#works">{t("works")}</a>
          <a className="link" href="#brands">{t("brands")}</a>
          <a className="link" href="#skills">{t("skills_short")}</a>
          <a className="link" href="#education">{t("education_short")}</a>
          <a className="link" href="#freetime">{t("free-time")}</a>
        </div>
      </div>
    </section>
  );
}

export default SectionCover;
