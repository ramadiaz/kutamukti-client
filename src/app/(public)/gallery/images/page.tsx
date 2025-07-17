import ImagesGallery from '@/components/ImagesGallery'
import PageHeader from '@/components/PageHeader'
import React from 'react'

export const metadata = {
  title: "Galeri Foto Desa Kutamukti",
  description: "Kumpulan foto kegiatan, pembangunan, dan keindahan Desa Kutamukti.",
};

const ImagesGalleryPage = () => {
    return (
        <div>
            <PageHeader
                title="Galeri Foto Desa Kutamukti"
                description="Galeri Foto Berita Desa Kutamukti menghadirkan kumpulan gambar yang merekam setiap momen penting di desa. Mulai dari kegiatan warga, pembangunan infrastruktur, acara adat, hingga keindahan alam sekitar. Melalui foto-foto ini, setiap cerita dan perjalanan Desa Kutamukti dapat tersampaikan dengan jelas dan penuh makna."
                breadCrumbs={["Galeri", "Foto "]}
            />
            <div className='h-14' />
            <ImagesGallery />
        </div>
    )
}

export default ImagesGalleryPage