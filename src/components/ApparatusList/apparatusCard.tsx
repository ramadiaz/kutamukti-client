import { ApparatusType } from "@/types/apparatus";
import { Image, useDisclosure } from "@heroui/react";
import { ArrowCircleRightIcon } from "@phosphor-icons/react";
import React from "react";
import ApparatusModal from "./apparatusModal";

const ApparatusCard = ({ data }: { data: ApparatusType }) => {
  const disclosure = useDisclosure();

  return (
    <div className="rounded-lg p-8 flex flex-row items-start gap-8 bg-neutral-100">
      <Image
        src={data.image_url}
        alt={data.name}
        height={300}
        width={225}
        className="object-cover basis-1/3"
      />
      <div className="basis-2/3">
        <h2 className="uppercase text-2xl font-semibold">{data.name}</h2>
        <p>{data.role}</p>
        <div className="h-16" />
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
