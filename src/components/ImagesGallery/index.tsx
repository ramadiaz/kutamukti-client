"use client";

import { ENV } from "@/lib/environment";
import { ImagesGalleryType, ImagesType } from "@/types/gallery";
import { useEffect, useState } from "react";
import { Carousel } from "../ui/ace-carousel";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  ScrollShadow,
} from "@heroui/react";
import { CaretRightIcon } from "@phosphor-icons/react";
import { timeConvert } from "@/utils/timeConvert";
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const ImagesGallery = () => {
  const [galleryData, setGalleryData] = useState<ImagesGalleryType[]>([]);
  const [LBOpen, setLBOpen] = useState(false);
  const [LBData, setLBData] = useState<SlideImage[]>();

  const fetchData = async () => {
    try {
      const res = await fetch(ENV.BASE_API + `/gallery/image/getall`, {
        cache: "no-store",
      });
      if (res.ok) {
        const data = await res.json();
        setGalleryData(data.body as ImagesGalleryType[]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLBOpen = (data: ImagesType[]) => {
    const slides: SlideImage[] = data.map((img) => ({
      src: img.image_url,
    }));
    setLBData(slides);
    setLBOpen(true);
  };

  return (
    <div className="max-w-6xl px-2 mx-auto w-full space-y-6">
      {galleryData.map((item, i) => {
        return (
          <Card key={i} className="w-full p-2">
            <CardHeader>
              <div className="flex flex-row items-center gap-2 sm:gap-4">
                <div className="">
                  <Image
                    src={`/icons/figure.webp`}
                    alt="figure icon"
                    height={70}
                    width={70}
                  />
                </div>
                <div>
                  <h2 className="text-black font-semibold">{item.title}</h2>
                  <p className="text-sm">{timeConvert(item.created_at)}</p>
                </div>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <ScrollShadow orientation="horizontal" className="">
                <div className="flex flex-row gap-2 sm:gap-4 w-max">
                  {item.images.map((v, j) => {
                    return (
                      <div
                        key={j}
                        className="aspect-video object-cover w-[250px]  pb-2 sm:pb-4"
                      >
                        <Image
                          src={v.image_url}
                          alt={v.image_url}
                          width={`100%`}
                          className="object-cover aspect-video"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    );
                  })}
                </div>
              </ScrollShadow>
            </CardBody>
            <Divider />
            <CardFooter>
              <div className="w-full flex justify-end">
                <Button
                  className="bg-emerald-600 text-white"
                  color="success"
                  endContent={<CaretRightIcon size={20} />}
                  onPress={() => handleLBOpen(item.images)}
                >
                  Selengkapnya
                </Button>
              </div>
            </CardFooter>
          </Card>
        );
      })}
      <Lightbox
        open={LBOpen}
        close={() => setLBOpen(false)}
        slides={LBData ?? []}
        plugins={[Fullscreen, Slideshow, Thumbnails, Video, Zoom]}
      />
    </div>
  );
};

export const GalleryCarousel = ({ data }: { data: ImagesGalleryType }) => {
  const [currentIndex, setCurrnetIndex] = useState(0);

  return (
    <div>
      <div className="pb-8">
        <p className="text-center italic text-xl">
          {data.images[currentIndex].description}
        </p>
      </div>
      <Carousel slides={data.images} onCurrentIndexChange={setCurrnetIndex} />
    </div>
  );
};

export default ImagesGallery;
