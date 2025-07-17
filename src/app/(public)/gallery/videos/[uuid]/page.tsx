import { Metadata } from "next";
import VideoPlayerClient from "./VideoPlayerClient";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API || "https://api.kutamukti.id/api"}/gallery/video/${params.uuid}`);
  if (!res.ok) return { title: "Galeri Video Desa Kutamukti" };
  const data = await res.json();
  const video = data.body;
  return {
    title: video?.title || "Galeri Video Desa Kutamukti",
    description: video?.description?.slice(0, 160) || "Detail video Desa Kutamukti.",
    openGraph: {
      title: video?.title,
      description: video?.description?.slice(0, 160),
      type: "video.other",
      url: `https://kutamukti.id/gallery/videos/${params.uuid}`,
    },
    twitter: {
      card: "summary_large_image",
      title: video?.title,
      description: video?.description?.slice(0, 160),
    },
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function VideoPlayerPage({ params } : any) {
  return <VideoPlayerClient uuid={params.uuid} />;
}