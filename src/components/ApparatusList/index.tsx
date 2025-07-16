"use client";

import { ApparatusType } from "@/types/apparatus";
import { useEffect, useState } from "react";
import ApparatusCard from "./apparatusCard";

const ApparatusList = () => {
  const [apparatus, setApparatus] = useState<ApparatusType[]>([]);

  const fetchData = async () => {
    try {
      const res = await fetch(`/datas/apparatus/apparatus-list.json`);
      const data = await res.json();
      if (data) {
        setApparatus(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="max-w-6xl px-2 mx-auto">
      <div className="">
        <h1 className="uppercase font-semibold text-2xl">
          Daftar Pegawai Desa Kutamukti
        </h1>
        <p className="opacity-90 text-sm">
          Berikut adalah daftar tokoh Desa Kutamukti yang menjabat mulai tahun
          2024 sampai sekarang:
        </p>
      </div>
      <div className="space-y-4 mt-4">
        {apparatus.map((item, i) => {
          return <ApparatusCard key={i} data={item} />;
        })}
      </div>
    </div>
  );
};

export default ApparatusList;
