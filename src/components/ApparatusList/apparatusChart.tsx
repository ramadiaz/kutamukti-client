"use client";

import useIsMobile from "@/hooks/useIsMobile";
import { Image } from "@heroui/react";
import React from "react";

const ApparatusChart = () => {
  const isMobile = useIsMobile();

  return (
    <div className="max-w-6xl px-2 mx-auto">
      <div className="mb-4">
        <h1 className="uppercase font-semibold text-2xl">
          Bagan Pengurus Desa Kutamukti
        </h1>
        <p className="opacity-90 text-sm">
          Berikut adalah bagan pengurus Desa Kutamukti yang menjabat pada tahun 2025:
        </p>
      </div>
      <div className="w-full flex items-center justify-center">
        <Image
          src={`/images/bagan-pengurus.png`}
          width={700}
          height={isMobile ? 200 : 400}
          alt="chart"
          radius="none"
          className=""
        />
      </div>
    </div>
  );
};

export default ApparatusChart;
