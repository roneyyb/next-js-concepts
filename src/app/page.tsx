import React from 'react'
import Link from 'next/link'

function Home() {
    return (
        <>
            <div>Home</div>
            <Link href="/blog" >Blog</Link>
            <Link href="/products">Product</Link>
        </>
    )
}

export default Home