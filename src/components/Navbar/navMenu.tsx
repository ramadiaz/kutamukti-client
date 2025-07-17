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
import { Accordion, AccordionItem } from "@heroui/react";

export const galleryDesa: { title: string; href: string; description: string }[] = [
  {
    title: "Galeri Foto",
    href: "/gallery/images",
    description:
      "Galeri Foto Berita Desa Kutamukti menghadirkan kumpulan gambar yang merekam setiap momen penting di desa. Mulai dari kegiatan warga, pembangunan infrastruktur, acara adat, hingga keindahan alam sekitar. Melalui foto-foto ini, setiap cerita dan perjalanan Desa Kutamukti dapat tersampaikan dengan jelas dan penuh makna.",
  },
  {
    title: "Galeri Video",
    href: "/gallery/videos",
    description:
      "Galeri Video Berita Desa Kutamukti menyajikan rekaman langsung berbagai kegiatan yang berlangsung di desa. Video-video ini menangkap suasana nyata, mulai dari kegiatan gotong royong, festival budaya, agenda pemerintahan desa, hingga liputan khusus.",
  },
];

export const profileDesa: { title: string; href: string; description: string }[] = [
  {
    title: "Tentang Desa dan Visi Misi",
    href: "/profile/about",
    description:
      "Halaman ini menyajikan gambaran umum mengenai Desa Kutamukti, termasuk sejarah singkat, potensi wilayah, serta kehidupan sosial masyarakatnya. Di samping itu, Anda juga dapat mengetahui visi dan misi Desa Kutamukti sebagai pedoman pembangunan yang berkelanjutan. Dengan memahami arah dan tujuan desa, diharapkan masyarakat dan pemangku kepentingan dapat berperan aktif dalam mewujudkan desa yang maju, mandiri, dan sejahtera.",
  },
  {
    title: "Daftar Perangkat Desa",
    href: "/profile/apparatus",
    description:
      "Halaman ini menampilkan informasi lengkap mengenai struktur dan susunan perangkat Desa Kutamukti, mulai dari Kepala Desa hingga staf pelaksana lainnya. Setiap perangkat desa memiliki peran dan tanggung jawab dalam menjalankan roda pemerintahan serta pelayanan publik di tingkat desa. Dengan adanya transparansi ini, diharapkan masyarakat dapat mengenal lebih dekat para aparatur desa yang bekerja demi kemajuan dan kesejahteraan bersama.",
  },
  {
    title: "Sejarah Desa",
    href: "/profile/history",
    description:
      "Halaman ini memuat sejarah berdirinya Desa Kutamukti, mulai dari asal-usul nama desa, tokoh-tokoh pendiri, hingga perkembangan desa dari masa ke masa. Melalui narasi sejarah ini, masyarakat diajak untuk mengenali akar budaya, nilai-nilai lokal, serta perjalanan panjang yang membentuk identitas Desa Kutamukti saat ini. Pemahaman akan sejarah desa menjadi pijakan penting dalam melanjutkan pembangunan yang berlandaskan kearifan lokal.",
  },
];

export const dataDesa: { title: string; href: string; description: string }[] = [
  {
    title: "Jumlah Penduduk dan APB",
    href: "/datas/population",
    description: "Halaman ini menyajikan data jumlah penduduk Desa Kutamukti secara terperinci berdasarkan kategori seperti usia, jenis kelamin, dan mata pencaharian. Selain itu, tersedia juga informasi mengenai Anggaran Pendapatan dan Belanja (APB) Desa yang mencakup sumber pendapatan, alokasi belanja, serta program-program yang dibiayai oleh anggaran desa. Transparansi ini bertujuan untuk meningkatkan partisipasi masyarakat dalam pembangunan desa dan memastikan pengelolaan dana dilakukan secara akuntabel dan berkeadilan. ",
  },
  {
    title: "Sarana dan Prasarana",
    href: "/datas/facilities-infrastructure",
    description:
      "Halaman ini memberikan informasi mengenai berbagai sarana dan prasarana yang dimiliki Desa Kutamukti, seperti fasilitas pendidikan, kesehatan, tempat ibadah, jalan, saluran irigasi, dan infrastruktur pendukung lainnya. Ketersediaan dan kondisi sarana prasarana ini menjadi indikator penting dalam mendukung aktivitas masyarakat serta menunjang pertumbuhan ekonomi dan sosial desa. Dengan informasi yang terbuka, masyarakat dapat mengetahui perkembangan infrastruktur sekaligus ikut mengawal pemerataan pembangunan.",
  },
  {
    title: "SDGS",
    href: "/datas/sdgs",
    description:
      "Halaman ini memuat komitmen dan pencapaian Desa Kutamukti dalam mendukung Sustainable Development Goals (SDGs) atau Tujuan Pembangunan Berkelanjutan di tingkat desa. SDGs Desa terdiri dari 18 tujuan yang mencakup aspek sosial, ekonomi, lingkungan, dan kelembagaan yang bertujuan untuk mewujudkan desa tanpa kemiskinan, desa sehat, desa ramah lingkungan, serta tata kelola desa yang adil dan partisipatif. Melalui pendekatan ini, pembangunan desa diharapkan lebih terarah, inklusif, dan berkelanjutan untuk seluruh lapisan masyarakat.",
  },
  {
    title: "IDM",
    href: "/datas/idm",
    description:
      "Halaman ini menyajikan informasi mengenai Indeks Desa Membangun (IDM) Desa Kutamukti, yaitu sebuah indeks yang digunakan untuk mengukur tingkat kemandirian dan kemajuan desa berdasarkan tiga dimensi utama: ketahanan sosial, ketahanan ekonomi, dan ketahanan ekologi/lingkungan. IDM menjadi acuan penting dalam menentukan status desa—apakah termasuk desa tertinggal, berkembang, atau mandiri—serta sebagai dasar dalam perencanaan dan evaluasi pembangunan desa secara menyeluruh. Dengan transparansi data IDM, masyarakat dapat melihat sejauh mana kemajuan pembangunan Desa Kutamukti dari waktu ke waktu.",
  },
];

export const serviceDesa: { title: string; href: string; description: string }[] = [
  {
    title: "Laporan Pengaduan",
    href: "/service/complaint",
    description: "Halaman ini menyediakan fasilitas bagi masyarakat Desa Kutamukti untuk menyampaikan laporan, keluhan, atau aspirasi terkait pelayanan publik, infrastruktur, lingkungan, dan isu-isu lainnya di lingkungan desa. Melalui sistem pengaduan ini, pemerintah desa berkomitmen untuk mendengarkan suara warga dan menindaklanjuti setiap laporan secara transparan dan responsif. Partisipasi aktif masyarakat sangat penting dalam mewujudkan tata kelola desa yang baik, terbuka, dan bertanggung jawab.",
  },
  {
    title: "Agenda Desa",
    href: "/service/schedule",
    description:
      "Halaman ini memuat berbagai agenda dan kegiatan resmi yang akan diselenggarakan oleh Pemerintah Desa Kutamukti, seperti musyawarah warga, kegiatan gotong royong, pelatihan masyarakat, perayaan hari besar, hingga program pembangunan desa. Informasi ini disajikan agar masyarakat dapat mengikuti dan berpartisipasi aktif dalam setiap kegiatan yang berlangsung. Dengan keterbukaan agenda, diharapkan tercipta komunikasi yang lebih baik antara pemerintah desa dan warganya.",
  },
];

export const productDesa: { title: string; href: string; description: string }[] = [
  {
    title: "Katalog Produk",
    href: "/product/catalog",
    description: "Halaman ini menampilkan katalog produk unggulan dari pelaku UMKM Desa Kutamukti, mulai dari hasil pertanian, kerajinan tangan, kuliner lokal, hingga produk kreatif lainnya. Setiap produk merupakan cerminan potensi dan kreativitas masyarakat desa yang terus berkembang. Dengan adanya katalog ini, diharapkan dapat memperluas jangkauan pemasaran, meningkatkan daya saing produk lokal, serta mendorong pertumbuhan ekonomi desa yang berkelanjutan.",
  },
  {
    title: "Daftar UMKM",
    href: "/product/store",
    description:
      "Halaman ini menyajikan daftar lengkap pelaku Usaha Mikro, Kecil, dan Menengah (UMKM) yang aktif di Desa Kutamukti. Informasi mencakup nama usaha, jenis produk atau layanan, alamat, dan kontak yang dapat dihubungi. Tujuan dari halaman ini adalah untuk mengenalkan potensi ekonomi lokal sekaligus mempermudah kolaborasi, pemasaran, dan dukungan dari berbagai pihak. Dengan mendukung UMKM desa, kita turut mendorong kemandirian dan kesejahteraan masyarakat secara menyeluruh.",
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
          <NavigationMenuLink href="/maps" className="font-normal uppercase">
            Peta Interaktif Desa
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-normal uppercase">
            Produk Desa
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {productDesa.map((component) => (
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
            Galeri
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {galleryDesa.map((component) => (
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
          <NavigationMenuLink href="mailto:kutamukti.pemdes.karawangkab@gmail.com" target="_blank" className="font-normal uppercase">
            Hubungi Kami
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export function MobileNavMenu() {
  return (
    <div className="flex flex-col gap-2">
      <Link href="/" className="py-2 text-base font-semibold text-emerald-700">
        Beranda
      </Link>
      <Link href="/news" className="py-2 text-base font-semibold text-emerald-700">
        Berita
      </Link>
      <Accordion>
        <AccordionItem title="Profil Desa">
          <ul className="pl-2 flex flex-col gap-2">
            {profileDesa.map((item) => (
              <li key={item.title}>
                <Link href={item.href} className="block py-1 text-base text-emerald-700 hover:underline">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </AccordionItem>
        <AccordionItem title="Data Desa">
          <ul className="pl-2 flex flex-col gap-2">
            {dataDesa.map((item) => (
              <li key={item.title}>
                <Link href={item.href} className="block py-1 text-base text-emerald-700 hover:underline">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </AccordionItem>
        <AccordionItem title="Produk Desa">
          <ul className="pl-2 flex flex-col gap-2">
            {productDesa.map((item) => (
              <li key={item.title}>
                <Link href={item.href} className="block py-1 text-base text-emerald-700 hover:underline">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </AccordionItem>
        <AccordionItem title="Galeri">
          <ul className="pl-2 flex flex-col gap-2">
            {galleryDesa.map((item) => (
              <li key={item.title}>
                <Link href={item.href} className="block py-1 text-base text-emerald-700 hover:underline">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </AccordionItem>
        <AccordionItem title="Layanan">
          <ul className="pl-2 flex flex-col gap-2">
            {serviceDesa.map((item) => (
              <li key={item.title}>
                <Link href={item.href} className="block py-1 text-base text-emerald-700 hover:underline">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </AccordionItem>
      </Accordion>
      <Link href="/maps" className="py-2 text-base font-semibold text-emerald-700">
        Peta Interaktif Desa
      </Link>
      <Link href="mailto:kutamukti.pemdes.karawangkab@gmail.com" target="_blank" className="py-2 text-base font-semibold text-emerald-700">
        Hubungi Kami
      </Link>
    </div>
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
