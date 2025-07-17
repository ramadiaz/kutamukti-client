import { Metadata } from "next";
import NewsReadClient from "./NewsReadClient";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API || "https://api.kutamukti.com"}/news/${params.slug}`);
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
      url: `https://kutamukti.com/news/${params.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: news?.title,
      description: news?.raw_text?.slice(0, 160),
    },
  };
}

export default function NewsReadPage({ params }: { params: { slug: string } }) {
  return <NewsReadClient slug={params.slug} />;
}