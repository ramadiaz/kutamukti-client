"use client";

import { ENV } from "@/lib/environment";
import { Button, Input, Textarea } from "@heroui/react";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ComplaintForm = () => {
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
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
        const data = await res.json();
        console.log(data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          id="_title"
          name="_title"
          label="Judul"
          type="text"
          placeholder="Ketik Subjek Pengaduan Anda disini..."
        />
        <Textarea
          id="description"
          name="description"
          label="Deskripsi"
          type="text"
          placeholder="Ketik Deskripsi Pengaduan Anda disini..."
        />
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
          onChange={handleCaptchaChange}
        />
        <Button type="submit">Kirim</Button>
      </form>
    </div>
  );
};

export default ComplaintForm;
