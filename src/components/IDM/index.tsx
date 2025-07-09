'use client'

import { ChartBarIcon, CityIcon } from '@phosphor-icons/react'
import Link from 'next/link'
import React from 'react'

const IDM = () => {
    return (
        <div className='mx-auto max-w-6xl py-16'>
            <div>
                <h1 className='uppercase font-semibold text-2xl text-center'>Infografis Desa Kutamukti</h1>
            </div>
            <div className='w-full flex flex-row gap-4 items-center justify-center mt-4'>
                <Link href={`/datas/idm`} className='py-4 px-8 rounded-xl shadow-lg aspect-square flex flex-col items-center justify-center bg-gradient-to-br from-emerald-600 to-emerald-400 text-white transition-all duration-300' >
                    <ChartBarIcon size={44} weight='thin' />
                    <p className='text-center'>IDM</p>
                </Link>
                <Link href={`/datas/sdgs`} className='py-4 px-8 rounded-xl shadow-lg aspect-square flex flex-col items-center justify-center bg-gradient-to-br from-emerald-0 to-emerald-0 hover:bg-gradient-to-br hover:from-emerald-200 hover:to-emerald-100 transition-all duration-300' >
                    <CityIcon size={44} weight='thin' />
                    <p className='text-center'>SDGs</p>
                </Link>
            </div>
        </div>
    )
}

export default IDM