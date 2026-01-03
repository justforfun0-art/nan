import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { inter } from "./fonts";

export const metadata: Metadata = {
  title: "Nanofluencer - The Micro-Influencer Marketplace",
  description: "Connect with brands and earn money as a nano or micro-influencer in India. Join thousands of creators.",
  keywords: "influencers, micro-influencers, nano-influencers, India, social media, Instagram, YouTube, Facebook",
  openGraph: {
    title: "Nanofluencer - The Micro-Influencer Marketplace",
    description: "Connect with brands and earn money as a nano or micro-influencer in India.",
    url: "https://nanofluencer.com",
    siteName: "Nanofluencer",
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
