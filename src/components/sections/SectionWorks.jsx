import { useTranslation } from "react-i18next";
import LazyImage from "../LazyImage";
import { useEffect, useRef, useState } from "react";

const works = [
  {
    dateStart: new Date("06/01/2022"),
    dateEnd: null,
    companyLogo: "deltatre-logo.jpeg",
    companyName: "Deltatre Spa",
    title: "deltatre-jobtitle",
    description: "deltatre-jobdesc",
    tecnologies: [
      ".NET",
      "Angular",
      "NX",
      "Redux",
      "React",
      "Jest",
      "SCSS",
      "Figma",
      "MS SQL Server",
      "GraphQL",
      "MongoDB",
    ],
    companyLink: "https://www.deltatre.com/",
  },
  {
    dateStart: new Date("10/01/2018"),
    dateEnd: new Date("06/01/2022"),
    companyLogo: "ynap-logo.jpeg",
    companyName: "YOOX Net-a-Porter Group",
    title: "ynap-jobtitle",
    description: "ynap-jobdesc",
    tecnologies: [
      ".NET",
      "ASP.NET Razor",
      "Javascript",
      "jQuery",
      "Typescript",
      "Jest",
      "SCSS",
      "Webpack",
      "PWA",
    ],
    companyLink: "https://www.ynap.com/",
  },
  {
    dateStart: new Date("11/01/2015"),
    dateEnd: new Date("10/01/2018"),
    companyLogo: "euris-logo.jpeg",
    companyName: "Euris Spa",
    title: "euris-jobtitle",
    description: "euris-jobdesc",
    tecnologies: [
      ".NET",
      "ASP.NET",
      "Javascript",
      "jQuery",
      "Typescript",
      "Jest",
      "SCSS",
      "Webpack",
      "Wordpress",
    ],
    companyLink: "https://www.euris.it/",
  },
  {
    dateStart: new Date("08/01/2007"),
    dateEnd: new Date("11/01/2015"),
    companyLogo: "morgantiweb-logo.jpeg",
    companyName: "MorgantiWeb",
    title: "mw-jobtitle",
    description: "mw-jobdesc",
    tecnologies: [
      "PHP",
      "HTML5",
      "CSS",
      "Javascript",
      "jQuery",
      "AngularJs",
      "Wordpress",
      "Joomla",
      "MySQL",
      "SEO Tools",
    ],
    companyLink: "https://www.behance.net/creazione-siti-web",
  },
  {
    dateStart: new Date("06/01/2006"),
    dateEnd: new Date("08/01/2007"),
    companyLogo: "cedac-software-logo.jpeg",
    companyName: "CEDAC Software Srl",
    title: "cedac-jobtitle",
    description: "cedac-jobdesc",
    tecnologies: ["Java", "HTML5", "XML", "XSLT", "CSS", "Javascript"],
    companyLink: "https://www.cedac.com/",
  },
  {
    dateStart: new Date("01/01/2001"),
    dateEnd: new Date("08/01/2003"),
    companyLogo: "demsoft-logo.jpg?w=200&h=196&rect=0%2C4%2C200%2C196",
    companyName: "DEMSoft",
    title: "demsoft-jobtitle",
    description: "demsoft-jobdesc",
    tecnologies: [
      "MS Visual Basic",
      "C++",
      "DirectX",
      "Graphic Design",
      "Adobe Flash",
      "Adobe Dreamweaver",
    ],
    companyLink:
      "https://www.gamesurf.it/recensioni/gioco/pc-basket-2003-c6738",
  },
];

export default function SectionWorks() {
  const { i18n, t } = useTranslation();

  const [activeSection, setActiveSection] = useState(false);
  const [activeYear, setActiveYear] = useState(null);
  const sectionRef = useRef();
  const sectionWorksRef = useRef([]);

  const years = [];
  for (
    let y = new Date().getFullYear();
    y >= works[works.length - 1].dateStart.getFullYear() - 1;
    y--
  ) {
    years.push(y);
  }

  const workYears = [
    new Date().getFullYear(),
    ...new Set(works.map((w) => w.dateStart.getFullYear())),
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const year = entry.target.getAttribute("data-year");
            setActiveYear(year);
          }
        });
      },
      { threshold: 0.50 }
    );

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(true);
          } else {
            setActiveSection(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionObserver.observe(sectionRef.current);

    sectionWorksRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionWorksRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <div className={`timeline-container ${activeSection ? "active" : ""}`}>
        {years.map((year, index) =>
          workYears.includes(year) ? (
            <div
              key={"year-" + index}
              className={`timeline-work ${activeYear == year ? "active" : ""}`}
            >
              {year}
            </div>
          ) : (
            <div
              key={"year-" + index}
              className={`timeline-dot ${activeYear == year ? "active" : ""}`}
            ></div>
          )
        )}
      </div>
      <section className="px-8 py-16 pt-32" ref={sectionRef}>
        <div className="container max-w-screen-xl mx-auto">
          <h2 className="title-h2 mb-8">{t("work-experience")}</h2>
          <div className="space-y-24">
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {works.map((w, i) => (
                <li key={"work-" + i} className="py-12" data-year={w.dateStart.getFullYear()} ref={(el) => (sectionWorksRef.current[i] = el)}>
                  <article>
                    <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-top xl:space-y-0 pr-7">
                      <div>
                        <LazyImage
                          fileName={`companies/${w.companyLogo}`}
                          width={75}
                          srcSet={["w=150&dpr=1 1x,", "w=200&dpr=2 2x,"]}
                          alt={w.companyName}
                          className="company"
                          title={w.companyName}
                        />
                        <h4 className="title-h4">{w.companyName}</h4>
                        <dl>
                          <dt className="sr-only">Duration</dt>
                          <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                            <time dateTime={w.dateStart.toISOString()}>
                              {w.dateStart.toLocaleDateString(i18n.language, {
                                year: "numeric",
                                month: "long",
                              })}
                            </time>
                            -
                            {w.dateEnd ? (
                              <time dateTime={w.dateStart.toISOString()}>
                                {w.dateEnd.toLocaleDateString(i18n.language, {
                                  year: "numeric",
                                  month: "long",
                                })}
                              </time>
                            ) : (
                              t("present")
                            )}
                          </dd>
                        </dl>
                      </div>
                      <div className="space-y-5 xl:col-span-3">
                        <div className="space-y-6">
                          <div>
                            <h3 className="title-h3 mb-2">{t(w.title)}</h3>
                            <div className="flex flex-wrap">
                              {w.tecnologies.map((t, i) => (
                                <span key={i} className="tecnology-tag">
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="paragraph">{t(w.description)}</div>
                        </div>
                        <div className="text-base leading-6 font-medium">
                          <a
                            className="link"
                            aria-label={`${t("read-more")}: "${w.title}"`}
                            href={w.companyLink}
                            target="_blank"
                          >
                            {t("read-more")} →
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
