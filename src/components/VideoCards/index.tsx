"use client";

import { ENV } from "@/lib/environment";
import { VideoTypes } from "@/types/videos";
import { Card, CardBody, CardFooter, Image } from "@heroui/react";
import { CaretDoubleRightIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const VideoCards = () => {
  const [videos, setVideos] = useState<VideoTypes[]>([]);

  const fetchData = async () => {
    try {
      const res = await fetch(ENV.BASE_API + `/gallery/video/getall`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      const data = await res.json();
      setVideos(data.body);
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className=" max-w-6xl mx-auto">
      <h1 className="uppercase font-semibold text-2xl pb-8">
        Realisasi Program Desa Kutamukti
      </h1>
      <div className="flex flex-row gap-4 items-start justify-between w-full">
        <div className="grid grid-cols-3 gap-4 basis-3/4">
          {videos.slice(0, 6).map((item, i) => {
            return (
              <Card key={i} className="py-4" as={Link} href={`/gallery/videos/` + item.uuid}>
                <CardBody className="overflow-visible pt-0">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl aspect-video"
                    src={item.thumbnail_url}
                    width={270}
                  />
                  <div className="pt-2 flex-col items-start">
                    <h4 className="font-bold text-large line-clamp-2">{item.title}</h4>
                    <small className="text-default-500 line-clamp-4">{item.description}</small>
                  </div>
                </CardBody>
                <CardFooter>
                  <p className="text-tiny uppercase font-bold">News</p>
                </CardFooter>
              </Card>
            );
          })}
        </div>
        <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 w-3xs py-18 flex items-center justify-center rounded-xl relative">
          <Link href={`/gallery/videos`}  className="absolute bottom-4 right-4 flex flex-row items-center text-white">
            <p className="text-sm">
            Selengkapnya
            </p>
            <CaretDoubleRightIcon size={16} weight="bold" />
          </Link>
          <div className="text-white h-max">
            <p className="text-4xl font-semibold text-center">
              {videos.length} Video
            </p>
            <p className="text-center">Telah Diunggah</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCards;
