"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { HouseIcon } from "@phosphor-icons/react";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
];

const profileDesa: { title: string; href: string; description: string }[] = [
  {
    title: "Tentang Kami dan Visi Misi",
    href: "/profile/about",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Daftar Perangkat Desa",
    href: "/profile/apparatus",
    description:
      "Daftar tokoh Desa Kutamukti yang menjabat mulai tahun 2024 sampai sekarang",
  },
  {
    title: "Sejarah Desa",
    href: "/profile/history",
    description:
      "Sejarah singkat desa kutamukti mulai tahun 1966 sampai sekarang",
  },
];

const dataDesa: { title: string; href: string; description: string }[] = [
  {
    title: "Jumlah Penduduk dan APB",
    href: "/datas/population",
    description: "A modal dialog that interrupts the user with important ",
  },
  {
    title: "Sarana dan Prasarana",
    href: "/datas/facilities-infrastructure",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "SDGS",
    href: "/datas/sdgs",
    description:
      "Daftar tokoh Desa Kutamukti yang menjabat mulai tahun 2024 sampai sekarang",
  },
  {
    title: "IDM",
    href: "/datas/idm",
    description:
      "Informasi mengenai Indeks Desa Membangun (IDM) Desa Kutamukti",
  },
];

const serviceDesa: { title: string; href: string; description: string }[] = [
  {
    title: "Laporan Pengaduan",
    href: "/service/complaint",
    description: "A modal dialog that interrupts the user with important ",
  },
  {
    title: "Agenda Desa",
    href: "/service/schedule",
    description:
      "For sighted users to preview content available behind a link.",
  },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu className="" viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/">
              <HouseIcon size={32} color="#047857" />
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/news" className="font-normal uppercase">
            Berita
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-normal uppercase">
            Profil Desa
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {profileDesa.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-normal uppercase">
            Data Desa
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {dataDesa.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className="font-normal uppercase">
            Peta Interaktif Desa
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-normal uppercase">
            Produk Desa
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-normal uppercase">
            Layanan
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {serviceDesa.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className="font-normal uppercase">
            Hubungi Kami
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
