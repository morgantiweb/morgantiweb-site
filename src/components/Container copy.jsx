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

          {/* <a
            href="#"
            className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500"
          >
            Hire me
          </a> */}
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                <i data-feather="activity"></i>
              </div>

              <h4 className="font-medium text-gray-700 text-lg mb-4">
                High experience
              </h4>

              <p className="font-normal text-gray-500 text-md">
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
                sed do eiusmod tempor <br /> incididunt ut labore et dolore
                magna aliqua.
              </p>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                <i data-feather="codesandbox"></i>
              </div>

              <h4 className="font-medium text-gray-700 text-lg mb-4">
                Useful sandboxes
              </h4>

              <p className="font-normal text-gray-500 text-md">
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
                sed do eiusmod tempor <br /> incididunt ut labore et dolore
                magna aliqua.
              </p>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                <i data-feather="coffee"></i>
              </div>

              <h4 className="font-medium text-gray-700 text-lg mb-4">
                Success side projects
              </h4>

              <p className="font-normal text-gray-500 text-md">
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
                sed do eiusmod tempor <br /> incididunt ut labore et dolore
                magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-12">
            <article>
              <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                <dl>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                    <time dateTime="2023-08-05T00:00:00.000Z">
                      August 5, 2023
                    </time>
                  </dd>
                </dl>
                <div className="space-y-5 xl:col-span-3">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl leading-8 font-bold tracking-tight">
                        <a
                          className="text-gray-900 dark:text-gray-100"
                          href="/blog/release-of-tailwind-nextjs-starter-blog-v2.0"
                        >
                          Release of Tailwind Nextjs Starter Blog v2.0
                        </a>
                      </h2>
                      <div className="flex flex-wrap">
                        <a
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mr-3 text-sm font-medium uppercase"
                          href="/tags/next-js"
                        >
                          next-js
                        </a>
                        <a
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mr-3 text-sm font-medium uppercase"
                          href="/tags/tailwind"
                        >
                          tailwind
                        </a>
                        <a
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mr-3 text-sm font-medium uppercase"
                          href="/tags/guide"
                        >
                          guide
                        </a>
                        <a
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mr-3 text-sm font-medium uppercase"
                          href="/tags/feature"
                        >
                          feature
                        </a>
                      </div>
                    </div>
                    <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                      Release of Tailwind Nextjs Starter Blog template v2.0,
                      refactored with Nextjs App directory and React Server
                      Components setup.Discover the new features and how to
                      migrate from V1.
                    </div>
                  </div>
                  <div className="text-base leading-6 font-medium">
                    <a
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      aria-label='Read more: "Release of Tailwind Nextjs Starter Blog v2.0"'
                      href="/blog/release-of-tailwind-nextjs-starter-blog-v2.0"
                    >
                      Read more →
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </li>
          <li className="py-12">
            <article>
              <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                <dl>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                    <time dateTime="2021-08-07T15:32:14.000Z">
                      August 7, 2021
                    </time>
                  </dd>
                </dl>
                <div className="space-y-5 xl:col-span-3">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl leading-8 font-bold tracking-tight">
                        <a
                          className="text-gray-900 dark:text-gray-100"
                          href="/blog/new-features-in-v1"
                        >
                          New features in v1
                        </a>
                      </h2>
                      <div className="flex flex-wrap">
                        <a
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mr-3 text-sm font-medium uppercase"
                          href="/tags/next-js"
                        >
                          next-js
                        </a>
                        <a
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mr-3 text-sm font-medium uppercase"
                          href="/tags/tailwind"
                        >
                          tailwind
                        </a>
                        <a
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mr-3 text-sm font-medium uppercase"
                          href="/tags/guide"
                        >
                          guide
                        </a>
                      </div>
                    </div>
                    <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                      An overview of the new features released in v1 - code
                      block copy, multiple authors, frontmatter layout and more
                    </div>
                  </div>
                  <div className="text-base leading-6 font-medium">
                    <a
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      aria-label='Read more: "New features in v1"'
                      href="/blog/new-features-in-v1"
                    >
                      Read more →
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </li>
          <li className="py-12">
            <article>
              <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                <dl>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                    <time dateTime="2021-05-02T00:00:00.000Z">May 2, 2021</time>
                  </dd>
                </dl>
                <div className="space-y-5 xl:col-span-3">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl leading-8 font-bold tracking-tight">
                        <a
                          className="text-gray-900 dark:text-gray-100"
                          href="/blog/nested-route/introducing-multi-part-posts-with-nested-routing"
                        >
                          Introducing Multi-part Posts with Nested Routing
                        </a>
                      </h2>
                      <div className="flex flex-wrap">
                        <a
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mr-3 text-sm font-medium uppercase"
                          href="/tags/multi-author"
                        >
                          multi-author
                        </a>
                        <a
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mr-3 text-sm font-medium uppercase"
                          href="/tags/next-js"
                        >
                          next-js
                        </a>
                        <a
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mr-3 text-sm font-medium uppercase"
                          href="/tags/feature"
                        >
                          feature
                        </a>
                      </div>
                    </div>
                    <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                      The blog template supports posts in nested sub-folders.
                      This can be used to group posts of similar content e.g. a
                      multi-part course. This post is itself an example of a
                      nested route!
                    </div>
                  </div>
                  <div className="text-base leading-6 font-medium">
                    <a
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      aria-label='Read more: "Introducing Multi-part Posts with Nested Routing"'
                      href="/blog/nested-route/introducing-multi-part-posts-with-nested-routing"
                    >
                      Read more →
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </li>
          <li className="py-12">
            <article>
              <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                <dl>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                    <time dateTime="2021-01-12T00:00:00.000Z">
                      January 12, 2021
                    </time>
                  </dd>
                </dl>
                <div className="space-y-5 xl:col-span-3">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl leading-8 font-bold tracking-tight">
                        <a
                          className="text-gray-900 dark:text-gray-100"
                          href="/blog/introducing-tailwind-nextjs-starter-blog"
                        >
                          Introducing Tailwind Nextjs Starter Blog
                        </a>
                      </h2>
                      <div className="flex flex-wrap">
                        <a
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mr-3 text-sm font-medium uppercase"
                          href="/tags/next-js"
                        >
                          next-js
                        </a>
                        <a
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mr-3 text-sm font-medium uppercase"
                          href="/tags/tailwind"
                        >
                          tailwind
                        </a>
                        <a
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mr-3 text-sm font-medium uppercase"
                          href="/tags/guide"
                        >
                          guide
                        </a>
                      </div>
                    </div>
                    <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                      Looking for a performant, out of the box template, with
                      all the best in web technology to support your blogging
                      needs? Checkout the Tailwind Nextjs Starter Blog template.
                    </div>
                  </div>
                  <div className="text-base leading-6 font-medium">
                    <a
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      aria-label='Read more: "Introducing Tailwind Nextjs Starter Blog"'
                      href="/blog/introducing-tailwind-nextjs-starter-blog"
                    >
                      Read more →
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </li>
          <li className="py-12">
            <article>
              <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                <dl>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                    <time dateTime="2020-12-21T00:00:00.000Z">
                      December 21, 2020
                    </time>
                  </dd>
                </dl>
                <div className="space-y-5 xl:col-span-3">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl leading-8 font-bold tracking-tight">
                        <a
                          className="text-gray-900 dark:text-gray-100"
                          href="/blog/deriving-ols-estimator"
                        >
                          Deriving the OLS Estimator
                        </a>
                      </h2>
                      <div className="flex flex-wrap">
                        <a
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mr-3 text-sm font-medium uppercase"
                          href="/tags/next-js"
                        >
                          next-js
                        </a>
                        <a
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mr-3 text-sm font-medium uppercase"
                          href="/tags/math"
                        >
                          math
                        </a>
                        <a
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mr-3 text-sm font-medium uppercase"
                          href="/tags/ols"
                        >
                          ols
                        </a>
                      </div>
                    </div>
                    <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                      How to derive the OLS Estimator with matrix notation and a
                      tour of math typesetting using markdown with the help of
                      KaTeX.
                    </div>
                  </div>
                  <div className="text-base leading-6 font-medium">
                    <a
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      aria-label='Read more: "Deriving the OLS Estimator"'
                      href="/blog/deriving-ols-estimator"
                    >
                      Read more →
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </li>
        </ul>
      </section>
      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="mb-10 lg:mb-0">
              <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
                Portfolio
              </h1>

              <p className="font-normal text-gray-500 text-xs md:text-base">
                I have brought here my biggest and favorite works <br /> as a
                professional.
              </p>
            </div>

            <div className="space-y-24">
              <div className="flex space-x-6">
                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
                  01
                </h1>

                <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>

                <div>
                  <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                    Demo API Generator
                  </h1>

                  <p className="font-normal text-gray-500 text-sm md:text-base">
                    A dummy data free and documented API generator to facilitate{" "}
                    <br /> the process of testing the front-end portion of
                    projects.
                  </p>
                </div>
              </div>

              <div className="flex space-x-6">
                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
                  02
                </h1>

                <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>

                <div>
                  <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                    Demo API Generator
                  </h1>

                  <p className="font-normal text-gray-500 text-sm md:text-base">
                    A dummy data free and documented API generator to facilitate{" "}
                    <br /> the process of testing the front-end portion of
                    projects.
                  </p>
                </div>
              </div>

              <div className="flex space-x-6">
                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
                  03
                </h1>

                <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>

                <div>
                  <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                    Demo API Generator
                  </h1>

                  <p className="font-normal text-gray-500 text-sm md:text-base">
                    A dummy data free and documented API generator to facilitate{" "}
                    <br /> the process of testing the front-end portion of
                    projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
            Education
          </h1>

          <p className="font-normal text-gray-500 text-xs md:text-base mb-20">
            Below is a summary of the places I studied
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <h4 className="font-medium text-gray-700 text-lg mb-4">
                2015 – 2016
              </h4>

              <p className="font-normal text-gray-500 text-md mb-4">
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
                sed do eiusmod tempor <br /> incididunt ut labore et dolore
                magna aliqua.
              </p>

              <div className="relative">
                <h6 className="font-semibold text-gray-500 text-md relative z-10">
                  See the place here
                </h6>
                <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
              </div>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <h4 className="font-medium text-gray-700 text-lg mb-4">
                2015 – 2016
              </h4>

              <p className="font-normal text-gray-500 text-md mb-4">
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
                sed do eiusmod tempor <br /> incididunt ut labore et dolore
                magna aliqua.
              </p>

              <div className="relative">
                <h6 className="font-semibold text-gray-500 text-md relative z-10">
                  See the place here
                </h6>
                <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
              </div>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <h4 className="font-medium text-gray-700 text-lg mb-4">
                2015 – 2016
              </h4>

              <p className="font-normal text-gray-500 text-md mb-4">
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
                sed do eiusmod tempor <br /> incididunt ut labore et dolore
                magna aliqua.
              </p>

              <div className="relative">
                <h6 className="font-semibold text-gray-500 text-md relative z-10">
                  See the place here
                </h6>
                <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
              </div>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <h4 className="font-medium text-gray-700 text-lg mb-4">
                2015 – 2016
              </h4>

              <p className="font-normal text-gray-500 text-md mb-4">
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
                sed do eiusmod tempor <br /> incididunt ut labore et dolore
                magna aliqua.
              </p>

              <div className="relative">
                <h6 className="font-semibold text-gray-500 text-md relative z-10">
                  See the place here
                </h6>
                <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
              </div>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <h4 className="font-medium text-gray-700 text-lg mb-4">
                2015 – 2016
              </h4>

              <p className="font-normal text-gray-500 text-md mb-4">
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
                sed do eiusmod tempor <br /> incididunt ut labore et dolore
                magna aliqua.
              </p>

              <div className="relative">
                <h6 className="font-semibold text-gray-500 text-md relative z-10">
                  See the place here
                </h6>
                <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
              </div>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <h4 className="font-medium text-gray-700 text-lg mb-4">
                2015 – 2016
              </h4>

              <p className="font-normal text-gray-500 text-md mb-4">
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
                sed do eiusmod tempor <br /> incididunt ut labore et dolore
                magna aliqua.
              </p>

              <div className="relative">
                <h6 className="font-semibold text-gray-500 text-md relative z-10">
                  See the place here
                </h6>
                <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center">
            <h1 className="font-normal text-gray-300 text-3xl md:text-6xl lg:text-7xl mb-20 md:mb-32 lg:mb-48">
              Please do not measure your skills in <br /> percentages!
            </h1>

            <p className="font-medium text-gray-700 text-xs md:text-base">
              In my many years of experience, I use @laravel for backend
              projects and @vuejs for <br /> front-end projects. I’m an avid
              programmer, so I create designs based on the <br /> weekend
              @figmadesign.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
            Experience
          </h1>

          <p className="font-normal text-gray-500 text-xs md:text-base mb-20">
            Below is a summary of the places I studied
          </p>

          <div className="flex flex-col lg:flex-row justify-between">
            <div className="space-y-8 md:space-y-16 mb-16 md:mb-0">
              <h6 className="font-medium text-gray-400 text-base uppercase">
                Company
              </h6>

              <p className="font-semibold text-gray-600 text-base">
                Massa Fames{" "}
                <span className="font-normal text-gray-300">/ New York</span>
              </p>

              <p className="font-semibold text-gray-600 text-base">
                Massa Fames{" "}
                <span className="font-normal text-gray-300">/ New York</span>
              </p>

              <p className="font-semibold text-gray-600 text-base">
                Massa Fames{" "}
                <span className="font-normal text-gray-300">/ New York</span>
              </p>

              <p className="font-semibold text-gray-600 text-base">
                Massa Fames{" "}
                <span className="font-normal text-gray-300">/ New York</span>
              </p>

              <p className="font-semibold text-gray-600 text-base">
                Massa Fames{" "}
                <span className="font-normal text-gray-300">/ New York</span>
              </p>
            </div>

            <div className="space-y-8 md:space-y-16 mb-16 md:mb-0">
              <h6 className="font-medium text-gray-400 text-base uppercase">
                Position
              </h6>

              <p className="font-normal text-gray-400 text-base">
                Junior Front-End Developer
              </p>

              <p className="font-normal text-gray-400 text-base">
                Junior Front-End Developer
              </p>

              <p className="font-normal text-gray-400 text-base">
                Junior Front-End Developer
              </p>

              <p className="font-normal text-gray-400 text-base">
                Junior Front-End Developer
              </p>

              <p className="font-normal text-gray-400 text-base">
                Junior Front-End Developer
              </p>
            </div>

            <div className="space-y-8 md:space-y-16">
              <h6 className="font-medium text-gray-400 text-base uppercase">
                Year
              </h6>

              <p className="font-normal text-gray-400 text-base">2016</p>

              <p className="font-normal text-gray-400 text-base">2016</p>

              <p className="font-normal text-gray-400 text-base">2016</p>

              <p className="font-normal text-gray-400 text-base">2016</p>

              <p className="font-normal text-gray-400 text-base">2016</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
            Brands
          </h1>

          <p className="font-normal text-gray-500 text-xs md:text-base mb-10 md:mb-20">
            Below is a summary of the places I studied
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <img src="assets/image/brand-1.png" alt="Image" />

            <img src="assets/image/brand-2.png" alt="Image" />

            <img src="assets/image/brand-3.png" alt="Image" />

            <img src="assets/image/brand-4.png" alt="Image" />

            <img src="assets/image/brand-5.png" alt="Image" />

            <img src="assets/image/brand-6.png" alt="Image" />
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
            Testimonial
          </h1>

          <p className="font-normal text-gray-500 text-xs md:text-base mb-10 md:mb-20">
            Below is a summary of the places I studied
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <p className="font-normal text-gray-500 text-md mb-4">
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
                sed do eiusmod tempor <br /> incididunt ut labore et dolore
                magna aliqua.
              </p>

              <h6 className="font-semibold text-gray-500 text-md">
                Stephan Clark{" "}
                <span className="font-medium text-gray-300 text-sm">
                  - CEO at EarlyBird
                </span>
              </h6>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <p className="font-normal text-gray-500 text-md mb-4">
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
                sed do eiusmod tempor <br /> incididunt ut labore et dolore
                magna aliqua.
              </p>

              <h6 className="font-semibold text-gray-500 text-md">
                Stephan Clark{" "}
                <span className="font-medium text-gray-300 text-sm">
                  - CEO at EarlyBird
                </span>
              </h6>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <p className="font-normal text-gray-500 text-md mb-4">
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
                sed do eiusmod tempor <br /> incididunt ut labore et dolore
                magna aliqua.
              </p>

              <h6 className="font-semibold text-gray-500 text-md">
                Stephan Clark{" "}
                <span className="font-medium text-gray-300 text-sm">
                  - CEO at EarlyBird
                </span>
              </h6>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <p className="font-normal text-gray-500 text-md mb-4">
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
                sed do eiusmod tempor <br /> incididunt ut labore et dolore
                magna aliqua.
              </p>

              <h6 className="font-semibold text-gray-500 text-md">
                Stephan Clark{" "}
                <span className="font-medium text-gray-300 text-sm">
                  - CEO at EarlyBird
                </span>
              </h6>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <p className="font-normal text-gray-500 text-md mb-4">
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
                sed do eiusmod tempor <br /> incididunt ut labore et dolore
                magna aliqua.
              </p>

              <h6 className="font-semibold text-gray-500 text-md">
                Stephan Clark{" "}
                <span className="font-medium text-gray-300 text-sm">
                  - CEO at EarlyBird
                </span>
              </h6>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <p className="font-normal text-gray-500 text-md mb-4">
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
                sed do eiusmod tempor <br /> incididunt ut labore et dolore
                magna aliqua.
              </p>

              <h6 className="font-semibold text-gray-500 text-md">
                Stephan Clark{" "}
                <span className="font-medium text-gray-300 text-sm">
                  - CEO at EarlyBird
                </span>
              </h6>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 md:py-16 mb-20 md:mb-40 lg::mb-52">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center">
            <h1 className="font-medium text-gray-700 text-4xl md:text-5xl mb-5">
              Testimonial
            </h1>

            <p className="font-normal text-gray-400 text-md md:text-lg mb-20">
              I’m not currently taking on new client work but feel free to
              contact me for any <br /> other inquiries.
            </p>

            <div className="flex items-center justify-center space-x-8">
              <a
                href="#"
                className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500"
              >
                <i
                  data-feather="twitter"
                  className="text-gray-500 hover:text-gray-800 transition ease-in-out duration-500"
                ></i>
              </a>

              <a
                href="#"
                className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500"
              >
                <i
                  data-feather="dribbble"
                  className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500"
                ></i>
              </a>

              <a
                href="#"
                className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500"
              >
                <i
                  data-feather="facebook"
                  className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500"
                ></i>
              </a>

              <a
                href="#"
                className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500"
              >
                <i
                  data-feather="codepen"
                  className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500"
                ></i>
              </a>

              <a
                href="#"
                className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500"
              >
                <i
                  data-feather="at-sign"
                  className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500"
                ></i>
              </a>

              <a
                href="#"
                className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500"
              >
                <i
                  data-feather="instagram"
                  className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500"
                ></i>
              </a>
            </div>
          </div>
        </div>
      </footer>

      
    </div>
  );
}

export default Container;
