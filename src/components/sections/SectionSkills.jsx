import { useState } from "react";
import { useTranslation } from "react-i18next";

const skills = [
  {
    title: "frontend-base",
    description: "frontend-base-description",
    techs: [
      {
        name: "HTML5",
        image: "FE/html5.svg",
        description: "html5-description",
        url: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
        classes: "w-12 h-12",
      },
      {
        name: "CCS 3",
        image: "FE/css-3.svg",
        description: "css-3-description",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        classes: "w-12 h-12",
      },
      {
        name: "Inspector and Devtools",
        image: "FE/chrome-devtools.svg",
        description: "chrome-devtools-description",
        url: "https://developer.chrome.com/docs/devtools",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "Responsive design",
        image: "FE/responsive.svg",
        description: "responsive-design-description",
        url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design",
        classes: "w-8 h-8 mt-3 ml-3",
      },
      {
        name: "Pixel Perfect",
        image: "FE/pixel-perfect.svg",
        description: "pixel-perfect-description",
        url: "https://www.welldonecode.com/perfectpixel/",
        classes: "w-8 h-8 mt-3 ml-3",
      },
      {
        name: "World Wide Web Consortium - WCAG",
        image: "FE/w3c.svg",
        description: "w3c-description",
        url: "https://www.w3.org/WAI/standards-guidelines/wcag/",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "HTTP Protocol",
        image: "FE/http.svg",
        description: "http-description",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "Web.dev",
        image: "FE/web.dev.svg",
        description: "web-dev-description",
        url: "https://web.dev/",
        classes: "w-8 h-8 mt-3 ml-3",
      },
      {
        name: "Sass",
        image: "FE/sass.svg",
        description: "sass-description",
        url: "https://sass-lang.com/",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "Tailwind CSS",
        image: "FE/tailwind-css.svg",
        description: "tailwind-css-description",
        url: "https://tailwindcss.com/",
        classes: "w-8 h-8 mt-3 ml-3",
      },
    ],
  },
  {
    title: "design-uxui",
    description: "design-uxui-description",
    techs: [
      {
        name: "SVG",
        image: "UXUI/svg-xml.svg",
        description: "svg-xml-description",
        url: "https://www.w3.org/TR/SVG2/",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "Figma",
        image: "UXUI/figma.svg",
        description: "figma-description",
        url: "https://www.figma.com/",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "InVision",
        image: "UXUI/invision.svg",
        description: "invision-description",
        url: "https://www.invisionapp.com/",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "Adobe Illustrator",
        image: "UXUI/adobe-illustrator.svg",
        description: "illustrator-description",
        url: "https://www.adobe.com/products/illustrator.html",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "Adobe Photoshop",
        image: "UXUI/adobe-photoshop.svg",
        description: "photoshop-description",
        url: "https://www.adobe.com/products/photoshop.html",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "Material UI",
        image: "UXUI/material-ui.svg",
        description: "material-ui-description",
        url: "https://mui.com/",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "Bootstrap",
        image: "UXUI/bootstrap.svg",
        description: "bootstrap-description",
        url: "https://getbootstrap.com/",
        classes: "w-10 h-10 mt-2 ml-2",
      },
    ],
  },
  {
    title: "frontend-dev",
    description: "frontend-dev-description",
    techs: [
      {
        name: "VS Code",
        image: "FE-DEV/visual-studio-code.svg",
        description: "visual-studio-code-description",
        url: "https://code.visualstudio.com/",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "Javascript",
        image: "FE-DEV/javascript-js.svg",
        description: "javascript-js-description",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "Typescript",
        image: "FE-DEV/typescript-icon.svg",
        description: "typescript-icon-description",
        url: "https://www.typescriptlang.org/",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "jQuery",
        image: "FE-DEV/jquery-plain-wordmark.svg",
        description: "jquery-plain-wordmark-description",
        url: "https://jquery.com/",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "NodeJs",
        image: "FE-DEV/nodejs.svg",
        description: "nodejs-description",
        url: "https://nodejs.org/en",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "NPM",
        image: "FE-DEV/npm.svg",
        description: "npm-description",
        url: "https://www.npmjs.com/",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "Yarn",
        image: "FE-DEV/yarn-original-wordmark.svg",
        description: "yarn-original-wordmark-description",
        url: "https://yarnpkg.com/",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "Angular",
        image: "FE-DEV/file-type-angular.svg",
        description: "file-type-angular-description",
        url: "https://angular.io/",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "React",
        image: "FE-DEV/react.svg",
        description: "react-description",
        url: "https://reactjs.org/",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "Redux",
        image: "FE-DEV/redux-original.svg",
        description: "redux-original-description",
        url: "https://redux.js.org/",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "Jest",
        image: "FE-DEV/file-type-jest.svg",
        description: "file-type-jest-description",
        url: "https://jestjs.io/",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "Google Maps",
        image: "FE-DEV/google-maps.svg",
        description: "google-maps-description",
        url: "https://developers.google.com/maps",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "Mapbox",
        image: "FE-DEV/mapbox.svg",
        description: "mapbox-description",
        url: "https://www.mapbox.com/",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "Gulp",
        image: "FE-DEV/gulp.svg",
        description: "gulp-description",
        url: "https://gulpjs.com/",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "Webpack",
        image: "FE-DEV/webpack-original.svg",
        description: "webpack-original-description",
        url: "https://webpack.js.org/",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "Electron",
        image: "FE-DEV/electron.svg",
        description: "electron-description",
        url: "https://www.electronjs.org/",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "Cloundinary",
        image: "FE-DEV/cloudinary.svg",
        description: "cloudinary-description",
        url: "https://cloudinary.com/",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "ThreeJs",
        image: "FE-DEV/brand-threejs.svg",
        description: "brand-threejs-description",
        url: "https://threejs.org/",
        classes: "w-10 h-10 mt-2 ml-2",
      },
    ],
  },
  {
    title: "backend",
    description: "backend-description",
    techs: [
      {
        name: "Visual Studio",
        image: "BE/visual-studio.svg",
        description: "visual-studio-description",
        url: "https://visualstudio.microsoft.com/",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "ASP.NET",
        image: "BE/aspdotnet.svg",
        description: "aspdotnet-description",
        url: "https://dotnet.microsoft.com/apps/aspnet",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "C#",
        image: "BE/c-sharp-c.svg",
        description: "c-sharp-c-description",
        url: "https://learn.microsoft.com/en-us/dotnet/csharp/",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "PHP",
        image: "BE/php.svg",
        description: "php-description",
        url: "https://www.php.net/",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "Python",
        image: "BE/python.svg",
        description: "python-description",
        url: "https://www.python.org/",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "FTP",
        image: "BE/gnome-fs-ftp.svg",
        description: "gnome-fs-ftp-description",
        url: "https://en.wikipedia.org/wiki/File_Transfer_Protocol",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "SSH",
        image: "BE/ssh.svg",
        description: "ssh-description",
        url: "https://www.ssh.com/",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "Rest",
        image: "BE/file-type-rest.svg",
        description: "file-type-rest-description",
        url: "https://en.wikipedia.org/wiki/Representational_state_transfer",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "Swagger",
        image: "BE/swagger.svg",
        description: "swagger-description",
        url: "https://swagger.io/",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "Apache",
        image: "BE/apache-original-wordmark.svg",
        description: "apache-original-wordmark-description",
        url: "https://httpd.apache.org/",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "Firebase",
        image: "BE/file-type-firebase.svg",
        description: "file-type-firebase-description",
        url: "https://firebase.google.com/",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "Google Cloud",
        image: "BE/google-cloud.svg",
        description: "google-cloud-description",
        url: "https://cloud.google.com/",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "MS Azure",
        image: "BE/microsoft-azure.svg",
        description: "microsoft-azure-description",
        url: "https://azure.microsoft.com/",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "AWS",
        image: "BE/aws.svg",
        description: "aws-description",
        url: "https://aws.amazon.com/",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "Sonarqube",
        image: "BE/sonarqube.svg",
        description: "sonarqube-description",
        url: "https://www.sonarqube.org/",
        classes: "w-12 h-12",
      },
    ],
  },
  {
    title: "database",
    description: "database-description",
    techs: [
      {
        name: "MySQL",
        image: "DB/mysql-original-wordmark.svg",
        description: "mysql-original-wordmark-description",
        url: "https://www.mysql.com/",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "PostgreSQL",
        image: "DB/postgresql-plain-wordmark.svg",
        description: "postgresql-plain-wordmark-description",
        url: "https://www.postgresql.org/",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "MongoDB",
        image: "DB/mongodb-original-wordmark.svg",
        description: "mongodb-original-wordmark-description",
        url: "https://www.mongodb.com/",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "Firestore",
        image: "DB/file-type-firestore.svg",
        description: "firestore-description",
        url: "https://firebase.google.com/docs/firestore",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "GraphQL",
        image: "DB/graphql.svg",
        description: "graphql-description",
        url: "https://graphql.org/",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "MS Access",
        image: "DB/file-type-access.svg",
        description: "file-type-access-description",
        url: "https://www.microsoft.com/en-us/microsoft-365/access",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "XML",
        image: "DB/xml-document.svg",
        description: "xml-document-description",
        url: "https://www.w3.org/XML/",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "XSLT",
        image: "DB/application-xslt-xml.svg",
        description: "application-xslt-xml-description",
        url: "https://www.w3.org/TR/xslt-30/",
        classes: "w-10 h-10 mt-2 ml-2",
      },
    ],
  },
  {
    title: "cicd",
    description: "cicd-description",
    techs: [
      {
        name: "Github",
        image: "CICD/github.svg",
        description: "github-description",
        url: "https://github.com/",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "Bitbucket",
        image: "CICD/bitbucket.svg",
        description: "bitbucket-description",
        url: "https://bitbucket.org/",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "Jenkins",
        image: "CICD/jenkins-original.svg",
        description: "jenkins-original-description",
        url: "https://www.jenkins.io/",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "Octopus",
        image: "CICD/octopus-deploy.svg",
        description: "octopus-deploy-description",
        url: "https://octopus.com/",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "VSTS",
        image: "CICD/vsts.svg",
        description: "vsts-description",
        url: "https://azure.microsoft.com/en-us/products/devops/",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "Agile",
        image: "CICD/agile.svg",
        description: "agile-description",
        url: "https://www.agilealliance.org/agile101/",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "Confluence",
        image: "CICD/confluence.svg",
        description: "confluence-description",
        url: "https://www.atlassian.com/software/confluence",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "Jira",
        image: "CICD/jira.svg",
        description: "jira-description",
        url: "https://www.atlassian.com/software/jira",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "Trello",
        image: "CICD/trello.svg",
        description: "trello-description",
        url: "https://trello.com/",
        classes: "w-8 h-8 mt-3 ml-3",
      },
    ],
  },
  {
    title: "cms-networking",
    description: "cms-networking-description",
    techs: [
      {
        name: "Wordpress",
        image: "CMS/wordpress.svg",
        description: "wordpress-description",
        url: "https://wordpress.org/",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "Joomla",
        image: "CMS/joomla.svg",
        description: "joomla-description",
        url: "https://www.joomla.org/",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "Google Analytics",
        image: "CMS/google-analytics.svg",
        description: "google-analytics-description",
        url: "https://analytics.google.com/",
        classes: "w-8 h-8 mt-3 ml-3",
      },
      {
        name: "Google Page Speed",
        image: "CMS/google-pagespeed-insights.svg",
        description: "google-pagespeed-insights-description",
        url: "https://pagespeed.web.dev/",
        classes: "w-8 h-8 mt-3 ml-3",
      },
      {
        name: "Mailchimp",
        image: "CMS/mailchimp.svg",
        description: "mailchimp-description",
        url: "https://mailchimp.com/",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "Meta",
        image: "CMS/meta-icon.svg",
        description: "meta-line-logo-description",
        url: "https://about.facebook.com/meta/",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "Shopify",
        image: "CMS/shopify.svg",
        description: "shopify-description",
        url: "https://www.shopify.com/",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "Open Journal Systems",
        image: "CMS/open-journal-systems.svg",
        description: "open-journal-systems-description",
        url: "https://pkp.sfu.ca/software/ojs/",
        classes: "w-10 h-10 mt-2 ml-2",
      },
    ],
  },
  {
    title: "tools",
    description: "tools-description",
    techs: [
      {
        name: "Apple",
        image: "TOOLS/apple-mac.svg",
        description: "apple-mac-description",
        url: "https://www.apple.com/",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "Google Drive",
        image: "TOOLS/google-drive.svg",
        description: "google-drive-description",
        url: "https://workspace.google.com/intl/it/products/drive/",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "MS Excel",
        image: "TOOLS/ms-excel.svg",
        description: "ms-excel-description",
        url: "https://www.microsoft.com/en-us/microsoft-365/excel",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "MS Outlook",
        image: "TOOLS/ms-outlook.svg",
        description: "ms-outlook-description",
        url: "https://www.microsoft.com/en-us/microsoft-365/outlook",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "MS Powerpoint",
        image: "TOOLS/ms-powerpoint.svg",
        description: "ms-powerpoint-description",
        url: "https://www.microsoft.com/en-us/microsoft-365/powerpoint",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "MS Word",
        image: "TOOLS/ms-word.svg",
        description: "ms-word-description",
        url: "https://www.microsoft.com/en-us/microsoft-365/word",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "VBA",
        image: "TOOLS/file-type-vba.svg",
        description: "file-type-vba-description",
        url: "https://docs.microsoft.com/en-us/office/vba/api/overview/",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "Copilot",
        image: "TOOLS/brand-github-copilot.svg",
        description: "brand-github-copilot-description",
        url: "https://github.com/features/copilot",
        classes: "w-10 h-10 mt-2 ml-2",
      },
      {
        name: "ChatGPT",
        image: "TOOLS/openai.svg",
        description: "openai-description",
        url: "https://openai.com/chatgpt",
        classes: "w-10 h-10 mt-2 ml-2",
      },
    ],
  },
];

export default function SectionSkills() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentSkill, setCurrentSkill] = useState({});

  const openPopup = (skill) => {
    setCurrentSkill(skill);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <section className="px-8 py-16 pt-32">
      <div className="container max-w-screen-xl mx-auto">
        <h2 className="title-h2 mb-8">{t("skills")}</h2>
        <p className="paragraph text-md mb-8">{t("skills-intro")}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-center">
          {skills.map((s, i) => (
            <div key={"skill-" + i} className="card">
              <h3 className="title-h3 mb-5">{t(s.title)}</h3>
              <p className="skill-intro">{t(s.description)}</p>
              <div className="grid grid-cols-4 lg:grid-cols-5">
                {s.techs.map((t, ii) => (
                  <div
                    className="skill"
                    onClick={() => openPopup(t)}
                    key={`tech-${i}-${ii}`}
                  >
                    <img
                      className={t.classes + " skill-image"}
                      key={`tech-${i}-${ii}`}
                      src={`images/skills/${t.image}`}
                      alt={t.name}
                      title={t.name}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {isOpen && (
        <div className="popup" onClick={() => closePopup()}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h3 className="title-h4 flex items-center mb-4">
              <img
                className="w-12 h-12 mb-2 mr-2"
                src={`images/skills/${currentSkill.image}`}
                alt={currentSkill.name}
                title={currentSkill.name}
              />
              {currentSkill.name}
            </h3>
            <p className="paragraph mb-8">{t(currentSkill.description)}</p>
            <a
              className="link"
              aria-label={`${t("read-more")} ${currentSkill.name}`}
              href={currentSkill.url}
              target="_blank"
            >
              {t("read-more")} →
            </a>
            <div className="mt-8 flex flex-row-reverse">
              <button onClick={() => closePopup()} className="button px-8 py-2">
                Ok
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
