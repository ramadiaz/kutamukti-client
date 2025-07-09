import PageHeader from '@/components/PageHeader'
import SDGS from '@/components/SDGS/indes'
import React from 'react'

const SDGSPage = () => {
    return (
        <div>
            <PageHeader
                title="Data Statistik Desa Kutamukti"
                description="Halaman ini menyajikan informasi terkini mengenai Indeks Desa Membangun (IDM) dan Sustainable Development Goals (SDGs) di tingkat desa. IDM memberikan gambaran komposit tentang status kemajuan desa berdasarkan ketahanan sosial, ekonomi, dan ekologi/lingkungan. Sementara itu, SDGs desa menampilkan capaian masing-masing tujuan pembangunan berkelanjutan yang mencakup aspek sosial, kesehatan, pendidikan, lingkungan, hingga ekonomi. Statistik ini menjadi dasar perencanaan pembangunan desa yang lebih terarah, partisipatif, dan berkelanjutan."
                breadCrumbs={["Data Desa", "Statistik Statistik "]}
            />
            <SDGS />
        </div>
    )
}

export default SDGSPage