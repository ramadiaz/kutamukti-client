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
  title: "Web Resmi Desa Kuatmukti",
  description:
    "Desa Kutamukti Merupakan salah satu desa dari dua belas desa yang ada di Kecamatan Kutawaluya Kabupaten Karawang",
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
    title: "Web Resmi Desa Kuatmukti",
    description:
      "Desa Kutamukti Merupakan salah satu desa dari dua belas desa yang ada di Kecamatan Kutawaluya Kabupaten Karawang",
    url: "https://kutamukti.id/",
    siteName: "Web Resmi Desa Kuatmukti",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Resmi Desa Kuatmukti",
    description:
      "Desa Kutamukti Merupakan salah satu desa dari dua belas desa yang ada di Kecamatan Kutawaluya Kabupaten Karawang",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <MainProviders>{children}</MainProviders>
        <Analytics/>
      </body>
    </html>
  );
}
