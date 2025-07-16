'use client'

import { News } from '@/types/news'
import { timeConvert } from '@/utils/timeConvert'
import { Button, Image, useDisclosure } from '@heroui/react'
import { ArrowLeftIcon, ClockIcon, ShareFatIcon } from '@phosphor-icons/react'
import Quill from 'quill'
import React, { useEffect, useRef } from 'react'
import TextEditor from '../TextEditor'
import ShareModal from '../ShareModal'
import { useRouter } from 'next/navigation'

const NewsRead = ({ data }: { data: News }) => {
    const shareDisclosure = useDisclosure()
    const quillRef = useRef<Quill>(null)
    const router = useRouter()

    useEffect(() => {
        if (quillRef.current && data.content) {
            if (typeof data.content === 'string') {
                const delta = quillRef.current.clipboard.convert({ html: data.content });
                quillRef.current.setContents(delta);
            }
            else if (typeof data.content === 'object') {
                quillRef.current.setContents(data.content);
            }
        }
    }, [data])

    return (
        <div className='max-w-6xl px-2 mx-auto'>
            <div className='w-full flex flex-row gap-8 items-center justify-between py-2'>
                <div className='flex flex-row gap-2 items-center'>
                    <ClockIcon size={20} />
                    <p>
                        {timeConvert(data.created_at)}
                    </p>
                </div>
                <p>
                    Oleh {data.author.name}
                </p>
            </div>
            <div>
                <Image
                    src={data.thumbnail_url}
                    width="100%"
                    height={500}
                    radius='sm'
                    alt={data.title}
                    className='object-cover'
                    referrerPolicy='no-referrer'
                />
                <p className={`italic text-center`}>
                    {data.title}
                </p>
            </div>
            <div className='reader-content [&_.ql-editor]:text-lg [&_.ql-editor]:leading-relaxed [&_.ql-editor]:p-5 [&_.ql-editor]:text-justify [&_.ql-editor_p]:text-justify [&_.ql-editor_h1]:text-left [&_.ql-editor_h2]:text-left [&_.ql-editor_h3]:text-left [&_.ql-toolbar]:hidden'>
                <TextEditor ref={quillRef} readOnly />
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
                <Button color='success' className='text-white bg-emerald-600 text-sm' onPress={shareDisclosure.onOpen}>
                    <div className='flex flex-row gap-2 items-center justify-center'>
                        <ShareFatIcon size={18} />
                        <p>
                            Share
                        </p>
                    </div>
                </Button>
            </div>
            <ShareModal disclosure={shareDisclosure} url={`https://kutamukti.id/news/${data.slug}`} />
        </div>
    )
}

export default NewsRead