import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | NanoFluencer",
  description: "Read the NanoFluencer terms of service.",
  openGraph: {
    title: "Terms of Service | NanoFluencer",
    description: "Read the NanoFluencer terms of service.",
    images: [
      {
        url: "/og-terms.png",
        width: 1200,
        height: 630,
        alt: "NanoFluencer Terms of Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | NanoFluencer",
    description: "Read the NanoFluencer terms of service.",
    images: ["/og-terms.png"],
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
