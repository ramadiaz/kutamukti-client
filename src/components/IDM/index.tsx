'use client'

import { Image } from '@heroui/react'
import { ChartBarIcon, CityIcon } from '@phosphor-icons/react'
import Link from 'next/link'
import React from 'react'

type IDMType = {
    image: string
    title: string
    score: string
}

const IDMData: IDMType[] = [
    {
        image: "/idm/inspection.png",
        title: "Skor IDM 2025",
        score: "0.703"
    },
    {
        image: "/idm/error.png",
        title: "Status IDM 2025",
        score: "Berkembang"
    },
    {
        image: "/idm/cupid.png",
        title: "Target Status",
        score: "Maju"
    },
    {
        image: "/idm/minimize.png",
        title: "Skor Minimal",
        score: "0.707"
    },
    {
        image: "/idm/favorite.png",
        title: "Penambahan",
        score: "0.004"
    },
    {
        image: "/idm/volunteer.png",
        title: "Skor IKS",
        score: "0.777"
    },
    {
        image: "/idm/profit.png",
        title: "Skor IKE",
        score: "0.733"
    },
    {
        image: "/idm/tree-planting.png",
        title: "Skor IKL",
        score: "0.6"
    },
]

const IDM = () => {
    return (
        <div className='mx-auto max-w-6xl px-2 py-16'>
            <div>
                <h1 className='uppercase font-semibold text-2xl text-center'>Infografis Desa Kutamukti</h1>
            </div>
            <div className='w-full flex flex-row gap-2 sm:gap-4 items-center justify-center mt-4'>
                <Link href={`/datas/idm`} className='py-4 px-8 rounded-xl shadow-lg aspect-square flex flex-col items-center justify-center bg-gradient-to-br from-emerald-600 to-emerald-400 text-white transition-all duration-300' >
                    <ChartBarIcon size={44} weight='thin' />
                    <p className='text-center'>IDM</p>
                </Link>
                <Link href={`/datas/sdgs`} className='py-4 px-8 rounded-xl shadow-lg aspect-square flex flex-col items-center justify-center bg-gradient-to-br from-emerald-0 to-emerald-0 hover:bg-gradient-to-br hover:from-emerald-200 hover:to-emerald-100 transition-all duration-300' >
                    <CityIcon size={44} weight='thin' />
                    <p className='text-center'>SDGs</p>
                </Link>
            </div>
            <div className='w-full flex flex-col sm:flex-row gap-6 mt-6'>
                <div className='basis-1/3'>
                    <h2 className='font-semibold text-2xl mb-2'>IDM Kutamukti</h2>
                    <p className='text-sm text-justify'>
                        IDM adalah alat ukur yang digunakan oleh pemerintah untuk mengetahui tingkat kemandirian dan perkembangan suatu desa. Berdasarkan IDM, desa-desa di Indonesia dikategorikan dalam beberapa tingkatan, mulai dari desa sangat tertinggal, tertinggal, berkembang, maju, hingga mandiri. Nilai IDM yang semakin tinggi menunjukkan kondisi desa yang semakin baik dari segi sosial, ekonomi, dan ekolagi. IDM dapat menentukan status desa menjadi Desa Mandiri, Maju, Berkembang. Tertinggal, dan Sangat Tertinggal berdasarkan nilai dari indeks-indeks tersebut. Indeks Desa Membangun (IDM) merupakan indeks komposit yang dibentuk dari tiga indeks, yaitu:
                    </p>
                    <div className='hidden sm:flex flex-row mt-4'>
                        <div className='border py-2 px-6 flex flex-col items-center justify-start aspect-square w-[200px]'>
                            <Image
                                src={`/idm/1.png`}
                                width={100}
                                height={100}
                                alt='idm'
                                className='aspect-square w-[100px] h-[100px] object-cover'
                            />
                            <p className='font-semibold text-center uppercase'>
                                INDEX <br />  KETAHANAN SOSIAL
                            </p>
                            <p className='text-xs text-center'>Pendidikan Kesehatan Modal Sosial Pemukiman</p>
                        </div>
                        <div className='border py-2 px-6 flex flex-col items-center justify-start aspect-square w-[200px]'>
                            <Image
                                src={`/idm/2.png`}
                                width={100}
                                height={100}
                                alt='idm'
                                className='aspect-square w-[100px] h-[100px] object-cover'
                            />
                            <p className='font-semibold text-center uppercase'>
                                INDEX <br />  KETAHANAN EKONOMI
                            </p>
                            <p className='text-xs text-center'>Keragaman Produksi Masyarakat Akses Pusat Perdagangan dan Pasar Logistik Akses Perbankan dan Kredit Keterbukaan Wilayah</p>
                        </div>
                        <div className='border py-2 px-6 flex flex-col items-center justify-start aspect-square w-[200px]'>
                            <Image
                                src={`/idm/3.png`}
                                width={100}
                                height={100}
                                alt='idm'
                                className='aspect-square w-[100px] h-[100px] object-cover'
                            />
                            <p className='font-semibold text-center uppercase'>
                                INDEX <br /> KETAHANAN EKOLOGI
                            </p>
                            <p className='text-xs text-center'>Kualitas Lingkungan Bencana Alam Tanggap Bencana</p>
                        </div>
                    </div>
                </div>
                <div className='basis-2/3'>
                    <div className='w-full flex flex-wrap gap-2 sm:gap-4 mt-4 justify-center sm:justify-start items-center'>
                        {IDMData.map((item, i) => {
                            return (
                                <IDMCard key={i} data={item} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

const IDMCard = ({ data }: { data: IDMType }) => {
    return (
        <div className='w-[140px] rounded-xl bg-gradient-to-br from-emerald-700 to-emerald-500 p-3'>
            <div className='bg-gradient-to-br from-amber-100 to-white p-3 rounded-xl flex flex-col items-center justify-center h-[120px]'>
                <Image
                    src={data.image}
                    width={50}
                    height={50}
                    alt={data.title}
                />
                <p className='text-center text-sm text-[#46712B]'>{data.title}</p>
            </div>
            <p className='font-semibold uppercase text-center text-white pt-4'>
                {data.score}
            </p>
        </div>
    )
}

export default IDM