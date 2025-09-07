import { TargetAndTransition, Transition, VariantLabels } from "motion/react";
import { Languages } from "next/dist/lib/metadata/types/alternative-urls-types";

export type Sitemap = Array<{
  url: string;
  lastModified?: string | Date;
  changeFrequency?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
  alternates?: {
    languages?: Languages<string>;
  };
}>;

export type MotionAnimation = Partial<{
  animate: boolean | TargetAndTransition | VariantLabels | undefined;
  exit: TargetAndTransition | VariantLabels | undefined;
  initial: boolean | TargetAndTransition | VariantLabels | undefined;
  transition: Transition;
}>;
