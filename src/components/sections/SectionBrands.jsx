import { useTranslation } from "react-i18next";

const brands = [
  { name: "Bundesliga", image: "/images/brands/bundesliga.png" },
  { name: "Ligue1", image: "/images/brands/ligue1.png" },
  { name: "Premier League", image: "/images/brands/premier-league.png" },
  { name: "UEFA", image: "/images/brands/uefa.png" },
  { name: "Dunhill", image: "/images/brands/dunhill.png" },
  { name: "Alaia", image: "/images/brands/alaia.png" },
  { name: "Lanvin", image: "/images/brands/lanvin.png" },
  { name: "Chloé", image: "/images/brands/chloe.png" },
  { name: "Internorm", image: "/images/brands/internorm.png" },
  { name: "Assopoker", image: "/images/brands/assopoker.png" },
];

export default function SectionBrands() {
  const { t } = useTranslation();

  return (
    <section className="px-8 py-16 pt-32">
      <div className="container max-w-screen-xl mx-auto">
        <h2 className="title-h2 mb-8">{t("brands")}</h2>
        <p className="paragraph text-md mb-8">{t("brands-intro")}</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center">
          {brands.map((b) => (
            <img src={b.image} alt={b.name} className="my-5" width={100} />
          ))}
        </div>
      </div>
    </section>
  );
}
