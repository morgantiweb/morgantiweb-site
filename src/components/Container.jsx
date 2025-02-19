import { useTranslation } from "react-i18next";
import Avatar from "./Avatar";

function Container() {
  const { t } = useTranslation();

  return (
    <div id="container" className="p-8">
      <section>
        <div className="container max-w-screen-xl mx-auto">
          <Avatar></Avatar>
          <h6 className="subtitle mb-8">Luca Morganti</h6>

          <h1 className="title-h1 mb-8">Senior Full Stack Developer</h1>

          <p className="paragraph text-md mb-16">{t("intro")}</p>

        </div>
      </section>
    </div>
  );
}

export default Container;
