import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainProviders from "@/providers";
import { Analytics } from "@vercel/analytics/next";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kutamukti - Web Resmi Desa Kutamukti Karawang",
  description:
    "Kutamukti adalah desa di Kecamatan Kutawaluya, Karawang. Temukan informasi resmi, berita, dan layanan Desa Kutamukti di sini.",
  keywords: [
    "kutamukti",
    "desa kutamukti",
    "kutawaluya",
    "karawang",
    "web resmi kutamukti",
    "informasi desa kutamukti",
    "pemerintahan desa kutamukti"
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://kutamukti.id/",
  },
  openGraph: {
    title: "Kutamukti - Web Resmi Desa Kutamukti Karawang",
    description:
      "Kutamukti adalah desa di Kecamatan Kutawaluya, Karawang. Temukan informasi resmi, berita, dan layanan Desa Kutamukti di sini.",
    url: "https://kutamukti.id/",
    siteName: "Web Resmi Desa Kutamukti",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kutamukti - Web Resmi Desa Kutamukti Karawang",
    description:
      "Kutamukti adalah desa di Kecamatan Kutawaluya, Karawang. Temukan informasi resmi, berita, dan layanan Desa Kutamukti di sini.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "GovernmentOrganization",
              "name": "Desa Kutamukti",
              "url": "https://kutamukti.id/",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kutamukti",
                "addressRegion": "Karawang",
                "addressCountry": "ID"
              },
              "description": "Web resmi Desa Kutamukti, Kecamatan Kutawaluya, Karawang. Informasi, berita, dan layanan desa."
            })
          }}
        />
      </head>
      <body
        className={`${poppins.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <MainProviders>{children}</MainProviders>
        <Analytics/>
      </body>
    </html>
  );
}
