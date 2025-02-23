import { useTranslation } from "react-i18next";
import MapboxWidget from "../Mapbox";
import "./SectionFreetime.css";
import { useRef } from "react";
import LazyImage from "../LazyImage";

export default function SectionFreetime() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);

  const ofcnImgs = [
    {
      src: "free-time/ofcn01.jpeg",
      alt: "Officina15",
      classes: "rotate-2",
    },
    {
      src: "free-time/ofcn02.jpeg",
      alt: "Officina15",
      classes: "-rotate-2",
    },
    {
      src: "free-time/ofcn03.jpeg",
      alt: "Officina15",
      classes: "rotate-2",
    },
  ];

  return (
    <section ref={sectionRef} className="px-8 py-16 pt-32">
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
            <MapboxWidget sectionRef={sectionRef} />
            <a
              className="link"
              aria-label={`${t("read-more")}: "ofcn15.com"`}
              href="https://www.morgantiweb.com/3dmap/index.html"
              target="_blank"
            >
              {t("read-more")} →
            </a>
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
            <div className="flex justify-center mb-8">
              {ofcnImgs.map((img, index) => (
                <div
                  key={index}
                  className={`relative aspect-9/10 w-32 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-42 sm:rounded-2xl dark:bg-zinc-800 ${img.classes}`}
                >
                  <LazyImage
                    fileName={img.src}
                    width={400}
                    srcSet={[
                      "w=400&dpr=1 1x,",
                      "w=800&dpr=2 2x,",
                      "w=1200&dpr=3 3x",
                    ]}
                    sizes="(max-width: 600px) 364px, 300px"
                    alt={img.alt}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
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
