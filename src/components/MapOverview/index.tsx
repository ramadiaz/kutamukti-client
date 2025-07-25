"use client";

import { Image } from "@heroui/react";
import {
  ArrowCircleRightIcon,
  GlobeIcon,
  StorefrontIcon,
  ChatCircleDotsIcon,
} from "@phosphor-icons/react";
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
    icon: <GlobeIcon size={55} weight="fill" />, // Data & Peta Desa
    title: "Data & Peta Desa",
    desc: "Eksplorasi data kependudukan, fasilitas, dan peta interaktif Desa Kutamukti.",
    href: "/maps",
  },
  {
    icon: <StorefrontIcon size={55} weight="fill" />, // Produk Lokal
    title: "Produk Lokal",
    desc: "Temukan produk unggulan dan UMKM yang menjadi kebanggaan desa.",
    href: "/product/catalog",
  },
  {
    icon: <ChatCircleDotsIcon size={55} weight="fill" />, // Layanan Warga
    title: "Layanan Warga",
    desc: "Akses layanan pengaduan, agenda desa, dan bantuan publik secara digital.",
    href: "/service/complaint",
  },
];

const MapOverview = () => {
  // const isMobile = useIsMobile();

  return (
    <div className="h-[900px] sm:h-[700px] relative">
      <NetworkBackground zIndex={20} />
      <Image
        src={`/images/background-map.png`}
        width="100%"
        alt="map"
        radius="none"
        className="object-cover object-[50%_20%] h-[900px] sm:h-[700px] brightness-55"
      />
      <div className="text-white absolute z-20 inset-0 max-w-6xl px-2 mx-auto flex flex-col justify-center">
        <div className="max-w-xl space-y-4">
          <h2 className="text-4xl font-semibold">
            Jelajahi Desa Kutamukti Secara Digital
          </h2>
          <p>
            Temukan informasi penting, produk lokal, dan layanan publik yang
            mudah diakses untuk seluruh warga dan pengunjung Desa Kutamukti.
          </p>
          <Link
            href={`/maps`}
            className="flex flex-row gap-2 sm:gap-4 items-center pt-8"
          >
            <ArrowCircleRightIcon size={32} />
            <p>Baca Selengkapnya</p>
          </Link>
        </div>
        <div className="border-t mt-8 w-full flex flex-col sm:flex-row justify-between sm:items-center">
          {NavData.map((item, i) => {
            return (
              <Link
                href={item.href}
                key={i}
                className="flex flex-row items-center justify-start gap-2 pt-6 hover:brightness-125 transition-all"
              >
                <div className="size-20 flex items-center justify-center rounded-lg bg-gradient-to-bl from-emerald-500 to-emerald-700">
                  {item.icon}
                </div>
                <div className="w-3xs">
                  <h3 className="uppercase font-semibold">{item.title}</h3>
                  <p className="text-xs">{item.desc}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MapOverview;
