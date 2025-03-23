import { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: (props: any) => (
      <>
        <a {...props} target="_blank" rel="noreferrer" />
        <span className="inline-flex -z-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-3.5 h-3.5 relative top-0 right-0 text-current -z-50"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </span>
      </>
    ),
    img: (props: any) => (
      <Image
        className="w-full h-auto"
        width={0}
        height={0}
        sizes="100vw"
        {...(props as ImageProps)}
      />
    ),
    ...components,
  };
}
