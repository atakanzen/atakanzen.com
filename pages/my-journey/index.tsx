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
      <p className="text-base font-normal">
        I&apos;m contributing to GSK&apos;s various R&D Tech projects with{" "}
        <span className="font-semibold">React</span> and{" "}
        <span className="font-semibold">ASP.NET Web API</span> technologies{" "}
      </p>
    ),
    hasLink: false,
  },
  {
    title: "Moved to Poland",
    startDate: new Date(2021, 8),
    description: (
      <p className="text-base font-normal ">
        I made a tough call, and moved to Poland to follow an academic path in
        my passion –– technology. I&apos;m currently studying{" "}
        <span className="font-semibold">Information Technology</span> for a
        Bachelor of Engineering degree.
      </p>
    ),
    hasLink: false,
  },
  {
    title: "First Bachelor's Degree",
    startDate: new Date(2021, 5),
    description: (
      <p className="text-base font-normal ">
        I have completed my studies in English Translation and Interpration with
        a <span className="font-semibold">GPA of 3.25</span>, enabling me with
        exceptional communication skills.
      </p>
    ),
    hasLink: false,
  },
  {
    title: "Sofware Developer Intern @ Modanisa",
    startDate: new Date(2020, 9),
    endDate: new Date(2021, 7),
    description: (
      <p className="text-base font-normal ">
        I contributed to Modanisa&apos;s digital transformation journey from a
        monolith architecture to{" "}
        <span className="font-semibold">Go micro-services</span> and{" "}
        <span className="font-semibold">Vue micro-frontends</span> in{" "}
        <span className="font-semibold">Search & Listing</span> domain to
        improve customer retention and revenu streams
      </p>
    ),
    hasLink: true,
    linkType: "internal",
    href: "/blog/almost-one-year-at-modanisa",
  },
  {
    title: "Successfully completed a software bootcamp",
    startDate: new Date(2020, 0),
    endDate: new Date(2020, 8),
    description: (
      <p className="text-base font-normal ">
        I laid a foundation for my software career by focusing on{" "}
        <span className="font-semibold ">ASP.NET MVC Web Apps</span>,{" "}
        <span className="font-semibold ">HTML5</span>,{" "}
        <span className="font-semibold ">CSS</span>, and{" "}
        <span className="font-semibold ">JavaScript</span>
      </p>
    ),
    hasLink: false,
  },
];

const MyJourney = () => {
  return (
    <div className="flex flex-col items-start gap-4 divide-y-2 justify-center xl:h-full xl:max-w-4xl mx-auto">
      <div className="flex items-center justify-start gap-2 font-semibold">
        <Link href="/" className="underline underline-offset-2 font-semibold">
          Homepage
        </Link>
        <span>/</span>
        <h2>My Journey</h2>
      </div>
      <div className="pt-4">
        <ol className="relative border-l border-neutral-300">
          {journeyPoints.map((j, i) => (
            <li key={i} className="ml-4 my-4">
              <div className="absolute w-2 h-2 bg-neutral-300 rounded-full mt-0.5 -left-[0.275rem]"></div>
              <div className="flex items-center gap-2 divide-x divide-neutral-400">
                <time className="mb-1 text-sm font-normal leading-none text-neutral-500">
                  {j.startDate.toLocaleDateString("en", {
                    year: "numeric",
                    month: "long",
                  })}
                </time>
                {j.endDate ? (
                  <>
                    <time className="pl-2 mb-1 text-sm font-normal leading-none text-neutral-500 ">
                      {j.endDate.toLocaleDateString("en", {
                        year: "numeric",
                        month: "long",
                      })}
                    </time>
                  </>
                ) : null}
              </div>
              <h3 className="text-lg font-semibold">{j.title}</h3>
              <p className="text-neutral-400">{j.description}</p>
              {j.hasLink ? (
                j.linkType === "internal" ? (
                  <Link
                    className="inline-flex items-center underline mt-2  font-semibold"
                    href={j.href!}
                  >
                    See more here
                  </Link>
                ) : j.linkType === "external" ? (
                  <a
                    className="inline-flex items-center underline mt-2 font-semibold"
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
