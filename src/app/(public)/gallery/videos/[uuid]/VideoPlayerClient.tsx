"use client";
import PageHeader from '@/components/PageHeader';
import VideoPlayer from '@/components/VideoPlayer';
import { ENV } from '@/lib/environment';
import { VideoTypes } from '@/types/videos';
import { useEffect, useState } from 'react';

export default function VideoPlayerClient({ uuid }: { uuid: string }) {
    const [videoData, setVideoData] = useState<VideoTypes>();

    const fetchData = async () => {
        try {
            const res = await fetch(ENV.BASE_API + `/gallery/video/${uuid}`);
            if (res.ok) {
                const data = await res.json();
                setVideoData(data.body as VideoTypes);
            }
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [uuid]);

    if (!videoData) return null;

    return (
        <div>
            <PageHeader
                title={videoData.title}
                isTitleOnly
                breadCrumbs={["Berita Desa Kutamukti"]}
            />
            <div className='h-8' />
            <VideoPlayer data={videoData} />
        </div>
    );
} 