'use client'

import { ENV } from '@/lib/environment'
import { News } from '@/types/news'
import { useEffect, useState } from 'react'
import NewsCard from './newsCard'

const NewsList = () => {
    const [newsData, setNewsData] = useState<News[]>([])

    const fetchData = async () => {
        try {
            const res = await fetch(ENV.BASE_API + `/news/getall`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })

            if (res.ok) {
                const data = await res.json()
                setNewsData(data.body as News[])
            }
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='max-w-6xl px-2 mx-auto'>
            <div className='flex flex-grow justify-center items-center gap-2 sm:gap-4'>
                {newsData.map((item, i) => {
                    return (
                        <NewsCard key={i} data={item} />
                    )
                })}
            </div>
        </div>
    )
}

export default NewsList