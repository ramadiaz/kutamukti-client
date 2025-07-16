"use client";

import { ENV } from "@/lib/environment";
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Textarea, useDisclosure } from "@heroui/react";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ComplaintForm = () => {
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false)
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const confirmDisclosure = useDisclosure()

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsLoading(true)
      const res = await fetch(ENV.BASE_API + `/complaint/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: e.target._title.value,
          description: e.target.description.value,
          captcha: captchaValue,
        }),
      });

      if (res.ok) {
        confirmDisclosure.onOpen()
        e.target.reset()
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false)
    }
  };

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  return (
    <div className="mx-auto max-w-6xl px-2 w-full py-14">
      <div className="space-y-2">
        <h1 className="font-semibold text-2xl">
          Form Pengaduan
        </h1>
        <p className="text-sm max-w-2xl">
          Form Pengaduan ini disediakan sebagai sarana bagi masyarakat untuk menyampaikan keluhan, saran, atau laporan terkait pelayanan publik, infrastruktur desa, lingkungan, administrasi, dan isu-isu lainnya yang terjadi di wilayah Desa Kutamukti.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mt-8 flex flex-row gap-4">
        <div className="basis-1/2 space-y-4">
          <Input
            variant="bordered"
            id="_title"
            name="_title"
            label="Judul"
            type="text"
            placeholder="Ketik Subjek Pengaduan Anda disini..."
          />
          <Textarea
            variant="bordered"
            id="description"
            name="description"
            label="Deskripsi"
            type="text"
            placeholder="Ketik Deskripsi Pengaduan Anda disini..."
          />
        </div>
        <div className="basis-1/2 space-y-4">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
            onChange={handleCaptchaChange}
          />
          <Button type="submit" className="w-[300px]" color="primary" isLoading={isLoading}>Kirim</Button>
        </div>
      </form>
      <Modal isOpen={confirmDisclosure.isOpen} onOpenChange={confirmDisclosure.onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
            <ModalHeader>
              Laporan Sukses!
            </ModalHeader>
              <ModalBody>
                Laporan pengaduan berhasil diterima, akan segera diproses oleh tim Kutamukti.
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={onClose}>
                  Tutup
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ComplaintForm;
