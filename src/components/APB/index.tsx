'use client'

import { Image } from "@heroui/react"

const APB = () => {
    return (
        <div className="max-w-6xl px-2 mx-auto">
            <div className="w-full flex flex-row gap-6">
                <div className='basis-1/3 flex justify-end'>
                    <Image
                        src={`/images/apb-1.png`}
                        alt='apb visualization'
                        height={250}
                        width={250}
                        className='object-cover aspect-square'
                    />
                </div>
                <div className="basis-2/3">
                    <h1 className='font-semibold text-xl mb-6'>APB Desa Tahun 2025</h1>
                    <p>
                        Indeks Desa Membangun (IDM) merupakan indeks komposit yang dibentuk dari tiga indeks, yaitu Indeks Ketahanan Sosial, Indeks Ketahanan Ekonomi, dan Indeks Ketahanan Ekologi/Lingkungan.
                    </p> 
                    <div className="bg-gradient-to-br from-neutral-200 p-4 rounded-xl space-y-4 mt-4">
                        <p>
                            Pendapatan Desa
                        </p>
                        <p className="text-center text-2xl font-semibold mb-4">
                            Rp 4.980.709.678.987,00
                        </p>
                    </div>
                    <div className="bg-gradient-to-br from-neutral-200 p-4 rounded-xl space-y-4 mt-4">
                        <p>
                            Belanja Desa
                        </p>
                        <p className="text-center text-2xl font-semibold mb-4">
                            Rp 4.980.709.678.987,00
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default APB