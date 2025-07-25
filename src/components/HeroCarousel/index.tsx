"use client";

import { ENV } from "@/lib/environment";
import { News } from "@/types/news";
import { Image, ScrollShadow, Skeleton } from "@heroui/react";
import { ArrowCircleRightIcon } from "@phosphor-icons/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

type HeroCarouselData = {
  image: string;
  title: string;
  label: string;
  link: string;
};

const bannerData: HeroCarouselData[] = [
  {
    image: "/images/hero-1.JPG",
    title: "Selamat Datang di Website Resmi Pemerintahan Desa Kutamukti",
    label: "Sambutan",
    link: "#greeting",
  },
  {
    image: "/images/hero-2.JPG",
    title: "Lihat Daftar Fasilitas dan Infrastruktur Desa Kutamukti",
    label: "Fasilitas",
    link: "/datas/facilities-infrastructure",
  },
  {
    image: "/images/hero-3.jpg",
    title: "Buat Laporan Pengaduan Secara Aman di Website Resmi Desa Kutamukti",
    label: "Laporan",
    link: "/service/complaint",
  },
];

const HeroCarousel = () => {
  const sliderRef = React.useRef<Slider>(null);

  return (
    <Slider
      ref={sliderRef}
      dots={false}
      infinite={true}
      fade={true}
      speed={500}
      slidesToShow={1}
      slidesToScroll={1}
    >
      {bannerData.map((item, i) => (
        <div key={i} className="relative">
          <ImageBanner src={item.image} />
          <ImageOverlay item={item} sliderRef={sliderRef} />
        </div>
      ))}
    </Slider>
  );
};

const ImageOverlay = ({
  item,
  sliderRef,
}: {
  item: HeroCarouselData;
  sliderRef: React.RefObject<Slider | null>;
}) => {
  const [newsData, setNewsData] = useState<News[]>([]);

  const fetchData = async () => {
    try {
      const res = await fetch(ENV.BASE_API + `/news/getall`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        const data = await res.json();
        setNewsData(data.body as News[]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="absolute inset-0 text-white bg-gradient-to-t from-emerald-600 to-50% to-transparent z-10 p-4">
      <div className="max-w-6xl px-2 mx-auto w-full flex flex-col gap-5 items-between justify-end h-full">
        <div className="flex flex-col sm:flex-row w-full gap-2 justify-between items-end">
          <div className="space-y-2">
            <div className="bg-orange-500 uppercase font-semibold text-sm px-2 py-1 rounded-sm w-max">
              {item.label}
            </div>
            <h1 className="text-4xl font-semibold">{item.title}</h1>
            <Link
              href={item.link}
              className="flex flex-row gap-2 items-center mt-5"
            >
              <ArrowCircleRightIcon size={32} />
              <p className="">Pelajari Lebih Lanjut</p>
            </Link>
          </div>
          <div className="basis-1/3 flex flex-row gap-2 sm:gap-4 w-full justify-end items-center">
            {bannerData.map((_, j) => (
              <div
                key={j}
                onClick={() => {
                  if (sliderRef.current) {
                    sliderRef.current.slickGoTo(j);
                  }
                }}
                className="flex border rounded-full w-10 h-10  items-center justify-center hover:bg-white/20 transition-all duration-300"
              >
                {j + 1}
              </div>
            ))}
          </div>
        </div>
        <div className="border-t pt-4">
          <ScrollShadow className="w-full pb-4" orientation="horizontal">
            {newsData.length > 0 ? (
              <div className="w-max flex flex-row gap-2 sm:gap-4">
                {newsData.map((v, i) => {
                  return <NewsCard key={i} data={v} />;
                })}
              </div>
            ) : (
              <div className="w-max flex flex-row gap-2 sm:gap-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <NewsSkeleton key={i} />
                  ))}
              </div>
            )}
          </ScrollShadow>
        </div>
      </div>
    </div>
  );
};

const NewsCard = ({ data }: { data: News }) => {
  return (
    <Link
      href={`/news/${data.slug}`}
      className="grow-0 flex flex-row gap-2 w-sm"
    >
      <div className="basis-2/5 w-[200px]">
        <Image
          src={data.thumbnail_url}
          width={450}
          alt="banner"
          className="aspect-video object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <p className="basis-3/5 text-sm line-clamp-4">{data.title}</p>
    </Link>
  );
};

const NewsSkeleton = () => {
  return (
    <div className="grow-0 flex flex-row gap-2 w-sm">
      <div className="basis-2/5 w-[200px]">
        <Skeleton className="rounded-lg">
          <div className="h-[80px] rounded-lg bg-default-300" />
        </Skeleton>
      </div>
      <div className="basis-3/5 space-y-2">
        <Skeleton className="rounded-lg w-full">
          <div className="h-[16px] rounded-lg bg-default-300" />
        </Skeleton>
        <Skeleton className="rounded-lg w-1/2">
          <div className="h-[16px] rounded-lg bg-default-300" />
        </Skeleton>
        <Skeleton className="rounded-lg w-3/4">
          <div className="h-[16px] rounded-lg bg-default-300" />
        </Skeleton>
      </div>
    </div>
  );
};

const ImageBanner = ({ src }: { src: string }) => {
  return (
    <div className="w-full">
      <Image
        width="100%"
        height={700}
        src={src}
        alt="banner"
        radius="none"
        className="object-cover object-[50%_20%] max-h-[700px]"
      />
    </div>
  );
};

export default HeroCarousel;
