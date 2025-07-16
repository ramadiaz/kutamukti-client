import PageHeader from '@/components/PageHeader'
import ProductCatalog from '@/components/ProductCatalog'
import React from 'react'

const ProductCatalogPage = () => {
    return (
        <div>
            <PageHeader
                title="Katalog Produk"
                description="Halaman ini menampilkan katalog produk unggulan dari pelaku UMKM Desa Kutamukti, mulai dari hasil pertanian, kerajinan tangan, kuliner lokal, hingga produk kreatif lainnya. Setiap produk merupakan cerminan potensi dan kreativitas masyarakat desa yang terus berkembang. Dengan adanya katalog ini, diharapkan dapat memperluas jangkauan pemasaran, meningkatkan daya saing produk lokal, serta mendorong pertumbuhan ekonomi desa yang berkelanjutan."
                breadCrumbs={["Produk Desa", "Katalog Produk"]}
            />
            <div className='h-12' />
            <ProductCatalog />
        </div>
    )
}

export default ProductCatalogPage