import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { inter } from "./fonts";

export const metadata: Metadata = {
  title: "NanoFluencer - Connect with Micro-Influencers in India",
  description:
    "Join India's premier platform for nano and micro-influencers. Connect with brands, grow your influence, and monetize your content.",
  keywords:
    "influencers, micro-influencers, nano-influencers, India, social media, Instagram, YouTube, Facebook",
  openGraph: {
    title: "NanoFluencer - Connect with Micro-Influencers in India",
    description:
      "Join India's premier platform for nano and micro-influencers.",
    url: "https://NanoFluencer.com",
    siteName: "NanoFluencer",
    type: "website",
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
        <Providers />
        {children}
      </body>
    </html>
  );
}
