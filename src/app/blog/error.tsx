"use client"
import React from 'react'

function Error({ reset, error }: { reset: Function, error: Error }) {



    return (
        <div>Error:{error.message}<button onClick={() => { reset() }}>Try Again</button></div>
    )
}

export default Error