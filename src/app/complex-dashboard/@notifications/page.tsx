import React from 'react'
import Link from 'next/link'

export default function Notifications() {
    return <h1>Notifications
        <Link href="/complex-dashboard/archived">
            Archived
        </Link>
    </h1>
}