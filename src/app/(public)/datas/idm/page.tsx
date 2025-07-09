import IDM from '@/components/IDM'
import PageHeader from '@/components/PageHeader'
import React from 'react'

const IDMPage = () => {
    return (
        <div>
            <PageHeader
                title="Data Statistik Desa Kutamukti"
                description="Halaman ini menyajikan informasi terkini mengenai Indeks Desa Membangun (IDM) dan Sustainable Development Goals (SDGs) di tingkat desa. IDM memberikan gambaran komposit tentang status kemajuan desa berdasarkan ketahanan sosial, ekonomi, dan ekologi/lingkungan. Sementara itu, SDGs desa menampilkan capaian masing-masing tujuan pembangunan berkelanjutan yang mencakup aspek sosial, kesehatan, pendidikan, lingkungan, hingga ekonomi. Statistik ini menjadi dasar perencanaan pembangunan desa yang lebih terarah, partisipatif, dan berkelanjutan."
                breadCrumbs={["Data Desa", "IDM "]}
            />
            <IDM />
        </div>
    )
}

export default IDMPage