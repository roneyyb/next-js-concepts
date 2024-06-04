import React from 'react'

function Docs({ params }: {
    params: {
        slug: string[]
    }
}) {

    console.log("slug", params)
    return (
        <div>Docs Home Page {params?.slug?.join(" ")}</div>
    )
}

export default Docs