'use client'

import { News } from '@/types/news'
import { Button, Image } from '@heroui/react'
import { ArrowRightIcon } from '@phosphor-icons/react'
import Link from 'next/link'
import React from 'react'

const NewsCard = ({ data }: { data: News }) => {
    return (
        <Link href={`/news/${data.slug}`} className='rounded-xl overflow-hidden w-[350px] h-[420px] shadow-xl relative'>
            <Image
                src={data.thumbnail_url}
                width={350}
                height={180}
                radius='none'
                referrerPolicy='no-referrer'
                alt={data.title}
                className='object-cover'
            />
            <div className='p-4 space-y-2'>
                <h1 className='font-semibold text-xl line-clamp-2'>
                    {data.title}
                </h1>
                <p className='text-sm opacity-90'>
                    Oleh {data.author.name}
                </p>
                <p className='text-sm line-clamp-3'>
                    {data.raw_text}
                </p>
                <Button color='success' className='text-white bg-emerald-600 text-sm absolute bottom-4 right-4' size='sm' radius='full'>
                    <div className='flex flex-row gap-2 items-center justify-center'>
                        <p>
                            Selengkapnya
                        </p>
                        <ArrowRightIcon size={20} />
                    </div>
                </Button>
            </div>
        </Link>
    )
}

export default NewsCard