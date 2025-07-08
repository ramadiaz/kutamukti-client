import History from '@/components/History'
import PageHeader from '@/components/PageHeader'
import React from 'react'

const HistoryPage = () => {
    return (
        <div>
            <PageHeader
                title="Sejarah Kutamukti"
                description="Berikut adalah Sejarah Desa Kutamukti mulai tahun 2024 sampai sekarang:"
                breadCrumbs={["Profil", "Sejarah"]}
            />
            <History />
        </div>
    )
}

export default HistoryPage