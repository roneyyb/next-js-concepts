import React from 'react'
import Link from 'next/link'

function F5() {
    return (
        <div>
            <h1>F5</h1>
            <div>
                <Link href="/f1/f3">F3</Link>
                <Link href="/about">About</Link>
            </div>
        </div>
    )
}

export default F5