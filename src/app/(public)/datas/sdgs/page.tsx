import PageHeader from '@/components/PageHeader'
import SDGS from '@/components/SDGS/indes'
import React from 'react'

const SDGSPage = () => {
    return (
        <div>
            <PageHeader
                title="Data Statistik Desa Kutamukti"
                description="Halaman ini memuat komitmen dan pencapaian Desa Kutamukti dalam mendukung Sustainable Development Goals (SDGs) atau Tujuan Pembangunan Berkelanjutan di tingkat desa. SDGs Desa terdiri dari 18 tujuan yang mencakup aspek sosial, ekonomi, lingkungan, dan kelembagaan yang bertujuan untuk mewujudkan desa tanpa kemiskinan, desa sehat, desa ramah lingkungan, serta tata kelola desa yang adil dan partisipatif. Melalui pendekatan ini, pembangunan desa diharapkan lebih terarah, inklusif, dan berkelanjutan untuk seluruh lapisan masyarakat."
                breadCrumbs={["Data Desa", "SDGs "]}
            />
            <SDGS />
        </div>
    )
}

export default SDGSPage