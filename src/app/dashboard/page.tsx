"use client"

import React from "react"



export default function Page() {

    const [state, setState] = React.useState("");

    console.log("Dashboard Dashboard")

    return (
        <div>
            <input value={state} onChange={e => {
                setState(e.target.value)
            }} />
        </div>
    )
}