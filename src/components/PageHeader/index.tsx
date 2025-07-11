"use client";

import { BreadcrumbItem, Breadcrumbs, Image } from "@heroui/react";
import React from "react";

const PageHeader = ({
  title,
  description,
  breadCrumbs = [],
  isTitleOnly = false
}: {
  title: string;
  description?: string;
  breadCrumbs: string[];
  isTitleOnly?: boolean;
}) => {
  return (
    <div className="relative w-full h-max">
      <Image
        src={"/images/hero-1.JPG"}
        alt="logo"
        width="100%"
        height={isTitleOnly ? 200 : 300}
        radius="none"
        className="object-[50%_37%] object-cover brightness-80"
      />
      <div className="absolute inset-0 z-10 py-6 text-white bg-gradient-to-b from-emerald-700 to-emerald-700/0">
        <div className="w-full max-w-6xl mx-auto">
          <Breadcrumbs>
            <BreadcrumbItem key={`root`} href="/" color="secondary">Home</BreadcrumbItem>
            {breadCrumbs.map((item, i) => (
              <BreadcrumbItem key={i} color="secondary">{item}</BreadcrumbItem>
            ))}
          </Breadcrumbs>
          <h1 className="mt-2 text-2xl uppercase">{title}</h1>
          <p className="mt-1 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
