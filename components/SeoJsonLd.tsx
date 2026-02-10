const baseUrl = "https://www.nanofluencer.com";

export default function SeoJsonLd() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${baseUrl}#organization`,
      name: "NanoFluencer",
      url: baseUrl,
      logo: `${baseUrl}/logo.png`,
      description:
        "NanoFluencer connects influencers with brands and agencies. Earn money by posting on Instagram and monetize your content.",
      sameAs: ["https://www.instagram.com/nanofluencermedia"],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${baseUrl}#website`,
      name: "NanoFluencer",
      url: baseUrl,
      publisher: {
        "@id": `${baseUrl}#organization`,
      },
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
