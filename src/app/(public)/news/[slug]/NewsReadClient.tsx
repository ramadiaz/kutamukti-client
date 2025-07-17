"use client";
import PageHeader from "@/components/PageHeader";
import { ENV } from "@/lib/environment";
import { News } from "@/types/news";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const NewsRead = dynamic(() => import("@/components/NewsRead"), {
    ssr: false
});

export default function NewsReadClient({ slug }: { slug: string }) {
    const [newsData, setNewsData] = useState<News>();

    const fetchData = async () => {
        try {
            const res = await fetch(ENV.BASE_API + `/news/${slug}`);
            if (res.ok) {
                const data = await res.json();
                setNewsData(data.body as News);
            }
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slug]);

    if (!newsData) return null;

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "NewsArticle",
                        "headline": newsData.title,
                        "description": newsData.raw_text?.slice(0, 160),
                        "datePublished": newsData.created_at,
                        "author": {
                            "@type": "Person",
                            "name": newsData.author || "Desa Kutamukti"
                        },
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": `https://kutamukti.com/news/${newsData.slug}`
                        },
                        "image": newsData.image_url || "https://kutamukti.com/default-og-image.jpg"
                    })
                }}
            />
            <div>
                <PageHeader
                    title={newsData?.title}
                    isTitleOnly
                    breadCrumbs={["Berita Desa Kutamukti"]}
                />
                <div className='h-8' />
                <NewsRead data={newsData} />
            </div>
        </>
    );
} 