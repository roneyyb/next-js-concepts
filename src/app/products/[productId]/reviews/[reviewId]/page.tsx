import React from 'react'

function Review({ params: { productId, reviewId } }: { params: { productId: string, reviewId: string } }) {
    console.log(productId, reviewId, "asdfds")
    return (
        <div>Review for {productId} is {reviewId}</div>
    )
}

export default Review 