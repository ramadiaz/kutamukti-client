'use client'

import { Card, CardBody, CardHeader, Image } from '@heroui/react'
import React, { useEffect } from 'react'

type ProfileType = {
    name: string
    image: string
    role: string
}

const ProfileData: ProfileType[] = [
    {
        name: "Mulky Ismail Ramadhan",
        image: "/kkn/mulky.jpeg",
        role: "Ketua"
    },
    {
        name: "Farah Nur Aulia",
        image: "/kkn/mulky.jpeg",
        role: "Wakil Ketua"
    },
    {
        name: "Tegar Permata Sasmita ",
        image: "/kkn/mulky.jpeg",
        role: "Bendahara"
    },
    {
        name: "Chaisya Wilver",
        image: "/kkn/mulky.jpeg",
        role: "Sekretaris"
    },
    {
        name: "Sasqia Ivo Marinda",
        image: "/kkn/mulky.jpeg",
        role: "Sekretaris"
    },
    {
        name: "Dhea Carisa Ardelia",
        image: "/kkn/mulky.jpeg",
        role: "Div. Acara"
    },
    {
        name: "Michael Franky",
        image: "/kkn/mulky.jpeg",
        role: "Div. Acara"
    },
    {
        name: "Mega Pramesti",
        image: "/kkn/mulky.jpeg",
        role: "Div. Acara"
    },
    {
        name: "Eunike Louisia Matondang",
        image: "/kkn/mulky.jpeg",
        role: "Div. HUMAS"
    },
    {
        name: "Rama Diaz",
        image: "/kkn/mulky.jpeg",
        role: "Div. HUMAS"
    },
    {
        name: "Nur Hasanah Mas'ud",
        image: "/kkn/mulky.jpeg",
        role: "Div. HUMAS"
    },
    {
        name: "Sopian Syauri",
        image: "/kkn/mulky.jpeg",
        role: "Div. PDD "
    },
    {
        name: "Ananta Ziaurohman",
        image: "/kkn/mulky.jpeg",
        role: "Div. PDD "
    },
    {
        name: "Naina Jazzyntia Divani ",
        image: "/kkn/mulky.jpeg",
        role: "Div. PDD"
    },
    {
        name: "Muhammad Ageng Nugroho",
        image: "/kkn/mulky.jpeg",
        role: "Div. LOGSUM"
    },
    {
        name: "Mochamad Pandu Pribadi",
        image: "/kkn/mulky.jpeg",
        role: "Div. LOGSUM"
    },
    {
        name: "Khansa Athaya",
        image: "/kkn/mulky.jpeg",
        role: "Div. LOGSUM"
    },
    {
        name: "Dina Herlina",
        image: "/kkn/mulky.jpeg",
        role: "Div. LOGSUM"
    },
]

const CreatedBy = () => {

    useEffect(() => {
        console.log(ProfileData.length)
    }, [])

    return (
        <div className='w-full mx-auto max-w-6xl'>
            <div className='w-full flex flex-wrap justify-center gap-4'>
                {ProfileData.map((item, i) => {
                    return (
                        <ProfileCard key={i} data={item} />
                    )
                })}
            </div>

        </div>
    )
}

const ProfileCard = ({ data }: { data: ProfileType }) => {
    return (
        <Card className="py-4">
            <CardBody className="overflow-visible py-2">
                <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={data.image}
                    width={270}
                    height={200}
                />
            </CardBody>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">{data.name}</h4>
                <p className="text-tiny uppercase">{data.role}</p>
            </CardHeader>
        </Card>
    )
}

export default CreatedBy