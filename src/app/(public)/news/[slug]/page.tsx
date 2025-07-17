import { Metadata } from "next";
import NewsReadClient from "./NewsReadClient";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API || "https://api.kutamukti.id/api"}/news/${params.slug}`);
  if (!res.ok) return { title: "Berita Desa Kutamukti" };
  const data = await res.json();
  const news = data.body;
  return {
    title: news?.title || "Berita Desa Kutamukti",
    description: news?.raw_text?.slice(0, 160) || "Detail berita Desa Kutamukti.",
    openGraph: {
      title: news?.title,
      description: news?.raw_text?.slice(0, 160),
      type: "article",
      url: `https://kutamukti.id/news/${params.slug}`,
      images: [news?.image_url || "https://kutamukti.id/default-og-image.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: news?.title,
      description: news?.raw_text?.slice(0, 160),
      images: [news?.image_url || "https://kutamukti.id/default-og-image.jpg"],
    },
    alternates: {
      canonical: `https://kutamukti.id/news/${params.slug}`,
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
      },
    },
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function NewsReadPage({ params }: any) {
  return <NewsReadClient slug={params.slug} />;
}