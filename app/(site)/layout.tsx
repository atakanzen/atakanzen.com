import Navigation from "@/components/Navigation";
import { nudica } from "@/fonts";

import "@/styles/globals.css";
import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "rgb(248, 250, 252)" },
    { media: "(prefers-color-scheme: dark)", color: "rgb(7, 7, 32)" },
  ],
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nudica.className}>
        <Navigation />
        <main className="pt-20 md:pt-24 h-dvh px-8">{children}</main>
      </body>
    </html>
  );
}
