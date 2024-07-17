import React from 'react'
import Link from 'next/link'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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