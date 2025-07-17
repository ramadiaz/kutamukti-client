import ComplaintForm from "@/components/ComplaintForm";
import PageHeader from "@/components/PageHeader";
import React from "react";

export const metadata = {
  title: "Layanan Pengaduan Desa Kutamukti",
  description: "Formulir pengaduan untuk masyarakat Desa Kutamukti terkait pelayanan publik dan infrastruktur.",
};

const Complaint = () => {
  return (
    <div>
      <PageHeader
        title="Form Pengaduan Desa Kutamukti"
        description="Halaman ini menyediakan fasilitas bagi masyarakat Desa Kutamukti untuk menyampaikan laporan, keluhan, atau aspirasi terkait pelayanan publik, infrastruktur, lingkungan, dan isu-isu lainnya di lingkungan desa. Melalui sistem pengaduan ini, pemerintah desa berkomitmen untuk mendengarkan suara warga dan menindaklanjuti setiap laporan secara transparan dan responsif. Partisipasi aktif masyarakat sangat penting dalam mewujudkan tata kelola desa yang baik, terbuka, dan bertanggung jawab."
        breadCrumbs={["Service", "Laporan Pengaduan"]}
      />
      <ComplaintForm />
    </div>
  );
};

export default Complaint;
