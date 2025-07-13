'use client'

import PageHeader from '@/components/PageHeader'
import VideoPlayer from '@/components/VideoPlayer'
import { ENV } from '@/lib/environment'
import { VideoTypes } from '@/types/videos'
import React, { use, useEffect, useState } from 'react'

const VideoPlayerPage = ({
    params
}: {
    params: Promise<{ uuid: string }>
}) => {
    const [videoData, setVideoData] = useState<VideoTypes>()
    const { uuid } = use(params)

    const fetchData = async () => {
        try {
            const res = await fetch(ENV.BASE_API + `/gallery/video/${uuid}`)
            if (res.ok) {
                const data = await res.json()
                setVideoData(data.body as VideoTypes)
            }
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    if (!videoData) return null

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
    )
}

export default VideoPlayerPage