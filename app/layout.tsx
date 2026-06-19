import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const SITE_URL = "https://oxresidencial.mx";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "OX Residencial | Smart Living en Dzityá, Mérida",
  description:
    "Residencias boutique en Dzityá, Mérida que integran tecnología, seguridad y eficiencia. Donde la tecnología se convierte en calidad de vida. Agenda tu visita.",
  keywords: [
    "OX Residencial",
    "casas inteligentes Mérida",
    "smart home Dzityá",
    "residencias boutique Mérida",
    "OSTECH Desarrolladora",
    "casas en venta Mérida",
  ],
  openGraph: {
    title: "OX Residencial | Smart Living en Dzityá, Mérida",
    description:
      "Residencias boutique que integran tecnología, seguridad y eficiencia. Una nueva forma de vivir en Mérida.",
    type: "website",
    locale: "es_MX",
    siteName: "OX Residencial",
    images: [{ url: "/renders/fachada-principal.webp", width: 2000, height: 1333 }],
  },
  alternates: { canonical: SITE_URL },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${outfit.variable} ${inter.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
