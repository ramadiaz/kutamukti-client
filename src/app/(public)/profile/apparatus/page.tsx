import ApparatusList from "@/components/ApparatusList";
import ApparatusChart from "@/components/ApparatusList/apparatusChart";
import PageHeader from "@/components/PageHeader";
import React from "react";

export const metadata = {
  title: "Daftar Perangkat Desa Kutamukti",
  description: "Struktur dan susunan perangkat Desa Kutamukti beserta tugas dan tanggung jawabnya.",
};

const Apparatus = () => {
  return (
    <div>
      <PageHeader
        title="Daftar Perangkat Desa"
        description="Halaman ini menampilkan informasi lengkap mengenai struktur dan susunan perangkat Desa Kutamukti, mulai dari Kepala Desa hingga staf pelaksana lainnya. Setiap perangkat desa memiliki peran dan tanggung jawab dalam menjalankan roda pemerintahan serta pelayanan publik di tingkat desa. Dengan adanya transparansi ini, diharapkan masyarakat dapat mengenal lebih dekat para aparatur desa yang bekerja demi kemajuan dan kesejahteraan bersama."
        breadCrumbs={["Profil", "Daftar Perangkat Desa"]}
      />
      <div className="h-12" />
      <ApparatusChart />
      <div className="h-8" />
      <ApparatusList />
    </div>
  );
};

export default Apparatus;
