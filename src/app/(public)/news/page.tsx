import NewsList from '@/components/NewsList'
import PageHeader from '@/components/PageHeader'
import React from 'react'

const NewsPage = () => {
    return (
        <div>
            <PageHeader
                title="Berita Desa Kutamukti"
                description="Sumber informasi terpercaya yang menyajikan kabar terbaru seputar kegiatan, perkembangan, dan dinamika yang terjadi di Desa Kutamukti. Mulai dari berita pembangunan, pertanian, sosial, hingga budaya lokal, semua dikemas dengan bahasa yang ringan dan mudah dipahami."
                breadCrumbs={["Berita Desa Kutamukti"]}
            />
            <div className='h-14' />
            <NewsList />
        </div>
    )
}

export default NewsPage