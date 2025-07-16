import React from 'react'

type FacInfType = {
    name: string,
    total: number
}

const SaranaPemerintahData: FacInfType[] = [
    {
        name: "Kantor Desa",
        total: 1
    },
    {
        name: "GOR",
        total: 1
    },
    {
        name: "Gedung BUMDesa",
        total: 2
    },
    {
        name: "Gedung POSYANDU Anggrek",
        total: 4
    },
    {
        name: "Gardu Kantor Desa",
        total: 1
    },
]

const SaranaIbadahData: FacInfType[] = [
    {
        name: "Masjid Jamie",
        total: 4
    },
    {
        name: "Mushola",
        total: 13
    },
    {
        name: "Masjid Ta'lim",
        total: 7
    },
]

const SaranaPendidikanData: FacInfType[] = [
    {
        name: "PAUD",
        total: 4
    },
    {
        name: "TK / Roudahotul Athfal",
        total: 3
    },
    {
        name: "Sekolah Dasar / SDIT",
        total: 4
    },
    {
        name: "SMP",
        total: 1
    },
    {
        name: "SMK",
        total: 1
    },
    {
        name: "Pondok Pesantren",
        total: 3
    },
]

const SaranaKesehatanData: FacInfType[] = [
    {
        name: "PUSKESMAS",
        total: 1
    },
    {
        name: "POSYANDU",
        total: 4
    },
    {
        name: "Dokter Praktek",
        total: 2
    },
    {
        name: "Klinik Bersalin",
        total: 1
    },
    {
        name: "Pos KB",
        total: 2
    },
    {
        name: "Bidan Desa",
        total: 1
    },
    {
        name: "Paraji Terlatih",
        total: 2
    },
]

const FacInf = () => {
    return (
        <div className='mx-auto max-w-6xl px-2 py-16'>
            <div>
                <h1 className='text-2xl font-semibold'>Sarana dan Prasarana</h1>
                <p className='text-sm'>
                    Kondisi sarana dan prasarana umum Desa Kutamukti secara garis besar adalah sebagai berikut :
                </p>
            </div>
            <div className='space-y-4 mt-8'>
                <h2 className='font-semibold'>
                    1. Sarana Pemerintahan Desa
                </h2>
                <FacInfTable data={SaranaPemerintahData} />
            </div>
            <div className='space-y-4 mt-8'>
                <h2 className='font-semibold'>
                    2. Sarana Ibadah
                </h2>
                <FacInfTable data={SaranaIbadahData} />
            </div>
            <div className='space-y-4 mt-8'>
                <h2 className='font-semibold'>
                    3. Sarana Pendidikan
                </h2>
                <FacInfTable data={SaranaPendidikanData} />
            </div>
            <div className='space-y-4 mt-8'>
                <h2 className='font-semibold'>
                    4. Sarana Kesehatan
                </h2>
                <FacInfTable data={SaranaKesehatanData} />
            </div>
        </div>
    )
}

const FacInfTable = ({ data }: { data: FacInfType[] }) => {
    return (
        <table className='w-full'>
            <thead>
                <tr className='bg-neutral-200'>
                    <th className='text-sm w-1/2 px-4 py-2 border border-neutral-300'>
                        Sarana / Prasarana
                    </th>
                    <th className='text-sm w-1/2 px-4 py-2 border border-neutral-300'>
                        Jumlah / Volume
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item, i) => {
                        return (
                            <tr key={i}>
                                <td className='text-sm w-1/2 px-4 py-2 border border-neutral-300'>
                                    {item.name}
                                </td>
                                <td className='text-sm w-1/2 px-4 py-2 border border-neutral-300'>
                                    {item.total} Unit
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default FacInf