import Maps from '@/components/Maps'
import PageHeader from '@/components/PageHeader'
import React from 'react'

export const metadata = {
  title: "Peta Interaktif Desa Kutamukti",
  description: "Jelajahi wilayah dan fasilitas Desa Kutamukti melalui peta interaktif yang informatif.",
};

const MapsPage = () => {
    return (
        <div>
            <PageHeader
                title="Peta Interaktif Desa Kutamukti"
                description="Jelajahi wilayah Desa Kutamukti secara visual melalui peta interaktif. Temukan lokasi fasilitas umum, UMKM, dan informasi geografis lainnya dengan mudah."
                breadCrumbs={["Peta Interaktif"]}
            />
            <div className='h-14' />
            <Maps />
        </div>
    )
}

export default MapsPage