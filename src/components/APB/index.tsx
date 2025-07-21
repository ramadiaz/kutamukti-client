"use client";

import { Image } from "@heroui/react";

const APB = () => {
  return (
    <div className="max-w-6xl px-2 mx-auto">
      <div className="w-full flex flex-row gap-6">
        <div className="sm:basis-1/3 hidden sm:flex justify-end">
          <Image
            src={`/images/apb-1.png`}
            alt="apb visualization"
            height={250}
            width={250}
            className="object-cover aspect-square"
          />
        </div>
        <div className="sm:basis-2/3">
          <h1 className="font-semibold text-xl mb-6">APB Desa Tahun 2024</h1>
          <p>
            Anggaran Pendapatan dan Belanja Desa (APBDes) Desa Kutamukti Tahun
            2024 adalah dokumen perencanaan keuangan yang disusun untuk mendanai
            berbagai program dan kegiatan pembangunan di desa sepanjang tahun
            2024.
          </p>
          <div className="bg-gradient-to-br from-neutral-200 p-4 rounded-xl space-y-4 mt-2 sm:mt-4">
            <p>Pendapatan Desa</p>
            <p className="text-center text-2xl font-semibold mb-4">
              Rp 2.001.963.800,00
            </p>
          </div>
          <div className="bg-gradient-to-br from-neutral-200 p-4 rounded-xl space-y-4 mt-2 sm:mt-4">
            <p>Belanja Desa</p>
            <p className="text-center text-2xl font-semibold mb-4">
              Rp 2.002.313.352,00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APB;
