import PageHeader from '@/components/PageHeader'
import VideoGallery from '@/components/VideoGallery'
import React from 'react'

const VideoGalleryPage = () => {
    return (
        <div>
            <PageHeader
                title="Galeri Video Desa Kutamukti"
                description="Galeri Video Berita Desa Kutamukti menyajikan rekaman langsung berbagai kegiatan yang berlangsung di desa. Video-video ini menangkap suasana nyata, mulai dari kegiatan gotong royong, festival budaya, agenda pemerintahan desa, hingga liputan khusus."
                breadCrumbs={["Galeri", "Video "]}
            />
            <div className='h-14' />
            <VideoGallery />
        </div>
    )
}

export default VideoGalleryPage