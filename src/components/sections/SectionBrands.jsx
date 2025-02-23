import { useTranslation } from "react-i18next";
import LazyImage from "../LazyImage";

const brands = [
  {
    name: "Bundesliga",
    image: "brands/bundesliga.png",
    url: "https://www.bundesliga.com/en/bundesliga",
  },
  {
    name: "Ligue1",
    image: "brands/ligue1.png",
    url: "https://ligue1.com/",
  },
  {
    name: "Premier League",
    image: "brands/premier-league.png",
    url: "https://www.premierleague.com/",
  },
  {
    name: "UEFA",
    image: "brands/uefa.png",
    url: "https://www.uefa.com/",
  },
  {
    name: "Alaia",
    image: "brands/alaia.png",
    url: "https://www.maison-alaia.com/",
  },
  {
    name: "Dunhill",
    image: "brands/dunhill.png",
    url: "https://www.dunhill.com/it",
  },
  {
    name: "Lanvin",
    image: "brands/lanvin.png",
    url: "https://eu.lanvin.com/",
  },
  {
    name: "Chloé",
    image: "brands/chloe.png",
    url: "https://www.chloe.com/",
  },
  {
    name: "Internorm",
    image: "brands/internorm.png",
    url: "https://internorm.it/",
  },
  {
    name: "Assopoker",
    image: "brands/assopoker.png",
    url: "https://www.assopoker.com/",
  },
  {
    name: "CiDiverte",
    image: "brands/cidiverte.png",
    url: "https://www.cidiverte.it/",
  },
];

export default function SectionBrands() {
  const { t } = useTranslation();

  return (
    <section id="brands" className="px-8 py-16 pt-32">
      <div className="container max-w-screen-xl mx-auto">
        <h2 className="title-h2 mb-8">{t("brands")}</h2>
        <p className="paragraph text-md mb-8">{t("brands-intro")}</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center">
          {brands.map((b, i) => (
            <a href={b.url} key={`brand-${i}`} target="_blank" rel="noreferrer">
              <LazyImage
                fileName={`${b.image}`}
                width={100}
                srcSet={["w=100&dpr=1 1x,", "w=200&dpr=2 2x,"]}
                alt={b.name}
                className="my-5"
                title={b.name}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
