'use client'

import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
import { Marker, Popup, MapContainer, TileLayer } from 'react-leaflet'
import "./styles.css"
import { UMKM } from "@/types/umkm";
import { useEffect, useState } from "react";
import { ENV } from "@/lib/environment";
import Link from "next/link";

const position: L.LatLngExpression = [-6.144377830390365, 107.33701922883624]

const MapRender = () => {
    const [umkm, setUmkm] = useState<UMKM[]>()

    const UMKMMarker = L.icon({
        iconUrl: '/icons/basket-fill.svg',
        iconSize: [38, 95],
        iconAnchor: [0, 55],
        popupAnchor: [20, -25],
        shadowSize: [68, 95],
        shadowAnchor: [22, 94]
    });

    const BuildingMarker = L.icon({
        iconUrl: '/icons/map-pin-fill.svg',
        iconSize: [38, 95],
        iconAnchor: [0, 55],
        popupAnchor: [20, -25],
        shadowSize: [68, 95],
        shadowAnchor: [22, 94]
    });

    const fetchData = async () => {
        try {
            const res = await fetch(ENV.BASE_API + `/umkm/getall`)
            if (res.ok) {
                const data = await res.json()
                setUmkm(data.body as UMKM[])
            }
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        console.log({umkm})
    }, [umkm])

    return (
        <MapContainer center={position} zoom={17} scrollWheelZoom={false} className='h-[500px]'>
            <TileLayer
                className="z-10"
                attribution=''
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={BuildingMarker} >
                <Popup>
                    <div className="w-[270px]">
                        <p className="font-semibold uppercase text-medium">
                            Kantor Desa Kutamukti
                        </p>
                        <p className="text-sm">
                            V84P+6RC, Kutamukti, Kec. Kutawaluya, Karawang, Jawa Barat 41358
                        </p>
                    </div>
                </Popup>
            </Marker>
            {
                umkm?.map((item, i) => {
                    return (
                        <Marker key={i} position={[item.latitude, item.langitude]} icon={UMKMMarker} >
                            <Popup>
                                <div className="w-[270px]">
                                    <p className="font-semibold uppercase text-medium">
                                        {item.name}
                                    </p>
                                    <p className="text-sm">
                                        {item.location}
                                    </p>
                                    <div className="w-full flex flex-col gap-2 justify-end items-end">
                                        {/* <Link href={`/umkm/${item.uuid}`} target="_blank" className="text-right w-full">
                                            Lihat Produk
                                        </Link> */}
                                        <Link
                                            href={`https://www.google.com/maps?q=${item.latitude},${item.langitude}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 underline text-right w-full"
                                        >
                                            Lihat di Google Maps
                                        </Link>
                                    </div>
                                </div>
                            </Popup>
                        </Marker>
                    )
                })
            }
        </MapContainer>
    )
}

export default MapRender