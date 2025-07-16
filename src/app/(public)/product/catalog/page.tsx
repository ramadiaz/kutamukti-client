import PageHeader from '@/components/PageHeader'
import ProductCatalog from '@/components/ProductCatalog'
import React from 'react'

const ProductCatalogPage = () => {
    return (
        <div>
            <PageHeader
                title="Katalog Produk"
                description="Situs UMKM ini merupakan wadah dan tempat dimana beragam UMKM yang dimiliki desa digadang-gadang sebagai kekuatan yang akan bisa mendorong terciptanya peningkatan kesejahteraan dengan cara menciptakan produktivitas ekonomi bagi desa dengan berdasar pada ragam potensi yang dimiliki desa."
                breadCrumbs={["Produk Desa", "Katalog Produk"]}
            />
            <div className='h-12' />
            <ProductCatalog />
        </div>
    )
}

export default ProductCatalogPage