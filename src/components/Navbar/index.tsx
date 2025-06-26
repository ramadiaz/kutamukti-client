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

const Navbar = () => {
  return (
    <div className="w-full px-2 py-6 border-b border-neutral-300">
      <div className="max-w-5xl mx-auto flex flex-row gap-8 justify-between items-center">
        <div className="flex flex-row gap-4 items-center justify-between">
          <Image alt="logo" sizes="50px" src={"https://placehold.co/50"} />
          <Image alt="logo" sizes="50px" src={"https://placehold.co/50"} />
          <Image alt="logo" sizes="50px" src={"https://placehold.co/50"} />
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
          <Dropdown>
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
              <DropdownItem key="new">New file</DropdownItem>
              <DropdownItem key="copy">Copy link</DropdownItem>
              <DropdownItem key="edit">Edit file</DropdownItem>
              <DropdownItem key="delete" className="text-danger" color="danger">
                Delete file
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
