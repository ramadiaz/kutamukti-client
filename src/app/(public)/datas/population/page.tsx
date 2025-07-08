import APB from '@/components/APB'
import PageHeader from '@/components/PageHeader'
import Population from '@/components/Population'
import React from 'react'

const PopulationPage = () => {
    return (
        <div>
            <PageHeader
                title="Jumlah Penduduk dan APB"
                description="Visi dan Misi Kementerian Komunikasi dan Informatika mengacu pada Visi dan Misi Presiden Republik Indonesia Prabowo Subianto dan Wakil Presiden Republik Indonesia Gibran Rakabuming Raka yaitu"
                breadCrumbs={["Data Desa", "Jumlah Penduduk dan APB"]}
            />
            <Population />
            <APB />
        </div>
    )
}

export default PopulationPage