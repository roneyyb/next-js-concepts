"use client"
import React from 'react'

function Error({ reset }) {
    return (
        <div>Error Boundary Global<button onClick={reset}>Try Again</button></div>
    )
}

export default Error