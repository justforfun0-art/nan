import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact NanoFluencer",
  description:
    "Contact NanoFluencer to connect influencers with brands and agencies or to launch a campaign.",
  openGraph: {
    title: "Contact NanoFluencer",
    description:
      "Contact NanoFluencer to connect influencers with brands and agencies or to launch a campaign.",
    images: [
      {
        url: "/og-contact.png",
        width: 1200,
        height: 630,
        alt: "Contact NanoFluencer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact NanoFluencer",
    description:
      "Contact NanoFluencer to connect influencers with brands and agencies or to launch a campaign.",
    images: ["/og-contact.png"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
