"use client";

import { ScrollShadow } from "@heroui/react";
import { ArrowCircleRightIcon, FolderOpenIcon } from "@phosphor-icons/react";
import { ReactNode } from "react";
import NetworkBackground from "../backgrounds/network-background";

const NavCards = () => {
  return (
    <div className="relative w-full max-w-6xl px-2 mx-auto rounded-lg text-white bg-gradient-to-b from-emerald-700 from-40% to-emerald-50 p-8 overflow-hidden">
      <NetworkBackground zIndex={10} />
      <div className="relative z-10 pt-4">
        <h2 className="text-2xl font-semibold pb-10">
          Layanan Berkualitas Untuk Masa Depan Digital
        </h2>
        <ScrollShadow className="w-full pb-4" orientation="horizontal">
          <div className="flex flex-row gap-4 w-max py-4 px-2">
            <Cards
              icon={<FolderOpenIcon size={50} weight="fill" />}
              title={"Sertifikasi"}
              desc={"Pembuatan Sertifikat menjadi lebih mudah dengan digital"}
            />
            <Cards
              icon={<FolderOpenIcon size={50} weight="fill" />}
              title={"Sertifikasi"}
              desc={"Pembuatan Sertifikat menjadi lebih mudah dengan digital"}
            />
            <Cards
              icon={<FolderOpenIcon size={50} weight="fill" />}
              title={"Sertifikasi"}
              desc={"Pembuatan Sertifikat menjadi lebih mudah dengan digital"}
            />
            <Cards
              icon={<FolderOpenIcon size={50} weight="fill" />}
              title={"Sertifikasi"}
              desc={"Pembuatan Sertifikat menjadi lebih mudah dengan digital"}
            />
            <Cards
              icon={<FolderOpenIcon size={50} weight="fill" />}
              title={"Sertifikasi"}
              desc={"Pembuatan Sertifikat menjadi lebih mudah dengan digital"}
            />
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
