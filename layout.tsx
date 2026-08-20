import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Weby Major",
  description: "Profesionální webové stránky, grafika a propagace pro firmy a živnostníky. Individuální design, přímá komunikace a jasný obchodní cíl.",
  metadataBase: new URL("https://weby-major.miskusmajor.chatgpt.site"),
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Weby Major — weby, které posunou značku",
    description: "Profesionální webové stránky, grafika a propagace pro firmy a živnostníky.",
    url: "/",
    siteName: "Weby Major",
    locale: "cs_CZ",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Weby Major — weby, které posunou značku" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Weby Major — weby, které posunou značku",
    description: "Profesionální webové stránky, grafika a propagace pro firmy a živnostníky.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
