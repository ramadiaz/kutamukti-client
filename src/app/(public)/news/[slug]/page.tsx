'use client'

import PageHeader from "@/components/PageHeader"
import { ENV } from "@/lib/environment"
import { News } from "@/types/news"
import dynamic from "next/dynamic"
import { use, useEffect, useState } from "react"

const NewsRead = dynamic(() => import("@/components/NewsRead"), {
    ssr: false
})

const NewsReadPage = ({
    params
}: {
    params: Promise<{ slug: string }>
}) => {
    const [newsData, setNewsData] = useState<News>()
    const { slug } = use(params)

    const fetchData = async () => {
        try {
            const res = await fetch(ENV.BASE_API + `/news/${slug}`)
            if (res.ok) {
                const data = await res.json()
                setNewsData(data.body as News)
            }
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    if (!newsData) return null

    return (
        <div>
            <PageHeader
                title={newsData?.title}
                isTitleOnly
                breadCrumbs={["Berita Desa Kutamukti"]}
            />
            <div className='h-8' />
            <NewsRead data={newsData} />
        </div>
    )
}

export default NewsReadPage