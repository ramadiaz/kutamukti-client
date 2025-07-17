"use client";

import { Image } from "@heroui/react";
import React from "react";

const Population = () => {
  return (
    <div className="max-w-6xl px-2 mx-auto py-16">
      <div className="w-full flex flex-row gap-4 items-start">
        <div className="sm:basis-1/2 space-y-4">
          <h1 className="text-xl text-emerald-700">Demografi Penduduk</h1>
          <p>
            Memberikan informasi lengkap mengenai karakteristik demografi
            penduduk suatu wilayah. Mulai dari jumlah penduduk, usia, jenis
            kelamin, tingkat pendidikan, pekerjaan, agama, dan aspek penting
            lainnya yang menggambarkan komposisi populasi secara rinci.
          </p>
        </div>
        <div className="hidden sm:block sm:basis-1/2">
          <Image
            src={`/images/population-1.png`}
            alt="population visualization"
            height={180}
            width={180}
            className="object-cover aspect-square"
          />
        </div>
      </div>
      <div className="mt-8 space-y-4">
        <h1 className="font-semibold text-xl mb-6">
          Jumlah Penduduk dan Kepala Keluarga
        </h1>
        <div className="w-full flex flex-col sm:flex-row gap-4 items-start">
          <StatsBar name={`Penduduk`} value={4433} />
          <StatsBar name={`Laki-Laki`} value={2257} />
        </div>
        <div className="w-full flex flex-col sm:flex-row gap-4 items-start">
          <StatsBar name={`Rukun Warga`} value={5} />
          <StatsBar name={`Perempuan`} value={2176} />
        </div>
        <div className="w-full flex flex-col sm:flex-row gap-4 items-start">
          <StatsBar name={`Rukun Tetangga`} value={18} />
          <StatsBar name={`Kepadatan Penduduk`} value={1862} />
        </div>
      </div>
    </div>
  );
};

const StatsBar = ({ name, value }: { name: string; value: number }) => {
  return (
    <div className="flex flex-row w-full basis-1/2 rounded-xl overflow-hidden">
      <div className="basis-1/4 p-4 bg-gradient-to-br from-emerald-700 to-emerald-500 text-white font-semibold text-center text-medium sm:text-xl">
        {value.toLocaleString(`id-ID`)}
      </div>
      <div className="basis-3/4 p-4 bg-gradient-to-br from-neutral-200 text-black font-semibold text-center text-medium sm:text-xl">
        {name}
      </div>
    </div>
  );
};

export default Population;
