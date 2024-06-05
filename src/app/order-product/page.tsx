"use client"

import React from 'react'
import { useRouter } from "next/navigation"

function OrderProduct() {

    const router = useRouter()
    const handleClick = () => {
        console.log("Place your order");
        router.replace("/")
    }


    return (
        <> <h1>OrderProduct</h1>
            <button onClick={handleClick}>Place order</button>
        </>
    )
}

export default OrderProduct