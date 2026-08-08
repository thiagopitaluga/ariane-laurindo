import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ariane-laurindo.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ariane Laurindo | Imóveis em Alphaville e Barueri",
    template: "%s | Ariane Laurindo",
  },
  description:
    "Consultoria imobiliária RE/MAX para comprar, vender ou investir em casas, apartamentos e terrenos em Alphaville, Barueri e região.",
  keywords: [
    "corretora de imóveis Alphaville",
    "consultora imobiliária Alphaville",
    "imóveis em Alphaville",
    "casas em Alphaville",
    "apartamentos em Barueri",
    "terrenos em Alphaville",
    "RE/MAX Alphaville",
    "Ariane Laurindo",
  ],
  authors: [{ name: "Ariane Laurindo" }],
  creator: "Ariane Laurindo",
  publisher: "Ariane Laurindo",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Ariane Laurindo | Consultora Imobiliária",
    title: "Ariane Laurindo | Imóveis em Alphaville & Barueri",
    description: "Consultoria imobiliária com estratégia, curadoria e atendimento pessoal.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Ariane Laurindo, consultora imobiliária em Alphaville e Barueri" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ariane Laurindo | Imóveis em Alphaville & Barueri",
    description: "Consultoria imobiliária com estratégia, curadoria e atendimento pessoal.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
