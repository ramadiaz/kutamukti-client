"use client";

import Link from "next/link";
import { ScrollShadow } from "@heroui/react";
import {
  ArrowCircleRightIcon,
  HouseIcon,
  ImageSquareIcon,
  MegaphoneIcon,
  StorefrontIcon,
  EnvelopeSimpleOpenIcon,
} from "@phosphor-icons/react";
import { ReactNode } from "react";
import NetworkBackground from "../backgrounds/network-background";

const favoriteCards = [
  {
    icon: <MegaphoneIcon size={50} weight="fill" />, // Berita
    title: "Berita",
    desc: "Kabar dan informasi terbaru seputar Desa Kutamukti.",
    href: "/news",
  },
  {
    icon: <HouseIcon size={50} weight="fill" />, // Profil Desa
    title: "Profil Desa",
    desc: "Sejarah, visi misi, dan perangkat Desa Kutamukti.",
    href: "/profile/about",
  },
  {
    icon: <StorefrontIcon size={50} weight="fill" />, // Produk Desa
    title: "Produk Desa",
    desc: "Katalog produk unggulan dan UMKM Desa Kutamukti.",
    href: "/product/catalog",
  },
  {
    icon: <ImageSquareIcon size={50} weight="fill" />, // Galeri Foto
    title: "Galeri Foto",
    desc: "Kumpulan foto kegiatan dan keindahan Desa Kutamukti.",
    href: "/gallery/images",
  },
  {
    icon: <EnvelopeSimpleOpenIcon size={50} weight="fill" />, // Layanan Pengaduan
    title: "Layanan Pengaduan",
    desc: "Sampaikan laporan, keluhan, atau aspirasi Anda di sini.",
    href: "/service/complaint",
  },
];

const NavCards = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto rounded-lg text-white bg-gradient-to-b from-emerald-700 from-40% to-emerald-50 p-8 overflow-hidden">
      <NetworkBackground zIndex={10} />
      <div className="relative z-10 pt-4">
        <h2 className="text-2xl font-semibold pb-10">
          Navigasi Favorit Warga Kutamukti
        </h2>
        <ScrollShadow className="w-full pb-4" orientation="horizontal">
          <div className="flex flex-row gap-2 sm:gap-4 w-max py-4 px-2">
            {favoriteCards.map((card) => (
              <Link href={card.href} key={card.title} className="focus:outline-none">
                <Cards
                  icon={card.icon}
                  title={card.title}
                  desc={card.desc}
                />
              </Link>
            ))}
          </div>
        </ScrollShadow>
      </div>
    </div>
  );
};

const Cards = ({
  icon,
  title,
  desc,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
}) => {
  return (
    <div className="cursor-pointer px-4 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 w-3xs h-[270px] relative ring-2 ring-white/0 hover:ring-white hover:brightness-125 transition-all duration-300">
      <div className="py-6">
        {icon}
        <h3 className="text-lg font-semibold uppercase pt-10">{title}</h3>
        <p className="text-sm">{desc}</p>
      </div>
      <div className="absolute bottom-0 left-0 pb-6 px-4">
        <ArrowCircleRightIcon size={32} />
      </div>
    </div>
  );
};

export default NavCards;
