'use client'

import { Image } from "@heroui/react";

const Activities = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-2xl font-semibold">Kegiatan BUMDes MKB</h1>
      <div className="flex flex-wrap gap-4 justify-center mt-6">
        <ActivityCard 
            image="/images/animals/sheep.webp"
            name="Ternak Domba"
        />
        <ActivityCard 
            image="/images/animals/chicken.webp"
            name="Ternak Ayam"
        />
        <ActivityCard 
            image="/images/animals/fish.webp"
            name="Budidaya Ikan Air Tawar"
        />
        <ActivityCard 
            image="/images/animals/eel.webp"
            name="Budidaya Belut"
        />
      </div>
    </div>
  );
};

const ActivityCard = ({ name, image }: { name: string; image: string }) => {
  return (
    <div
      className="flex flex-col items-center justify-start w-[200px] sm:w-[250px] space-y-2 shadow-xl p-4 rounded-xl hover:scale-105 transition-all duration-400 bg-gradient-to-br from-emerald-100 to-20%"
    >
      <div>
        <Image
          src={image}
          width={100}
          height={100}
          alt={`icons`}
          className="object-cover"
        />
      </div>
      <div>
        <p className="text-center text-sm capitalize">{name}</p>
      </div>
    </div>
  );
};

export default Activities;
