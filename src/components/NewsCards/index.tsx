"use client";
import { NewsTypes } from "@/types/news";
import { Card, CardBody, CardHeader, Image } from "@heroui/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const NewsCards = () => {
  const [news, setVideos] = useState<NewsTypes[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch("/datas/news/news-list.json");
      const data = await response.json();
      if (data) {
        setVideos(data);
      }
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
        <div className="grid grid-cols-3 gap-4">
          {news.map((item, i) => {
            return (
              <Card key={i} className="py-4" as={Link} href={item.url}>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={item.thumbnail}
                    width={270}
                  />
                </CardBody>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <h4 className="font-bold text-large">{item.title}</h4>
                  <small className="text-default-500">{item.description}</small>
                  <p className="text-tiny uppercase font-bold">{item.label}</p>
                </CardHeader>
              </Card>
            );
          })}
        </div>
        <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 w-3xs py-18 flex items-center justify-center rounded-xl">
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
