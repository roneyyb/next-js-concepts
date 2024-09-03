"use client"
import React from 'react'

export default function CreateQuotePage() {

    const [quote, setQuote] = React.useState("");

    return (
        <div
            className=' flex flex-1 flex-col gap-y-2'
        >
            <h1>CreateQuotePage</h1>

            <input type='text' placeholder='Write your quote' value={quote} onChange={(e) => {
                setQuote(e.target.value)
            }} />
            <button onClick={(e) => {
                e.preventDefault();

            }} className=' w-full bg-slate-600 rounded-sm '>

                <span style={{ color: "white" }}>{"Create quote"}</span>
            </button>
        </div>
    )
}
