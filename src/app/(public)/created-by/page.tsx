import CreatedBy from '@/components/CreatedBy'
import PageHeader from '@/components/PageHeader'
import React from 'react'

export const metadata = {
  title: "Dibuat Oleh KKN UNSIKA 2025 Kelompok 30",
  description: "Website ini dikembangkan oleh KKN UNSIKA 2025 Kelompok 30 sebagai kontribusi digitalisasi desa.",
};

const CreatedByPage = () => {
    return (
        <div>
            <PageHeader
                title="KKN UNSIKA 2025 KELOMPOK 30"
                description="Website ini dikembangkan oleh Kelompok 30 Kuliah Kerja Nyata (KKN) Universitas Singaperbangsa Karawang (UNSIKA) Tahun 2025 sebagai bentuk kontribusi nyata kepada masyarakat dalam mendukung digitalisasi dan kemudahan akses informasi desa."
                breadCrumbs={["Dibuat Oleh"]}
            />
            <div className='h-16' />
            <CreatedBy />
        </div>
    )
}

export default CreatedByPage