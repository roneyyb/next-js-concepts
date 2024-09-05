"use client"
import { GET_USER } from '@/datatypes/graphql/queries';
import { gql, useQuery } from '@apollo/client';
import React from 'react'



export default function ProfilePage() {





    const { loading, error, data } = useQuery(gql`${GET_USER}`, {
        variables: { _id: localStorage.getItem("userId") },

    });


    if (loading) {
        return <div>{"Loading..."}</div>
    }

    console.log(data, "Data")

    return (
        <div style={{

        }} className=' flex flex-col items-center justify-center gap-y-2'>

            < img src='https://robohash.org/122.162.149.232.png' alt='' style={{
                backgroundColor: "salmon", borderRadius: 300
            }} />
            < div className=' flex flex-col gap-y-2 justify-center items-center' >
                <div className=' flex flex-row'>
                    <span>{"Email " + data.user.email}</span>
                </div>
                <div className=' flex flex-row'>
                    <span>{"Name " + data.user.firstName + " " + data.user.lastName}</span>
                </div>
                {data.user.quotes.length > 0 && <h4>{"Quotes"}</h4>}
                {data.user.quotes.map(item => <blockquote>{item}</blockquote>)}


            </div >

        </div >
    )
}
