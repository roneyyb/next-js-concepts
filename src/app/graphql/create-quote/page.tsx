"use client"
import { CREATE_QUOTE, GET_ALL_QUOTES } from '@/datatypes/graphql/queries';
import { gql, useMutation } from '@apollo/client';
import React from 'react'

export default function CreateQuotePage() {

    const [quote, setQuote] = React.useState("");

    const [createQuoteMutate, { data: loginData, loading }] = useMutation(gql`${CREATE_QUOTE}`, {
        refetchQueries: [GET_ALL_QUOTES, "getAllQuotes"],
        context: {
            headers: {
                authorization: localStorage.getItem("auth_token"), // Pass the Authorization header
            },
        },

        onCompleted: (data) => {

            alert("QUOTE SAVED SUCCESSFULLY")
        },
        onError: (error) => {
            alert(error.message)
        },

    });


    if (loading) {
        return <div>{"Loading ..."}</div>
    }


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
                createQuoteMutate({
                    variables: { quoteInput: { name: quote } },

                })

            }} className=' w-full bg-slate-600 rounded-sm '>

                <span style={{ color: "white" }}>{"Create quote"}</span>
            </button>
        </div>
    )
}
