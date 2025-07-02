"use client";

import { Image } from "@heroui/react";
import { ArrowCircleRightIcon, GlobeIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { ReactNode } from "react";
import NetworkBackground from "../backgrounds/network-background";

type NavType = {
  icon: ReactNode;
  title: string;
  desc: string;
  href: string;
};

const NavData: NavType[] = [
  {
    icon: <GlobeIcon size={55} weight="thin" />,
    title: "Infrastrukur Digital",
    desc: "Membangun Infrastruktur Internet dan konektivitas yang inklusif dengan layanan berkualitas tinggi.",
    href: "#",
  },
  {
    icon: <GlobeIcon size={55} weight="thin" />,
    title: "Infrastrukur Digital",
    desc: "Membangun Infrastruktur Internet dan konektivitas yang inklusif dengan layanan berkualitas tinggi.",
    href: "#",
  },
  {
    icon: <GlobeIcon size={55} weight="thin" />,
    title: "Infrastrukur Digital",
    desc: "Membangun Infrastruktur Internet dan konektivitas yang inklusif dengan layanan berkualitas tinggi.",
    href: "#",
  },
];

const MapOverview = () => {
  return (
    <div className="h-[700px] relative">
      <NetworkBackground zIndex={20} />
      <Image
        src={`/images/background-map.png`}
        width="100%"
        height={700}
        alt="map"
        radius="none"
        className="object-cover object-[50%_20%] h-[700px] brightness-55"
      />
      <div className="text-white absolute z-20 inset-0 max-w-6xl mx-auto flex flex-col justify-center">
        <div className="max-w-xl space-y-4">
          <h2 className="text-4xl font-semibold">
            Transformasi Digital Bersama Desa Kutamukti
          </h2>
          <p>
            Program kerja Kementerian Komdigi 2019 - 2024 berfokus untuk
            menghubungkan dan memajukan bangsa melalui akselerasi transformasi
            digital melalui berbagai aspek
          </p>
          <Link href={`#`} className="flex flex-row gap-4 items-center pt-8">
            <ArrowCircleRightIcon size={32} />
            <p>Baca Selengkapnya</p>
          </Link>
        </div>
        <div className="border-t mt-8 w-full flex flex-row justify-between items-center">
          {NavData.map((item, i) => {
            return (
              <div
                key={i}
                className="flex flex-row items-center justify-start gap-2 pt-6"
              >
                <div className="size-20 flex items-center justify-center rounded-lg bg-gradient-to-bl from-emerald-500 to-emerald-700">
                  {item.icon}
                </div>
                <div className="w-3xs">
                  <h3 className="uppercase font-semibold">{item.title}</h3>
                  <p className="text-xs">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MapOverview;
