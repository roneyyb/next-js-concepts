import { notFound } from 'next/navigation'
import React from 'react'

function Review({ params: { productId, reviewId } }: { params: { productId: string, reviewId: string } }) {

    if (+reviewId > 1000) {
        return notFound()
    }
    return (
        <div>Review for {productId} is {reviewId}</div>
    )
}

export default Review 