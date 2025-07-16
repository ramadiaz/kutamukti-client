'use client'

import { VideoTypes } from '@/types/videos';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import ShareModal from '../ShareModal';
import { Button, useDisclosure } from '@heroui/react';
import { ArrowLeftIcon, ShareFatIcon } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';

const VideoPlayer = ({ data }: { data: VideoTypes }) => {
    const modal = useDisclosure()
    const router = useRouter()

    return (
        <div className='max-w-6xl px-2 mx-auto'>
            <LiteYouTubeEmbed
                id={data.youtube_id}
                title={data.title}
            />
            <div className='py-4'>
                <h1 className='font-semibold text-2xl'>
                    {data.title}
                </h1>
                <p className=''>
                    {data.description}
                </p>
            </div>
            <div className='w-full flex flex-row justify-between gap-4 mt-8'>
                <Button color='success' className='text-white bg-emerald-600 text-sm' onPress={() => router.back()}>
                    <div className='flex flex-row gap-2 items-center justify-center'>
                        <ArrowLeftIcon size={20} />
                        <p>
                            Kembali
                        </p>
                    </div>
                </Button>
                <Button color='success' className='text-white bg-emerald-600 text-sm' onPress={modal.onOpen}>
                    <div className='flex flex-row gap-2 items-center justify-center'>
                        <ShareFatIcon size={18} />
                        <p>
                            Share
                        </p>
                    </div>
                </Button>
            </div>
            <ShareModal disclosure={modal} url={window.location.href} />
        </div>
    )
}

export default VideoPlayer