"use client";

import React, { useState, useEffect, useRef } from "react";
import { ENV } from "@/lib/environment";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Image,
  Input,
} from "@heroui/react";
import {
  CaretDownIcon,
  MagnifyingGlassIcon,
  TranslateIcon,
} from "@phosphor-icons/react";
import Link from "next/link";
import { NavigationMenuDemo } from "./navMenu";
import { Dialog, Transition } from "@headlessui/react";
import { MobileNavMenu } from "./navMenu";
import type { News } from "@/types/news";

// Import route arrays from navMenu
import {
  profileDesa,
  dataDesa,
  serviceDesa,
  productDesa,
  galleryDesa,
} from "./navMenu";
import { usePathname } from "next/navigation";

type SearchRoute = {
  title: string;
  href: string;
  description: string;
  type: "route";
};

type SearchNews = {
  title: string;
  href: string;
  description: string;
  type: "news";
};

const flattenRoutes = (): SearchRoute[] => {
  const all = [
    ...profileDesa,
    ...dataDesa,
    ...serviceDesa,
    ...productDesa,
    ...galleryDesa,
    {
      title: "Berita",
      href: "/news",
      description: "Kumpulan berita Desa Kutamukti",
    },
    {
      title: "Peta Interaktif Desa",
      href: "/maps",
      description: "Peta digital Desa Kutamukti",
    },
    {
      title: "Hubungi Kami",
      href: "mailto:kutamukti.pemdes.karawangkab@gmail.com",
      description: "Kontak Pemerintah Desa Kutamukti",
    },
  ];
  return all.map((item) => ({ ...item, type: "route" as const }));
};

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [news, setNews] = useState<SearchNews[]>([]);
  const [loadingNews, setLoadingNews] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [pathname]);

  // Fetch news on mount
  useEffect(() => {
    const fetchNews = async () => {
      setLoadingNews(true);
      try {
        const res = await fetch(`${ENV.BASE_API}/news/getall`);
        const data = await res.json();
        setNews(
          (data.body || []).map(
            (item: News): SearchNews => ({
              title: item.title,
              href: `/news/${item.slug}`,
              description: item.raw_text,
              type: "news",
            })
          )
        );
      } catch (e) {
        console.error(e);
        setNews([]);
      } finally {
        setLoadingNews(false);
      }
    };
    fetchNews();
  }, []);

  // Combine all routes
  const allRoutes = flattenRoutes();

  // Filtered results
  const filteredRoutes: SearchRoute[] =
    search.length > 0
      ? allRoutes.filter((item) =>
          item.title.toLowerCase().includes(search.toLowerCase())
        )
      : [];
  const filteredNews: SearchNews[] =
    search.length > 0
      ? news.filter((item) =>
          item.title.toLowerCase().includes(search.toLowerCase())
        )
      : [];

  // Dropdown close on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    }
    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <div className="w-full sticky top-0 z-999 bg-background">
      <div className="px-2 py-6 border-b border-neutral-300">
        <div className="max-w-6xl px-2 mx-auto flex flex-col md:flex-row gap-2 sm:gap-4 md:gap-8 justify-between items-center">
          <div className="flex flex-row gap-2 sm:gap-4 items-center justify-between w-full md:w-auto">
            <div className="flex flex-row gap-2 items-center">
              <Link href={`/`} className="">
                <Image
                  alt="logo"
                  height={50}
                  width={undefined}
                  src={"/logos/pemda-karawang.png"}
                  className="h-[50px] w-auto object-contain"
                />
              </Link>
              <Link href={`https://karawangkab.go.id`} target="_blank" className="">
                <Image
                  alt="logo"
                  height={50}
                  width={undefined}
                  src={"/logos/jabar.png"}
                  className="h-[50px] w-auto object-contain"
                />
              </Link>
              <Link href={`/created-by`} className="">
                <Image
                  alt="logo"
                  height={50}
                  width={undefined}
                  src={"/logos/kkn-unsika.png"}
                  className="h-[50px] w-auto object-contain"
                />
              </Link>
            </div>
            {/* Hamburger menu for mobile using Headless UI */}
            <button
              className="md:hidden p-2 ml-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          {/* Search bar: full width on mobile */}
          <div
            className="w-full md:flex-grow mt-4 md:mt-0 relative"
            ref={dropdownRef}
          >
            <Input
              placeholder="Cari Berita dan Layanan Kutamukti Disini"
              type="search"
              variant="bordered"
              radius="md"
              startContent={<MagnifyingGlassIcon size={20} weight="thin" />}
              className="w-full"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setShowDropdown(true);
              }}
              onFocus={() => setShowDropdown(true)}
              autoComplete="off"
            />
            {showDropdown && search.length > 0 && (
              <div className="absolute left-0 right-0 mt-2 bg-white border border-neutral-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
                {filteredRoutes.length > 0 && (
                  <div>
                    <div className="px-4 pt-2 pb-1 text-xs font-semibold text-emerald-700">
                      Menu Navigasi
                    </div>
                    {filteredRoutes.map((item, idx) => (
                      <Link
                        key={item.href + idx}
                        href={item.href}
                        className="block px-4 py-2 hover:bg-emerald-50 text-sm text-emerald-900"
                        onClick={() => setShowDropdown(false)}
                      >
                        <div className="font-medium">{item.title}</div>
                        <div className="text-xs text-gray-500 line-clamp-1">
                          {item.description}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
                {filteredNews.length > 0 && (
                  <div>
                    <div className="px-4 pt-2 pb-1 text-xs font-semibold text-emerald-700">
                      Berita
                    </div>
                    {filteredNews.map((item, idx) => (
                      <Link
                        key={item.href + idx}
                        href={item.href}
                        className="block px-4 py-2 hover:bg-emerald-50 text-sm text-emerald-900"
                        onClick={() => setShowDropdown(false)}
                      >
                        <div className="font-medium">{item.title}</div>
                        <div className="text-xs text-gray-500 line-clamp-1">
                          {item.description}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
                {filteredRoutes.length === 0 &&
                  filteredNews.length === 0 &&
                  !loadingNews && (
                    <div className="px-4 py-4 text-center text-gray-400 text-sm">
                      Tidak ada hasil ditemukan.
                    </div>
                  )}
                {loadingNews && (
                  <div className="px-4 py-4 text-center text-gray-400 text-sm">
                    Memuat berita...
                  </div>
                )}
              </div>
            )}
          </div>
          {/* Language dropdown: hidden on mobile, shown in desktop */}
          <div className="hidden md:block">
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Button
                  variant="light"
                  startContent={<TranslateIcon size={20} weight="thin" />}
                  endContent={<CaretDownIcon size={16} color="#008FD7" />}
                >
                  ID
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="id">Bahasa Indonesia</DropdownItem>
                <DropdownItem key="comming soon" isDisabled>
                  Coming Soon
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        {/* Mobile Drawer Menu using Headless UI Dialog */}
        <Transition show={mobileMenuOpen} as={React.Fragment}>
          <Dialog
            as="div"
            className="relative z-[1000] md:hidden"
            onClose={setMobileMenuOpen}
          >
            <Transition.Child
              as={React.Fragment}
              enter="transition-opacity ease-linear duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-30" />
            </Transition.Child>
            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <Transition.Child
                  as={React.Fragment}
                  enter="transform transition ease-in-out duration-300"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-300"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <Dialog.Panel className="relative w-4/5 max-w-xs h-full bg-white shadow-xl flex flex-col p-6">
                    {/* Close button */}
                    <button
                      className="absolute top-4 right-4 p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                      onClick={() => setMobileMenuOpen(false)}
                      aria-label="Close menu"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                    {/* Language dropdown */}
                    <div className="mb-4 mt-8">
                      <Dropdown placement="bottom-end">
                        <DropdownTrigger>
                          <Button
                            variant="light"
                            startContent={
                              <TranslateIcon size={20} weight="thin" />
                            }
                            endContent={
                              <CaretDownIcon size={16} color="#008FD7" />
                            }
                            className="w-full justify-between"
                          >
                            ID
                          </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Static Actions">
                          <DropdownItem key="id">Bahasa Indonesia</DropdownItem>
                          <DropdownItem key="comming soon" isDisabled>
                            Coming Soon
                          </DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                    {/* Navigation menu vertical for mobile */}
                    <nav className="flex-1 overflow-y-auto">
                      <MobileNavMenu />
                    </nav>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
      {/* Desktop nav menu */}
      <div className="w-full py-4 border-b border-neutral-300 hidden md:block">
        <div className="max-w-6xl px-2 w-max mx-auto ">
          <NavigationMenuDemo />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
