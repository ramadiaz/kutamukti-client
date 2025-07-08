import PageHeader from "@/components/PageHeader";
import AboutDesa from "@/components/AboutDesa";
import React from "react";
import VissionMission from "@/components/VissionMission";

const About = () => {
    return (
        <div>
            <PageHeader
                title="Tentang Desa dan Visi Misi Desa Kutamukti"
                description="Visi dan Misi Kementerian Komunikasi dan Informatika mengacu pada Visi dan Misi Presiden Republik Indonesia Prabowo Subianto dan Wakil Presiden Republik Indonesia Gibran Rakabuming Raka yaitu"
                breadCrumbs={["Profil", "Tentang & Visi Misi"]}
            />
            <AboutDesa />
            <VissionMission />
        </div>
    );
};

export default About;
