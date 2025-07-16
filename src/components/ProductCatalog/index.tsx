"use client";

import { ENV } from "@/lib/environment";
import { UMKMProduct } from "@/types/umkm";
import { Image, Input } from "@heroui/react";
import {
  MagnifyingGlassIcon,
  MapPinAreaIcon,
  StorefrontIcon,
  TagIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";

const ProductCatalog = () => {
  const [productData, setProductData] = useState<UMKMProduct[]>([]);
  const [keyword, setKeyword] = useState<string>("");

  const fetchData = async () => {
    try {
      const res = await fetch(
        ENV.BASE_API + `/umkm/product/search?keyword=${keyword}`
      );
      if (res.ok) {
        const data = await res.json();
        setProductData(data.body as UMKMProduct[]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      fetchData();
    }, 500);
    return () => {
      clearTimeout(handler);
    };
  }, [keyword]);

  return (
    <div className="max-w-6xl mx-auto space-y-4">
      <div>
        <h1 className="uppercase font-semibold text-center text-2xl text-emerald-700">
          Beli Dari Desa
        </h1>
        <p className="text-center">
          Layanan yang disediakan promosi produk UMKM Desa Kutamukti sehingga
          mampu meningkatkan perekonomian masyarakat Desa
        </p>
      </div>
      <div className="max-w-3xl mx-auto">
        <Input
          placeholder="Cari Produk..."
          type="search"
          variant="bordered"
          radius="md"
          startContent={<MagnifyingGlassIcon size={20} weight="thin" />}
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>
      <div className="h-4" />
      <ProductList data={productData} />
      <div className="h-12" />
    </div>
  );
};

const ProductList = ({ data }: { data: UMKMProduct[] }) => {
  return (
    <div className="flex flex-grow justify-center items-center gap-4">
      {data.map((item, i) => {
        return <ProductCard data={item} key={i} />;
      })}
    </div>
  );
};

const ProductCard = ({ data }: { data: UMKMProduct }) => {
  return (
    <div className="w-[245px] h-[355px] rounded-xl shadow-xl p-2 relative">
      <Image
        src={data.images[0].image_url}
        alt={data.name}
        width={`100%`}
        height={140}
        referrerPolicy="no-referrer"
        className="object-cover"
      />
      <div className="p-2">
        <h1 className="font-semibold uppercase text-sm mt-1">{data.name}</h1>
        <ul className="mt-2 opacity-80">
          <li>
            <div className="flex flex-row gap-2 items-start justify-start">
              <TagIcon size={20} className="basis-1/8" />
              <p className="basis-7/8 text-xs">{data.price.toLocaleString("id-ID")}</p>
            </div>
          </li>
          <li>
            <div className="flex flex-row gap-2 items-start justify-start">
              <StorefrontIcon size={20} className="basis-1/8" />
              <p className="basis-7/8 text-xs">{data.umkm.name}</p>
            </div>
          </li>
          <li>
            <div className="flex flex-row gap-2 items-start justify-start">
              <MapPinAreaIcon size={20} className="basis-1/8" />
              <p className="basis-7/8 text-xs">{data.umkm.location}</p>
            </div>
          </li>
        </ul>
        <div className="h-4" />
      </div>
      <div className="absolute bottom-0 left-0 p-2 w-full">
        <div className=" bg-neutral-100 rounded-xl cursor-pointer">
          <div className="w-full flex flex-row justify-between items-center gap-4 px-3 py-2">
            <Image src={`/images/default-avatar.webp`} width={30} height={30} />
            <div className="flex-grow">
              <p className="text-left text-sm font-semibold">Mamat</p>
              <p className="text-left text-sm opacity-70">Hubungi Penjual</p>
            </div>
            <WhatsappLogoIcon size={35} weight="thin" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCatalog;
