'use client'

import { ENV } from "@/lib/environment"
import { VideoTypes } from "@/types/videos"
import { Card, CardBody, CardFooter, Image } from "@heroui/react"
import { PlayIcon } from "@phosphor-icons/react"
import Link from "next/link"
import { useEffect, useState } from "react"

const VideoGallery = () => {
    const [videoData, setVideoData] = useState<VideoTypes[]>([])

    const fetchData = async () => {
        try {
            const res = await fetch(ENV.BASE_API + `/gallery/video/getall`, {
                method: "GET",
                cache: "no-store"
            })

            if (res.ok) {
                const data = await res.json()
                setVideoData(data.body as VideoTypes[])
            }
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="max-w-6xl mx-auto py-16">
            <div className="flex flex-wrap gap-4">
                {
                    videoData.map((item, i) => {
                        return (
                            <VideoCard key={i} data={item} />
                        )
                    })
                }

            </div>
        </div>
    )
}

export const VideoCard = ({ data }: { data: VideoTypes }) => {
    return (
        <Card className="py-4 w-[300px]" as={Link} href={`/gallery/videos/` + data.uuid}>
            <CardBody className="overflow-visible pt-0">
                <div className="relative">
                    <Image
                        alt="Card background"
                        className="object-cover rounded-xl aspect-video"
                        src={data.thumbnail_url}
                        width={270}
                    />
                    <div className="absolute z-10 inset-0 text-white flex justify-center items-center">
                        <PlayIcon size={32} weight="fill" />
                    </div>
                </div>
                <div className="pt-2 flex-col datas-start">
                    <h4 className="font-bold text-large line-clamp-2">{data.title}</h4>
                    <small className="text-default-500 line-clamp-4">{data.description}</small>
                </div>
            </CardBody>
            <CardFooter>
                <p className="text-tiny uppercase font-bold">News</p>
            </CardFooter>
        </Card>
    )
}

export default VideoGallery