import React from 'react'

function getRandomInit(count: number) {
    return Math.floor(Math.random() * count)
}

function ProductLayout({ children }: { children: React.ReactNode }) {

    const random = getRandomInit(2);


    if (random === 1) {
        throw new Error("Error loading product")
    }

    return (
        <div>
            ProductLayout
            {children}
        </div>
    )
}

export default ProductLayout