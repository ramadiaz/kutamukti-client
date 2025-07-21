"use client";

import React, { useRef, useEffect, useState } from "react";
import { Image } from "@heroui/react";

const Greeting = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      id="greeting"
      className={`max-w-6xl mx-auto bg-gradient-to-br to-neutral-200 p-8 rounded-xl transition-all duration-1000 ease-out relative overflow-hidden scroll-smooth
        ${inView ? "opacity-100 translate-y-0 shimmer-glow" : "opacity-0 translate-y-8"}`}
    >
      <style jsx>{`
        .shimmer-glow::before {
          content: "";
          position: absolute;
          top: 0;
          left: -75%;
          width: 50%;
          height: 100%;
          background: linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%);
          animation: shimmer 2s infinite;
          pointer-events: none;
        }
        @keyframes shimmer {
          0% { left: -75%; }
          100% { left: 125%; }
        }
        .shimmer-glow {
          box-shadow: 0 4px 32px 0 rgba(255,255,255,0.15), 0 1.5px 8px 0 rgba(0,0,0,0.08);
        }
      `}</style>
      <div className="w-full flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
        <div className="">
          <Image
            src={`/images/perangkat-desa/aan.jpg`}
            width={300}
            height={300}
            className="object-cover"
            alt="aan maryani"
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