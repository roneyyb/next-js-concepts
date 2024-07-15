import React from 'react'
import Link from 'next/link'

function Home() {
    return (
        <>
            <div>Home</div>
            <Link href="/dashboard" >Dashboard</Link>

            <Link style={{ display: "block" }} href="/server-side">Products</Link>
        </>
    )
}

export default Home