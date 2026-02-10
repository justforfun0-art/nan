type BreadcrumbItem = {
  name: string;
  url: string;
};

const baseUrl = "https://www.nanofluencer.com";

export default function SeoWebPageJsonLd({
  path,
  title,
  description,
  breadcrumbs,
}: {
  path: string;
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
}) {
  const url = `${baseUrl}${path}`;
  const webpageId = `${url}#webpage`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": webpageId,
      url,
      name: title,
      description,
      isPartOf: {
        "@id": `${baseUrl}#website`,
      },
      publisher: {
        "@id": `${baseUrl}#organization`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${baseUrl}/og.png`,
        width: 1200,
        height: 630,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: crumb.url,
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
