"use client";

import { Image } from "@heroui/react";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex flex-wrap gap-4 justify-center">
        <ContactCard
          value={`Desa Kutamukti Kec. Kutawaluya Kab. Karawang`}
          image={`/icons/maps.webp`}
          href="https://maps.app.goo.gl/63xgsXTnBw83JhVX8"
        />
        <ContactCard
          value={`085811144429`}
          image={`/icons/whatsapp.webp`}
          href="https://wa.me/6285811144429"
        />
        <ContactCard
          value={`Kantor Desa Kutamukti`}
          image={`/icons/office.webp`}
          href="https://maps.app.goo.gl/63xgsXTnBw83JhVX8"
        />
      </div>
    </div>
  );
};

const ContactCard = ({
  value,
  image,
  href,
}: {
  value: string;
  image: string;
  href: string;
}) => {
  return (
    <Link href={href} target="_blank" className="flex flex-col items-center justify-start w-[200px] sm:w-[250px] space-y-2 shadow-xl p-4 rounded-xl hover:scale-105 transition-all duration-400 bg-gradient-to-br from-emerald-100 to-20%">
      <div>
        <Image
          src={image}
          width={100}
          height={100}
          alt={`icons`}
          className="object-cover"
        />
      </div>
      <div>
        <p className="text-center text-sm capitalize">{value}</p>
      </div>
    </Link>
  );
};

export default Contact;
