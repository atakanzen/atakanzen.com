import Navigation from "@/components/Navigation";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navigation />
      <div className={`container pt-14 md:pt-20 mx-auto px-4 h-screen`}>
        <Component {...pageProps} />
      </div>
    </div>
  );
}
