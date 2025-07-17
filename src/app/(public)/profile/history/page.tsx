import History from '@/components/History'
import PageHeader from '@/components/PageHeader'
import React from 'react'

export const metadata = {
  title: "Sejarah Desa Kutamukti",
  description: "Sejarah berdirinya, perkembangan, dan perjalanan Desa Kutamukti dari masa ke masa.",
};

const HistoryPage = () => {
    return (
        <div>
            <PageHeader
                title="Sejarah Kutamukti"
                description="Halaman ini memuat sejarah berdirinya Desa Kutamukti, mulai dari asal-usul nama desa, tokoh-tokoh pendiri, hingga perkembangan desa dari masa ke masa. Melalui narasi sejarah ini, masyarakat diajak untuk mengenali akar budaya, nilai-nilai lokal, serta perjalanan panjang yang membentuk identitas Desa Kutamukti saat ini. Pemahaman akan sejarah desa menjadi pijakan penting dalam melanjutkan pembangunan yang berlandaskan kearifan lokal."
                breadCrumbs={["Profil", "Sejarah"]}
            />
            <History />
        </div>
    )
}

export default HistoryPage