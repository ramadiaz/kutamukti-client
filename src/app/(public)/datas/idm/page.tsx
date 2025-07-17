import IDM from '@/components/IDM'
import PageHeader from '@/components/PageHeader'
import React from 'react'

export const metadata = {
  title: "Indeks Desa Membangun (IDM) Kutamukti",
  description: "Data dan informasi tentang Indeks Desa Membangun (IDM) Desa Kutamukti.",
};

const IDMPage = () => {
    return (
        <div>
            <PageHeader
                title="Data Statistik Desa Kutamukti"
                description="Halaman ini menyajikan informasi mengenai Indeks Desa Membangun (IDM) Desa Kutamukti, yaitu sebuah indeks yang digunakan untuk mengukur tingkat kemandirian dan kemajuan desa berdasarkan tiga dimensi utama: ketahanan sosial, ketahanan ekonomi, dan ketahanan ekologi/lingkungan. IDM menjadi acuan penting dalam menentukan status desa—apakah termasuk desa tertinggal, berkembang, atau mandiri—serta sebagai dasar dalam perencanaan dan evaluasi pembangunan desa secara menyeluruh. Dengan transparansi data IDM, masyarakat dapat melihat sejauh mana kemajuan pembangunan Desa Kutamukti dari waktu ke waktu."
                breadCrumbs={["Data Desa", "IDM "]}
            />
            <IDM />
        </div>
    )
}

export default IDMPage