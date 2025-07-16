"use client";

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
import React, { useState } from "react";
import { NavigationMenuDemo } from "./navMenu";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import { MobileNavMenu } from "./navMenu";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="w-full sticky top-0 z-999 bg-background">
      <div className="px-2 py-6 border-b border-neutral-300">
        <div className="max-w-6xl px-2 mx-auto flex flex-col md:flex-row gap-4 md:gap-8 justify-between items-center">
          <div className="flex flex-row gap-4 items-center justify-between w-full md:w-auto">
            <div className="flex flex-row gap-2 items-center">
              <Image alt="logo" width={40} height={50} src={"/logos/pemda-karawang.png"} />
              <Image alt="logo" width={45} height={50} src={"/logos/jabar.png"} />
              <Link href={`/created-by`}>
                <Image alt="logo" width={50} height={50} src={"/logos/kkn-unsika.png"} />
              </Link>
            </div>
            {/* Hamburger menu for mobile using Headless UI */}
            <button
              className="md:hidden p-2 ml-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {/* Search bar: full width on mobile */}
          <div className="w-full md:flex-grow mt-4 md:mt-0">
            <Input
              placeholder="Cari Berita dan Layanan Kutamukti Disini"
              type="search"
              variant="bordered"
              radius="md"
              startContent={<MagnifyingGlassIcon size={20} weight="thin" />}
              className="w-full"
            />
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
          <Dialog as="div" className="relative z-[1000] md:hidden" onClose={setMobileMenuOpen}>
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
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    {/* Language dropdown */}
                    <div className="mb-4 mt-8">
                      <Dropdown placement="bottom-end">
                        <DropdownTrigger>
                          <Button
                            variant="light"
                            startContent={<TranslateIcon size={20} weight="thin" />}
                            endContent={<CaretDownIcon size={16} color="#008FD7" />}
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
