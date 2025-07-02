import { ApparatusType } from "@/types/apparatus";
import { Image } from "@heroui/react";
import React from "react";

const ApparatusCard = ({ data }: { data: ApparatusType }) => {
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
        <p>
            {data.desc}
        </p>
      </div>
    </div>
  );
};

export default ApparatusCard;
