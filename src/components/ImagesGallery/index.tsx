'use client'

import { ENV } from "@/lib/environment"
import { ImagesGalleryType } from "@/types/gallery"
import { useEffect, useState } from "react"
import { Carousel } from "../ui/ace-carousel"

const ImagesGallery = () => {
    const [galleryData, setGalleryData] = useState<ImagesGalleryType[]>([])

    const fetchData = async () => {
        try {
            const res = await fetch(ENV.BASE_API + `/gallery/image/getall`, {
                cache: "no-store",
            })
            if (res.ok) {
                const data = await res.json()
                setGalleryData(data.body as ImagesGalleryType[])
            }
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="max-w-6xl px-2 mx-auto w-full space-y-6">
            {
                galleryData.map((item, i) => {
                    return (
                        <div key={i} className="pb-16">
                            <h3 className="text-xl uppercase">
                                {item.title}
                            </h3>
                            <div className="w-full flex flex-row items-center mb-8">
                                <div className="w-full h-[2px] bg-black" />
                                <div className="w-2 h-2 bg-black rounded-full" />
                            </div>
                            <GalleryCarousel data={item} />
                        </div>
                    )
                })
            }
        </div>
    )
}

const GalleryCarousel = ({ data }: { data: ImagesGalleryType }) => {
    const [currentIndex, setCurrnetIndex] = useState(0)

    return (
        <div>
            <div className="pb-8">
                <p className="text-center italic text-xl">
                    {data.images[currentIndex].description}
                </p>
            </div>
            <Carousel slides={data.images} onCurrentIndexChange={setCurrnetIndex} />
        </div>
    )
}

export default ImagesGallery