import React from 'react'
import { Metadata } from "next"

type Props = { params: { productId: string } };

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const title = await new Promise((res, rej) => {
        setTimeout(() => { res(`iPhone ${params.productId}`) }, 1000);
    });

    return {
        title: `Product ${title}`
    }
}

function ProductList({ params }: Props) {
    return (
        <>
            <div>Details about product {params.productId}</div>
        </>
    )
}

export default ProductList