'use client'

import { Image } from '@heroui/react'
import React from 'react'

type HistoryType = {
  title: string,
  desc: string,
  image: string,
}

const HistoryData: HistoryType[] = [
  {
    title: 'Tahun 1966 – Awal Sejarah Desa Kutamukti',
    desc: 'Berdasarkan catatan monografi Desa Kutagandok serta keterangan dari tokoh masyarakat setempat, tahun 1966 menandai awal pembentukan identitas Desa Kutamukti. Saat itu, Kutagandok merupakan salah satu desa induk di Kecamatan Kutawaluya yang memiliki luas wilayah cukup besar dan jumlah penduduk yang terus meningkat.',
    image: '/images/hero-1.JPG'
  },
  {
    title: 'Tahun 1972 – Pemekaran Menjadi Desa Kutamukti',
    desc: 'Pada tahun ini, secara administratif Desa Kutagandok resmi dimekarkan melalui Peraturan Bupati (walaupun SK-nya spesifik untuk Kutamukti baru diterbitkan pada 2023) menjadi Desa Kutamukti, dengan jabatan kepala desa dipegang sementara oleh Pjs Haris Kardi.',
    image: '/images/hero-1.JPG'
  },
  {
    title: 'Tahun 1974 – Pemekaran Menjadi Desa Kutajaya',
    desc: 'Hanya dua tahun setelah itu, Kutamukti kembali mengalami tahap pemekaran ke Desa Kutajaya, dengan kepemimpinan Pjs Haris Kardi berlanjut. Ini menunjukkan pola penataan wilayah berjenjang untuk mencerminkan perkembangan lokal baik secara administratif maupun demografis.',
    image: '/images/hero-1.JPG'
  },
  {
    title: 'Tahun 1976 – Kepala Desa Terpilih',
    desc: 'Setelah dua kali masa penjabat sementara, akhirnya Haris Kardi terpilih secara demokratis sebagai Kepala Desa definitif Kutamukti, dan memimpin selama lebih dari satu dekade (1976–1992). Pemilihan ini mencerminkan sistem demokrasi desa yang mulai kuat pasca dekade 1960-an.',
    image: '/images/hero-1.JPG'
  }
]

const HistoryTimeLine = () => {
  return (
    <div>
      <h1 className='text-2xl font-semibold'>Sejarah Kelembagaan Desa Kutamukti</h1>
      <div className='space-y-6 mt-6'>
        {HistoryData.map((item, i) => {
          return (
            <TimeLineCard key={i} data={item} />
          )
        })}
      </div>
    </div>
  )
}

const TimeLineCard = ({ data }: { data: HistoryType }) => {
  return (
    <div className='p-6 sm:p-8 bg-gradient-to-br from-neutral-200 flex flex-row justify-between gap-2 sm:gap-4 rounded-xl'>
      <div className='sm:basis-3/4 space-y-2 sm:space-y-4'>
        <h2 className='font-semibold text-xl sm:text-2xl'>
          {data.title}
        </h2>
        <p className='text-justify'>
          {data.desc}
        </p>
      </div>
      <div className='hidden sm:basis-1/4 sm:flex justify-end'>
        <Image
          src={data.image}
          alt={data.title}
          height={300}
          width={225}
          className="object-cover shadow-xl"
        />
      </div>
    </div>
  )
}

export default HistoryTimeLine