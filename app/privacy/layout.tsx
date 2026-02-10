import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | NanoFluencer",
  description: "Read the NanoFluencer privacy policy and how we handle data.",
  openGraph: {
    title: "Privacy Policy | NanoFluencer",
    description: "Read the NanoFluencer privacy policy and how we handle data.",
    images: [
      {
        url: "/og-privacy.png",
        width: 1200,
        height: 630,
        alt: "NanoFluencer Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | NanoFluencer",
    description: "Read the NanoFluencer privacy policy and how we handle data.",
    images: ["/og-privacy.png"],
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
