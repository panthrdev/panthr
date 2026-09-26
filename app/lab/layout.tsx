import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI Mechanics & Component Lab | panthr.dev",
  description:
    "A curated laboratory of design-engineered, production-ready React UI components crafted with Framer Motion spring physics, Swiss typography, and tactile micro-interactions.",
  keywords: [
    "UI Components",
    "Framer Motion",
    "React Testimonials",
    "Card Stack",
    "Micro-interactions",
    "Design Engineering",
    "Tailwind CSS",
    "panthr.dev",
    "card-01",
  ],
  authors: [{ name: "panthr.dev", url: "https://panthr.dev" }],
  creator: "panthr.dev",
  openGraph: {
    title: "UI Mechanics & Component Lab | panthr.dev",
    description:
      "A curated laboratory of design-engineered, production-ready React UI components crafted with Framer Motion spring physics.",
    url: "https://panthr.dev/lab",
    siteName: "panthr.dev",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://panthr.dev/logo.webp",
        width: 800,
        height: 600,
        alt: "panthr.dev UI Laboratory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UI Mechanics & Component Lab | panthr.dev",
    description:
      "A curated laboratory of design-engineered, production-ready React UI components crafted with Framer Motion spring physics.",
    creator: "@panthrDev",
  },
};

export default function LabLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "panthr.dev UI Mechanics & Component Lab",
    url: "https://panthr.dev/lab",
    description:
      "A curated laboratory of design-engineered, production-ready React UI components crafted with Framer Motion spring physics.",
    creator: {
      "@type": "Organization",
      name: "panthr.dev",
      url: "https://panthr.dev",
    },
    hasPart: [
      {
        "@type": "SoftwareSourceCode",
        name: "Fluid Testimonial Card Stack (card-01)",
        programmingLanguage: "TypeScript",
        codeRepository: "https://github.com/panthrdev/panthr",
        description:
          "Layered social proof & testimonial cards that smoothly fan out on hover with physical spring damping, featuring flush corner portrait photography, verified partner metadata, and Swiss typography.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
