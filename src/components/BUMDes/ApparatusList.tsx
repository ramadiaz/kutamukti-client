"use client";

import { Card, CardBody, CardHeader, Image } from "@heroui/react";

type ApparatusType = {
  name: string;
  role: string;
  image: string;
};

const ApparatusData: ApparatusType[] = [
  {
    name: "Agus Widana",
    role: "Direktur BUMDes",
    image: "/images/bumdes/agus.jpeg",
  },
  {
    name: "Sumirah Afriyani",
    role: "Sekretaris BUMDes",
    image: "/images/bumdes/sumirah.jpeg",
  },
  {
    name: "Hendra Suteja",
    role: "Bendahara BUMDes",
    image: "/images/bumdes/teja.jpeg",
  },
];

const ApparatusList = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-2xl font-semibold">Daftar Pengurus BUMDes</h1>
      <div className="flex flex-wrap gap-2 sm:gap-4 justify-center mt-6">
        {ApparatusData.map((item, i) => (
          <ApparatusCard data={item} key={i} />
        ))}
      </div>
    </div>
  );
};

const ApparatusCard = ({ data }: { data: ApparatusType }) => {
  return (
    <Card className="py-4 w-full sm:w-max">
      <CardHeader className="pt-0 px-4 flex-col items-start">
        <h4 className="font-bold text-large uppercase">{data.name}</h4>
        <p className="text-xs uppercase">{data.role}</p>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <div className="object-cover w-full sm:w-[240px] h-[270px]">
          <Image
            alt={data.name}
            className="object-cover object-[50%_10%] rounded-xl"
            src={data.image}
            width={`100%`}
            height={270}
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default ApparatusList;
