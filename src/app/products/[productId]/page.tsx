import React from 'react'

function ProductList({ params }: { params: { productId: string } }) {
    return (
        <>
            <div>Details about product {params.productId}</div>
        </>
    )
}

export default ProductList