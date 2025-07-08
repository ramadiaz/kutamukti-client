import ComplaintForm from "@/components/ComplaintForm";
import PageHeader from "@/components/PageHeader";
import React from "react";

const Complaint = () => {
  return (
    <div>
      <PageHeader
        title="Form Pengaduan Desa Kutamukti"
        description="Visi dan Misi Kementerian Komunikasi dan Informatika mengacu pada Visi dan Misi Presiden Republik Indonesia Prabowo Subianto dan Wakil Presiden Republik Indonesia Gibran Rakabuming Raka yaitu"
        breadCrumbs={["Service", "Laporan Pengaduan"]}
      />
      <ComplaintForm />
    </div>
  );
};

export default Complaint;
