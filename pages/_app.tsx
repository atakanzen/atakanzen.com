import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

const gtagId = process.env.NEXT_PUBLIC_GTAG_ID;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Google Tag */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gtagId}');
      `}
      </Script>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
