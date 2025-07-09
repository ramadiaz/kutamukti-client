import FacInf from '@/components/FacInf'
import PageHeader from '@/components/PageHeader'
import React from 'react'

const FacInfPage = () => {
    return (
        <div>
            <PageHeader
                title="Sarana dan Prasarana"
                description="Visi dan Misi Kementerian Komunikasi dan Informatika mengacu pada Visi dan Misi Presiden Republik Indonesia Prabowo Subianto dan Wakil Presiden Republik Indonesia Gibran Rakabuming Raka yaitu"
                breadCrumbs={["Data Desa", "Sarana dan Prasarana"]}
            />
            <FacInf />
        </div>
    )
}

export default FacInfPage