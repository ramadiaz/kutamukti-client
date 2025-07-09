import { Image } from "@heroui/react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer-1 bg-gray-100 py-8 sm:py-12 mt-24">
      <div className="container mx-auto px-4">
        <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
            <h5 className="text-xl font-bold mb-6">Nomor Telepon Penting</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <Link
                  href="https://wa.me/6285777564008"
                  target="_blank"
                  className="border-b border-solid border-transparent hover:border-primary hover:text-primary"
                >
                  Aan Maryani
                </Link>
                <p className="text-xs opacity-80">Kepala Desa</p>
              </li>
              <li className="mb-2">
                <Link
                  href="https://wa.me/6285775681924"
                  target="_blank"
                  className="border-b border-solid border-transparent hover:border-primary hover:text-primary"
                >
                  Mas&apos;ut
                </Link>
                <p className="text-xs opacity-80">Sekretaris Desa</p>
              </li>
              <li className="mb-2">
                <Link
                  href="https://wa.me/6285773239839"
                  target="_blank"
                  className="border-b border-solid border-transparent hover:border-primary hover:text-primary"
                >
                  Yayan Mulyana
                </Link>
                <p className="text-xs opacity-80">Kaur Keuangan</p>
              </li>
              <li className="mb-2">
                <Link
                  href="https://wa.me/6285773239839"
                  target="_blank"
                  className="border-b border-solid border-transparent hover:border-primary hover:text-primary"
                >
                  Dusen Sasmita
                </Link>
                <p className="text-xs opacity-80">Kaur Umum dan Perencanaan</p>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
            <h5 className="text-xl font-bold mb-6">Jelajahi</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <Link
                  href="https://www.instagram.com/puskesmaskutamukti/"
                  target="_blank"
                  className="border-b border-solid border-transparent hover:border-primary hover:text-primary"
                >
                  Puskesmas Kutamukti
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="https://www.instagram.com/kec.kutawaluya/"
                  target="_blank"
                  className="border-b border-solid border-transparent hover:border-primary hover:text-primary"
                >
                  Kecamatan Kutawaluya
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="https://karawangkab.go.id/"
                  target="_blank"
                  className="border-b border-solid border-transparent hover:border-primary hover:text-primary"
                >
                  Kabupaten Karawang
                </Link>
              </li>
            </ul>
          </div>
          <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
            <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left">
              Stay connected
            </h5>
            <div className="flex sm:justify-center xl:justify-start">
              <Link
                href=""
                className="w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600"
              >
                <i className="fab fa-facebook"></i>
              </Link>
              <Link
                href=""
                className="w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400"
              >
                <i className="fab fa-twitter"></i>
              </Link>
              <Link
                href=""
                className="w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600"
              >
                <i className="fab fa-google-plus-g"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t">
          <div className="sm:w-full px-4 md:w-1/6">
            <strong>Pemerintahan Desa Kutamukti</strong>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
            <h6 className="font-bold mb-2">Alamat</h6>
            <address className="not-italic mb-4 text-sm">
              Kutawaluya, Kabupaten Karawang,
              <br />
              Jawa Barat, Indonesia
            </address>
          </div>
          <Link href={`/created-by`} className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0 cursor-pointer">
            <h6 className="font-bold mb-2">Dibuat oleh</h6>
            <div className="flex flex-row items-center justify-start gap-2">
              <Image
                src={`/logos/kkn-unsika.png`}
                alt="Logo KKN UNSIKA"
                sizes="50px"
                className="size-[50px]"
              />
              <p className="not-italic text-sm">
                KKN UNSIKA 2025
                <br />
                Kelompok 30
              </p>
            </div>
          </Link>
          {/* <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
            <h6 className="font-bold mb-2">Free Resources</h6>
            <p className="mb-4 text-sm">
              Use our HTML blocks for <strong>FREE</strong>.<br />
              <em>All are MIT License</em>
            </p>
          </div> */}
          <div className="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0">
            <Link
              href={`/contact-us`}
              className="px-4 py-2 bg-primary/80 hover:bg-primary transition-all duration-300 rounded text-white"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
        {/* <div className="sm:flex  sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t justify-end">
          <p className="text-right text-sm opacity-80">
            @{new Date().getFullYear()} Powered by{" "}
            <Link href={`https://xanware.my.id`} target="_blank" className="hover:underline">
              Xanware
            </Link>
          </p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
