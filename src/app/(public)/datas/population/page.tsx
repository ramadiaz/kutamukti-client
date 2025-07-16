import APB from '@/components/APB'
import PageHeader from '@/components/PageHeader'
import Population from '@/components/Population'
import React from 'react'

const PopulationPage = () => {
    return (
        <div>
            <PageHeader
                title="Jumlah Penduduk dan APB"
                description="Halaman ini menyajikan data jumlah penduduk Desa Kutamukti secara terperinci berdasarkan kategori seperti usia, jenis kelamin, dan mata pencaharian. Selain itu, tersedia juga informasi mengenai Anggaran Pendapatan dan Belanja (APB) Desa yang mencakup sumber pendapatan, alokasi belanja, serta program-program yang dibiayai oleh anggaran desa. Transparansi ini bertujuan untuk meningkatkan partisipasi masyarakat dalam pembangunan desa dan memastikan pengelolaan dana dilakukan secara akuntabel dan berkeadilan. "
                breadCrumbs={["Data Desa", "Jumlah Penduduk dan APB"]}
            />
            <Population />
            <APB />
        </div>
    )
}

export default PopulationPage