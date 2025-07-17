import { ApparatusType } from "@/types/apparatus";
import { Image, useDisclosure } from "@heroui/react";
import { ArrowCircleRightIcon } from "@phosphor-icons/react";
import React from "react";
import ApparatusModal from "./apparatusModal";
import useIsMobile from "@/hooks/useIsMobile";

const ApparatusCard = ({ data }: { data: ApparatusType }) => {
  const disclosure = useDisclosure();
  const isMobile = useIsMobile();

  return (
    <div className="rounded-lg p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-8 bg-neutral-100">
      <div className="w-full sm:basis-1/3 ">
        <Image
          src={data.image_url}
          alt={data.name}
          height={300}
          width={`100%`}
          className="object-cover"
        />
      </div>
      <div className="sm:basis-2/3">
        <h2 className="uppercase text-2xl font-semibold">{data.name}</h2>
        <p>{data.role}</p>
        <div className="h-6 sm:h-16" />
        <p className="text-emerald-700">Masa Kerja: {data.periode}</p>
        <p className=" line-clamp-4">{data.desc}</p>
        <div
          onClick={disclosure.onOpen}
          className="flex flex-row items-center text-emerald-700 mt-4 gap-2 cursor-pointer"
        >
          <ArrowCircleRightIcon size={28} />
          <p>Selengkapnya</p>
        </div>
      </div>
      <ApparatusModal data={data} disclosure={disclosure} />
    </div>
  );
};

export default ApparatusCard;
