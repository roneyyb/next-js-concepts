import React from 'react'
import Link from "next/link"

function ProductList() {
    return (
        <>
            <div><Link href="/products/1">ProductList1</Link></div>
            <div><Link href="/products/2" replace >ProductList2</Link></div>
            <div>ProductList3</div>
        </>
    )
}

export default ProductList