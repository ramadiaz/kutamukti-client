import Activities from "@/components/BUMDes/Activities";
import ApparatusList from "@/components/BUMDes/ApparatusList";
import Contact from "@/components/BUMDes/Contact";
import VisiMisi from "@/components/BUMDes/VisiMisi";
import PageHeader from "@/components/PageHeader";

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
