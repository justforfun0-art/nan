import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { inter } from "./fonts";
import SeoJsonLd from "@/components/SeoJsonLd";

export const metadata: Metadata = {
  title: "NanoFluencer - Connect Influencers with Brands",
  description:
    "NanoFluencer connects influencers with brands and agencies. Earn money by posting on Instagram, grow your influence, and monetize your content.",
  keywords:
    "connect influencers with brands, earn money by posting on Instagram, brand agency, influencers, micro-influencers, nano-influencers, social media, Instagram, YouTube, Facebook",
  metadataBase: new URL("https://www.nanofluencer.com"),
  alternates: {
    canonical: "/",
  },
  applicationName: "NanoFluencer",
  openGraph: {
    title: "NanoFluencer - Connect Influencers with Brands",
    description:
      "Connect influencers with brands and agencies. Earn money by posting on Instagram.",
    url: "https://www.nanofluencer.com",
    siteName: "NanoFluencer",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "NanoFluencer - Connect influencers with brands",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NanoFluencer - Connect Influencers with Brands",
    description:
      "Connect influencers with brands and agencies. Earn money by posting on Instagram.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <SeoJsonLd />
          {children}
        </Providers>
      </body>
    </html>
  );
}
