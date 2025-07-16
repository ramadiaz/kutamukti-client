"use client";
import { ENV } from "@/lib/environment";
import { News } from "@/types/news";
import { Card, CardBody, CardFooter, Image } from "@heroui/react";
import { CaretDoubleRightIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const NewsCards = () => {
  const [news, setVideos] = useState<News[]>([]);

  const fetchData = async () => {
    try {
      const res = await fetch(ENV.BASE_API + `/news/getall`, {
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
    <div className=" max-w-6xl px-2 mx-auto">
      <h1 className="uppercase font-semibold text-2xl pb-8">
        Realisasi Program Desa Kutamukti
      </h1>
      <div className="flex flex-row gap-4 items-start justify-between w-full">
        <div className="grid grid-cols-3 gap-4 basis-3/4">
          {news.slice(0, 6).map((item, i) => {
            return (
              <Card key={i} className="py-4" as={Link} href={`/news/` + item.slug}>
                <CardBody className="overflow-visible pt-0">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl aspect-video"
                    src={item.thumbnail_url}
                    width={270}
                    referrerPolicy="no-referrer"
                  />
                  <div className="pt-2 flex-col items-start">
                    <h4 className="font-bold text-large line-clamp-2">{item.title}</h4>
                    <small className="text-default-500 line-clamp-4">{item.raw_text}</small>
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
          <Link href={`/news`} className="absolute bottom-4 right-4 flex flex-row items-center text-white">
            <p className="text-sm">
              Selengkapnya
            </p>
            <CaretDoubleRightIcon size={16} weight="bold" />
          </Link>
          <div className="text-white h-max">
            <p className="text-4xl font-semibold text-center">
              {news.length} Berita
            </p>
            <p className="text-center">Telah Diunggah</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCards;
