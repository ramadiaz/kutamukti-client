import Activities from "@/components/BUMDes/Activities";
import ApparatusList from "@/components/BUMDes/ApparatusList";
import Contact from "@/components/BUMDes/Contact";
import VisiMisi from "@/components/BUMDes/VisiMisi";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "BUMDes MKB (Membangun Kutamukti Bersama)",
  description:
    "Badan Usaha Milik Desa (Bumdes) merupakan lembaga usaha yang didirikan oleh desa dan dikelola oleh pemerintah desa serta masyarakat setempat, dengan tujuan meningkatkan perekonomian desa, meningkatkan pendapatan asli desa, dan mendukung kemandirian desa.",
  openGraph: {
    title: "BUMDes MKB (Membangun Kutamukti Bersama)",
    description:
      "Badan Usaha Milik Desa (Bumdes) merupakan lembaga usaha yang didirikan oleh desa dan dikelola oleh pemerintah desa serta masyarakat setempat, dengan tujuan meningkatkan perekonomian desa, meningkatkan pendapatan asli desa, dan mendukung kemandirian desa.",
    url: "https://kutamukti.id/bumdes",
    type: "website",
    images: ["https://kutamukti.id/default-og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "BUMDes MKB (Membangun Kutamukti Bersama)",
    description:
      "Badan Usaha Milik Desa (Bumdes) merupakan lembaga usaha yang didirikan oleh desa dan dikelola oleh pemerintah desa serta masyarakat setempat, dengan tujuan meningkatkan perekonomian desa, meningkatkan pendapatan asli desa, dan mendukung kemandirian desa.",
    images: ["https://kutamukti.id/default-og-image.jpg"],
  },
  alternates: {
    canonical: "https://kutamukti.id/bumdes",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const BumdesPage = () => {
  return (
    <div>
      <PageHeader
        title="BUMDes MKB (Membangun Kutamukti Bersama)"
        description="Badan Usaha Milik Desa (Bumdes) merupakan lembaga usaha yang didirikan oleh desa dan dikelola oleh pemerintah desa serta masyarakat setempat, dengan tujuan meningkatkan perekonomian desa, meningkatkan pendapatan asli desa, dan mendukung kemandirian desa."
        breadCrumbs={["BUMDes"]}
      />
      <div className="h-16" />
      <VisiMisi />
      <div className="h-12" />
      <Contact />
      <div className="h-12" />
      <Activities />
      <div className="h-16" />
      <ApparatusList />
    </div>
  );
};

export default BumdesPage;
