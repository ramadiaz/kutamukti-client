import { Metadata } from "next";
import VideoPlayerClient from "./VideoPlayerClient";

export async function generateMetadata({ params }: { params: { uuid: string } }): Promise<Metadata> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API || "https://api.kutamukti.com"}/gallery/video/${params.uuid}`);
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
      url: `https://kutamukti.com/gallery/videos/${params.uuid}`,
    },
    twitter: {
      card: "summary_large_image",
      title: video?.title,
      description: video?.description?.slice(0, 160),
    },
  };
}

export default function VideoPlayerPage({ params }: { params: { uuid: string } }) {
  return <VideoPlayerClient uuid={params.uuid} />;
}