import FacInf from '@/components/FacInf'
import PageHeader from '@/components/PageHeader'
import React from 'react'

export const metadata = {
  title: "Sarana & Prasarana Desa Kutamukti",
  description: "Informasi tentang fasilitas pendidikan, kesehatan, dan infrastruktur Desa Kutamukti.",
};

const FacInfPage = () => {
    return (
        <div>
            <PageHeader
                title="Sarana dan Prasarana"
                description="Halaman ini memberikan informasi mengenai berbagai sarana dan prasarana yang dimiliki Desa Kutamukti, seperti fasilitas pendidikan, kesehatan, tempat ibadah, jalan, saluran irigasi, dan infrastruktur pendukung lainnya. Ketersediaan dan kondisi sarana prasarana ini menjadi indikator penting dalam mendukung aktivitas masyarakat serta menunjang pertumbuhan ekonomi dan sosial desa. Dengan informasi yang terbuka, masyarakat dapat mengetahui perkembangan infrastruktur sekaligus ikut mengawal pemerataan pembangunan."
                breadCrumbs={["Data Desa", "Sarana dan Prasarana"]}
            />
            <FacInf />
        </div>
    )
}

export default FacInfPage