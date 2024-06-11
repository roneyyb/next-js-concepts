"use client"

import React from 'react'

function Square({ text, onClick }: { text: string, onClick: Function }) {
    return (
        <div onClick={() => {
            onClick()
        }} className=' bg-white text-center border h-6 w-6 border-black '>
            {text}
        </div>
    )
}

export default Square