"use client"
import React from 'react'
import { useQuery, gql } from '@apollo/client';
import { GET_ALL_QUOTES } from '@/datatypes/graphql/queries';


export default function GetQuotes() {




    const { loading, error, data } = useQuery(gql`${GET_ALL_QUOTES}`);



    if (loading) {
        return <div>{"Loading..."}</div>
    } else if (error) {
        return <div>{error.message}</div>
    }
    else
        return (
            <div>
                {data.quotes.length == 0 && <h1>{"No Quotes Available"}</h1>}
                {data.quotes.map((item) => <h3>{item.name + " --- " + item.by.firstName}</h3>)}
            </div>

        )
}
