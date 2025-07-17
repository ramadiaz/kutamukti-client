"use client";

import { Image } from "@heroui/react";

const Greeting = () => {
  return (
    <div className="max-w-6xl mx-auto bg-gradient-to-br to-neutral-200 p-8 rounded-xl">
      <div className="w-full flex flex-row items-center gap-4">
        <div className="">
          <Image
            src={`/images/perangkat-desa/aan.jpg`}
            width={300}
            height={300}
            className="object-cover"
          />
        </div>
        <div className="basis-3/5">
          <p className="uppercase font-semibold text-lg">AAN Maryani</p>
          <p className="text-justify">
            Dengan penuh rasa syukur dan bangga, saya menyambut baik kehadiran
            Website Profil Desa Kutamukti ini. Website ini merupakan salah satu
            bentuk transparansi dan keterbukaan informasi pemerintah desa kepada
            seluruh masyarakat, baik yang berada di desa maupun di luar wilayah.
            Melalui platform ini, masyarakat dapat mengakses berbagai informasi
            penting terkait desa, mulai dari data kependudukan, program
            pembangunan, informasi kegiatan desa, produk UMKM, hingga laporan
            pengaduan masyarakat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
