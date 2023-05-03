import Link from "next/link";
import React, { ReactElement } from "react";

interface JorneyPoint {
  title: string;
  startDate: Date;
  endDate?: Date;
  description: ReactElement;
  hasLink: boolean;
  href?: string;
  linkType?: "internal" | "external";
}

const journeyPoints: JorneyPoint[] = [
  {
    title: "Software Engineer @ GSK",
    startDate: new Date(2022, 0),
    description: (
      <p className="text-base font-normal dark:text-gray-400">
        I started to work in GSK R&D Tech
      </p>
    ),
    hasLink: false,
  },
  {
    title: "Moved to Poland 🇵🇱",
    startDate: new Date(2021, 8),
    description: (
      <p className="text-base font-normal dark:text-gray-400">
        I made a tough call, and moved to{" "}
        <span className="font-semibold">Poland</span> to follow an academic path
        in my passion –– <span className="font-semibold">technology</span>.
        I&apos;m currently studying{" "}
        <span className="font-semibold dark:text-gray-200">
          Information Technology
        </span>{" "}
        for a Bachelor of Engineering degree.
      </p>
    ),
    hasLink: false,
  },
  {
    title: "First Bachelor's Degree",
    startDate: new Date(2021, 5),
    description: (
      <p className="text-base font-normal dark:text-gray-400">
        I have completed my studies on English Translation and Interpration with
        a <span className="text-cyan-300 font-semibold">GPA of 3.25</span>
      </p>
    ),
    hasLink: false,
  },
  {
    title: "Sofware Developer Intern @ Modanisa",
    startDate: new Date(2020, 9),
    endDate: new Date(2021, 7),
    description: (
      <p className="text-base font-normal dark:text-gray-400">
        I contributed to Modanisa&apos;s digital transformation journey from a
        monolith architecture to{" "}
        <span
          className=" font-semibold
          text-sky-500 dark:text-cyan-300"
        >
          Go
        </span>{" "}
        micro-services and{" "}
        <span className="text-sky-500 dark:text-cyan-300 font-semibold">
          Vue
        </span>{" "}
        micro-frontends in{" "}
        <span className="text-sky-500 dark:text-cyan-300 font-semibold">
          Search & Listing
        </span>{" "}
        domain to improve customer retention and revenu streams
      </p>
    ),
    hasLink: true,
    linkType: "internal",
    href: "/posts/almost-one-year-at-modanisa",
  },
  {
    title: "Successfully completed a software bootcamp",
    startDate: new Date(2020, 0),
    endDate: new Date(2020, 8),
    description: (
      <p className="text-base font-normal dark:text-gray-400">
        I laid a foundation for my software career by focusing on{" "}
        <span className="text-sky-500 dark:text-cyan-300 font-semibold ">
          ASP.NET MVC Web Apps
        </span>
        ,{" "}
        <span className="text-sky-500 dark:text-cyan-300 font-semibold ">
          HTML5
        </span>
        ,{" "}
        <span className="text-sky-500 dark:text-cyan-300 font-semibold ">
          CSS
        </span>
        , and{" "}
        <span className="text-sky-500 dark:text-cyan-300 font-semibold ">
          JavaScript
        </span>
      </p>
    ),
    hasLink: false,
  },
];

const MyJourney = () => {
  return (
    <div className="flex flex-col items-center xl:items-start gap-4 divide-y-2 justify-center xl:h-full xl:max-w-4xl mx-auto">
      <div className="flex items-center gap-2">
        <Link
          href="/"
          className="p-2 rounded-md font-semibold bg-miowhite-50 hover:bg-cyan-50 dark:bg-miogray-100 dark:hover:bg-miogray-50"
        >
          Homepage
        </Link>
        <span>/</span>
        <h2 className="font-semibold">My Journey</h2>
      </div>
      <div className="pt-4">
        <ol className="relative border-l border-x-miogray-50 dark:border-x-miowhite-50">
          {journeyPoints.map((j, i) => (
            <li key={i} className="ml-4 my-4">
              <div className="absolute w-2 h-2 bg-miogray-100 rounded-full mt-2 -left-[0.275rem]  dark:bg-miowhite-50"></div>
              <div className="flex items-center gap-2 divide-x divide-gray-400">
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {j.startDate.toLocaleDateString("en", {
                    year: "numeric",
                    month: "long",
                  })}
                </time>
                {j.endDate ? (
                  <>
                    <time className="pl-2 mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      {j.endDate.toLocaleDateString("en", {
                        year: "numeric",
                        month: "long",
                      })}
                    </time>
                  </>
                ) : null}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {j.title}
              </h3>
              {j.description}
              {j.hasLink ? (
                j.linkType === "internal" ? (
                  <Link
                    className="inline-flex items-center p-2 mt-2 rounded-md bg-sky-100 hover:bg-sky-50 dark:bg-miogray-100 dark:hover:bg-miogray-50 font-semibold"
                    href={j.href!}
                  >
                    See more here
                  </Link>
                ) : j.linkType === "external" ? (
                  <a
                    className="inline-flex items-center p-2 mt-2 rounded-md bg-miowhite-50 hover:bg-cyan-50 dark:bg-miogray-100 dark:hover:bg-miogray-50 font-semibold"
                    href={j.href!}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See more here
                  </a>
                ) : null
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default MyJourney;
