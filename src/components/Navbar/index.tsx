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
import React from "react";
import { NavigationMenuDemo } from "./navMenu";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full sticky top-0 z-999 bg-background">
      <div className="px-2 py-6 border-b border-neutral-300">
        <div className="max-w-6xl mx-auto flex flex-row gap-8 justify-between items-center">
          <div className="flex flex-row gap-4 items-center justify-between">
            <Image alt="logo" width={40} height={50} src={"/logos/pemda-karawang.png"} />
            <Image alt="logo" width={45} height={50} src={"/logos/jabar.png"} />
            <Link href={`/created-by`}>
              <Image alt="logo" width={50} height={50} src={"/logos/kkn-unsika.png"} />
            </Link>
          </div>
          <div className="flex-grow">
            <Input
              placeholder="Cari Berita dan Layanan Kutamukti Disini"
              type="search"
              variant="bordered"
              radius="md"
              startContent={<MagnifyingGlassIcon size={20} weight="thin" />}
            />
          </div>
          <div>
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
      </div>
      <div className="w-full py-4 border-b border-neutral-300">
        <div className="max-w-6xl w-max mx-auto ">
          <NavigationMenuDemo />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
