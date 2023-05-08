export const HOST =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://new.atakanzen.com";

export const getOpenGraphImage = (title: string) => {
  return {
    url: `${HOST}/api/opengraph?title=${encodeURIComponent(title)}`,
    width: 1200,
    height: 630,
  };
};
