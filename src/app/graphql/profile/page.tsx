import React from 'react'



export default function ProfilePage() {
    return (
        <div style={{

        }} className=' flex flex-col items-center justify-center gap-y-2'>

            < img src='https://robohash.org/122.162.149.232.png' alt='' style={{
                backgroundColor: "salmon", borderRadius: 300
            }} />
            < div className=' flex flex-col gap-y-2 justify-center items-center' >
                <div className=' flex flex-row'>
                    <span>{"Email " + "bothra.rajat08@gmail.com"}</span>
                </div>
                <div className=' flex flex-row'>
                    <span>{"Name " + "Rajat Bothra"}</span>
                </div>
                <h4>{"Quotes"}</h4>
                <blockquote>{"Not attatching to past in the way to live in present moment"}</blockquote>
                <blockquote>{"Dont let your past failure impace future actions"}</blockquote>
            </div >

        </div >
    )
}
