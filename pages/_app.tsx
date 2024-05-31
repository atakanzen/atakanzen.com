import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`container mx-auto px-4 h-screen`}>
      <Component {...pageProps} />
    </div>
  );
}
