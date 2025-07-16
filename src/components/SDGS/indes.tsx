'use client'

import { Image } from '@heroui/react'
import { ChartBarIcon, CityIcon } from '@phosphor-icons/react'
import Link from 'next/link'
import React from 'react'

type SDGSType = {
    image: string,
    aspect: string,
    score: number
}

const SDGSData: SDGSType[] = [
    {
        image: "/sdgs/1.png",
        aspect: "Desa Tanpa Kemiskinan",
        score: 54.80
    },
    {
        image: "/sdgs/2.png",
        aspect: "Desa Tanpa Kelaparan",
        score: 50.00
    },
    {
        image: "/sdgs/3.png",
        aspect: "Sehat dan Sejahtera",
        score: 55.85
    },
    {
        image: "/sdgs/4.png",
        aspect: "Pendidikan Desa Berkualitas",
        score: 34.16
    },
    {
        image: "/sdgs/5.png",
        aspect: "Keterlibatan Perempuan Desa",
        score: 47.37
    },
    {
        image: "/sdgs/6.png",
        aspect: "Desa Layak Air Bersih dan Sanitasi",
        score: 69.20
    },
    {
        image: "/sdgs/7.png",
        aspect: "Desa Bersinergi Bersih dan Terbarukan",
        score: 99.84
    },
    {
        image: "/sdgs/8.png",
        aspect: "Pertumbuhan Ekonomi Desa Merata",
        score: 41.30
    },
    {
        image: "/sdgs/9.png",
        aspect: "Infrastruktur dan Inovasi Desa",
        score: 0.00
    },
    {
        image: "/sdgs/10.png",
        aspect: "Desa Tanpa Kesenjangan",
        score: 48.20
    },
    {
        image: "/sdgs/11.png",
        aspect: "Kawasan Pemukiman Desa Aman & Nyaman",
        score: 62.48
    },
    {
        image: "/sdgs/12.png",
        aspect: "Konsumsi & Produksi Desa Sadar Lingkungan",
        score: 0.00
    },
    {
        image: "/sdgs/13.png",
        aspect: "Desa Tanggap Perubahan Iklim",
        score: 0.00
    },
    {
        image: "/sdgs/14.png",
        aspect: "Desa Peduli Lingkungan Laut",
        score: 0.00
    },
    {
        image: "/sdgs/15.png",
        aspect: "Desa Peduli Lingkungan Darat",
        score: 0.00
    },
    {
        image: "/sdgs/16.png",
        aspect: "Desa Damai Berkeadilan",
        score: 73.17
    },
    {
        image: "/sdgs/17.png",
        aspect: "Kemitraan Untuk Pembangunan Desa",
        score: 0.00
    },
    {
        image: "/sdgs/18.png",
        aspect: "Kelembagaan Desa Dinamis & Budaya Desa Adaptif",
        score: 19.67
    },
]

const SDGS = () => {
    return (
        <div className='mx-auto max-w-6xl px-2 py-16'>
            <div>
                <h1 className='uppercase font-semibold text-2xl text-center'>Infografis Desa Kutamukti</h1>
            </div>
            <div className='w-full flex flex-row gap-4 items-center justify-center mt-4'>
                <Link href={`/datas/idm`} className='py-4 px-8 rounded-xl shadow-lg aspect-square flex flex-col items-center justify-center bg-gradient-to-br from-emerald-0 to-emerald-0 hover:bg-gradient-to-br hover:from-emerald-200 hover:to-emerald-100 transition-all duration-300' >
                    <ChartBarIcon size={44} weight='thin' />
                    <p className='text-center'>IDM</p>
                </Link>
                <Link href={`/datas/sdgs`} className='py-4 px-8 rounded-xl shadow-lg aspect-square flex flex-col items-center justify-center bg-gradient-to-br from-emerald-600 to-emerald-400 text-white transition-all duration-300' >
                    <CityIcon size={44} weight='thin' />
                    <p className='text-center'>SDGs</p>
                </Link>
            </div>
            <div>
                <div className='flex flex-row gap-4 items-center mt-8'>
                    <div className='basis-3/4'>
                        <h1 className='font-semibold'>
                            SDGs Kutamukti
                        </h1>
                        <p className='text-sm'>
                            SDGs Desa merujuk pada berbagai langkah yang dijalankan di tingkat desa guna mewujudkan Tujuan Pembangunan Berkelanjutan (Sustainable Development Goals/SDGs). SDGs sendiri adalah agenda internasional yang dicanangkan oleh Perserikatan Bangsa-Bangsa (PBB) dengan tujuan menanggulangi beragam permasalahan di bidang sosial, ekonomi, dan lingkungan secara global.
                        </p>
                    </div>
                    <div className='basis-1/4'>
                        <div className='w-full bg-gradient-to-br from-emerald-600 to-emerald-400 text-white flex flex-row gap-4 items-center p-6 rounded-xl'>
                            <p className='basis-2/3 font-semibold'>
                                Skor SDGs Kutamukti
                            </p>
                            <p className='basis-1/3 font-semibold text-2xl text-center'>
                                36.45
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-full flex flex-wrap gap-4 mt-4 justify-center items-center'>
                    {SDGSData.map((data, index) => {
                        return (
                            <SDGSCard key={index} data={data} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

const SDGSCard = ({ data }: { data: SDGSType }) => {
    return (
        <div className='p-4 rounded-lg bg-gradient-to-br from-emerald-600 to-emerald-400 text-white w-[300px]'>
            <div className='flex flex-row gap-2 items-start'>
                <Image
                    src={data.image}
                    width={200}
                    alt={data.aspect}
                    className='basis-1/3 object-cover w-[100px] h-[100px] rounded-lg'
                />
                <div className='basis-2/3'>
                    <p>Nilai</p>
                    <p className='font-semibold'>
                        {data.aspect}
                    </p>
                </div>
            </div>
            <p className='text-right font-semibold text-2xl'>{data.score}</p>
        </div>
    )
}

export default SDGS