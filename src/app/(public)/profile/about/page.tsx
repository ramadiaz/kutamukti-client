import PageHeader from "@/components/PageHeader";
import AboutDesa from "@/components/AboutDesa";
import React from "react";
import VissionMission from "@/components/VissionMission";

export const metadata = {
  title: "Tentang Desa Kutamukti & Visi Misi",
  description: "Informasi tentang sejarah, visi, dan misi Desa Kutamukti untuk pembangunan berkelanjutan.",
};

const About = () => {
    return (
        <div>
            <PageHeader
                title="Tentang Desa dan Visi Misi Desa Kutamukti"
                description="Halaman ini menyajikan gambaran umum mengenai Desa Kutamukti, termasuk sejarah singkat, potensi wilayah, serta kehidupan sosial masyarakatnya. Di samping itu, Anda juga dapat mengetahui visi dan misi Desa Kutamukti sebagai pedoman pembangunan yang berkelanjutan. Dengan memahami arah dan tujuan desa, diharapkan masyarakat dan pemangku kepentingan dapat berperan aktif dalam mewujudkan desa yang maju, mandiri, dan sejahtera."
                breadCrumbs={["Profil", "Tentang & Visi Misi"]}
            />
            <AboutDesa />
            <VissionMission />
        </div>
    );
};

export default About;
