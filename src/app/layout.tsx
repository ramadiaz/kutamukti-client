import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainProviders from "@/providers";

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
      </body>
    </html>
  );
}
