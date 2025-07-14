'use client'

import dynamic from 'next/dynamic'
const MapRender = dynamic(() => import('./mapRender'), {
    ssr: false
})

const Maps = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <MapRender />
        </div>
    )
}

export default Maps